#!/usr/bin/env python3
"""filepack — pack a project's essential source files into ONE compressed text
file (and unpack it back).

The text file is base64(gzip(tar)) of everything needed to clone the project.
Build artifacts, dependencies and secrets are skipped (same spirit as
.gitignore): node_modules/, .next/, .git/, .env*, *.log, etc.

Usage
-----
    python filepack.py pack                 # -> out.txt
    python filepack.py pack --out mypack.txt
    python filepack.py list                 # preview what would be included
    python filepack.py unpack out.txt              # -> ./restored
    python filepack.py unpack out.txt ../clone      # -> ../clone

Decode without this script (out.txt is plain base64 of a .tar.gz):
    Linux/macOS/WSL:  base64 -d out.txt | tar -xzf -
    Windows PowerShell:
        [IO.File]::WriteAllBytes("project.tar.gz",
            [Convert]::FromBase64String((Get-Content out.txt -Raw)))
        tar -xzf project.tar.gz
"""

from __future__ import annotations

import argparse
import base64
import gzip
import io
import os
import sys
import tarfile
from pathlib import Path

# --- what to leave out -------------------------------------------------------

# Directory names skipped at any depth.
EXCLUDE_DIRS = {
    ".git", ".hg", ".svn",
    "node_modules", ".pnp", ".yarn",
    ".next", "out", "build", "dist", ".turbo", ".cache",
    "coverage", ".nyc_output",
    ".vercel", ".idea", ".vscode",
    "__pycache__",
}

# Exact file names skipped.
# package-lock.json is omitted: package.json is enough to reinstall deps; the
# lockfile only pins exact versions for reproducible installs (not needed to clone).
EXCLUDE_FILES = {".DS_Store", "Thumbs.db", "out.txt", "next-env.d.ts", "package-lock.json"}

# File suffixes skipped.
EXCLUDE_SUFFIXES = (".tsbuildinfo", ".pem", ".log", ".pyc")


def _is_env_file(name: str) -> bool:
    # never bundle secrets: .env, .env.local, .env.production, ...
    return name == ".env" or name.startswith(".env.")


def iter_files(root: Path, out_path: Path | None):
    """Yield project-relative POSIX paths for every essential file."""
    root = root.resolve()
    out_resolved = out_path.resolve() if out_path else None
    for dirpath, dirnames, filenames in os.walk(root):
        # prune excluded directories in place so os.walk won't descend into them
        dirnames[:] = sorted(d for d in dirnames if d not in EXCLUDE_DIRS)
        for name in sorted(filenames):
            if name in EXCLUDE_FILES or _is_env_file(name):
                continue
            if name.endswith(EXCLUDE_SUFFIXES):
                continue
            full = Path(dirpath) / name
            if out_resolved and full.resolve() == out_resolved:
                continue  # never pack our own output
            yield full.relative_to(root).as_posix()


# --- packing -----------------------------------------------------------------

def _human(n: int) -> str:
    step = 1024.0
    for unit in ("B", "KB", "MB", "GB"):
        if n < step:
            return f"{n:.0f} {unit}" if unit == "B" else f"{n:.1f} {unit}"
        n /= step
    return f"{n:.1f} TB"


def pack(root: Path, out_path: Path) -> None:
    root = root.resolve()
    rels = list(iter_files(root, out_path))
    if not rels:
        sys.exit(f"No files found to pack under: {root}")

    # Build an uncompressed tar in memory with normalized, metadata-free entries
    # so the archive is deterministic and leaks no OS user info.
    raw_total = 0
    buf = io.BytesIO()
    with tarfile.open(fileobj=buf, mode="w") as tar:
        for rel in rels:
            data = (root / rel).read_bytes()
            raw_total += len(data)
            info = tarfile.TarInfo(name=rel)
            info.size = len(data)
            info.mtime = 0
            info.mode = 0o644
            info.uid = info.gid = 0
            info.uname = info.gname = ""
            tar.addfile(info, io.BytesIO(data))

    gz = gzip.compress(buf.getvalue(), compresslevel=9, mtime=0)
    b64 = base64.b64encode(gz).decode("ascii")
    text = "\n".join(b64[i:i + 76] for i in range(0, len(b64), 76)) + "\n"
    out_path.write_text(text, encoding="ascii")

    print(f"Packed {len(rels)} files from {root}")
    for rel in rels:
        print(f"  + {rel}")
    print(
        f"\nsource {_human(raw_total)}  ->  {_human(len(gz))} compressed  "
        f"->  {_human(len(text.encode('ascii')))} text"
    )
    print(f"Wrote: {out_path}")
    print("\nDecode with:  python filepack.py unpack "
          f"{out_path.name} <destination>")


# --- unpacking ---------------------------------------------------------------

def _safe_members(tar: tarfile.TarFile, dest: Path):
    dest = dest.resolve()
    for member in tar.getmembers():
        name = member.name.replace("\\", "/")
        parts = name.split("/")
        if name.startswith("/") or ".." in parts or (len(name) > 1 and name[1] == ":"):
            raise ValueError(f"Refusing unsafe path in archive: {member.name!r}")
        target = (dest / name).resolve()
        if target != dest and dest not in target.parents:
            raise ValueError(f"Path escapes destination: {member.name!r}")
        if not (member.isfile() or member.isdir()):
            raise ValueError(f"Unsupported entry type in archive: {member.name!r}")
        yield member


def unpack(txt_path: Path, dest: Path) -> None:
    raw = txt_path.read_text(encoding="ascii")
    data = base64.b64decode("".join(raw.split()))
    tar_bytes = gzip.decompress(data)
    dest.mkdir(parents=True, exist_ok=True)
    count = 0
    with tarfile.open(fileobj=io.BytesIO(tar_bytes), mode="r") as tar:
        members = list(_safe_members(tar, dest))
        try:
            tar.extractall(dest, members=members, filter="data")  # py>=3.12
        except TypeError:
            tar.extractall(dest, members=members)
        count = sum(1 for m in members if m.isfile())
    print(f"Restored {count} files into: {dest.resolve()}")


# --- cli ---------------------------------------------------------------------

def main() -> None:
    here = Path(__file__).resolve().parent
    parser = argparse.ArgumentParser(description="Pack/unpack a project to a single text file.")
    sub = parser.add_subparsers(dest="cmd", required=True)

    p_pack = sub.add_parser("pack", help="pack essential files into a text file")
    p_pack.add_argument("--root", default=str(here), help="project root (default: this script's folder)")
    p_pack.add_argument("--out", default=str(here / "out.txt"), help="output text file (default: out.txt)")

    p_list = sub.add_parser("list", help="list files that would be packed")
    p_list.add_argument("--root", default=str(here), help="project root (default: this script's folder)")

    p_unpack = sub.add_parser("unpack", help="restore files from a packed text file")
    p_unpack.add_argument("file", help="the packed text file (e.g. out.txt)")
    p_unpack.add_argument("dest", nargs="?", default="restored", help="destination folder (default: ./restored)")

    args = parser.parse_args()

    if args.cmd == "pack":
        pack(Path(args.root), Path(args.out))
    elif args.cmd == "list":
        for rel in iter_files(Path(args.root), None):
            print(rel)
    elif args.cmd == "unpack":
        unpack(Path(args.file), Path(args.dest))


if __name__ == "__main__":
    main()
