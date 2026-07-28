import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project (a sibling lockfile exists at the
  // parent, which would otherwise be inferred as the root).
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
