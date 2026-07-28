import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Services } from "@/components/Services";
import { Why } from "@/components/Why";
import { DemoStrip } from "@/components/DemoStrip";
import { Stats } from "@/components/Stats";
import { Process } from "@/components/Process";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Why />
        <DemoStrip />
        <Stats />
        <Process />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
