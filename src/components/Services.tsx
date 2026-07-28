import { SectionHeader } from "./SectionHeader";
import { ServiceCard } from "./ServiceCard";
import { services } from "@/lib/services";

export function Services() {
  return (
    <section id="services" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Services"
          title={
            <>
              Ten ways to put your
              <br className="hidden sm:block" /> business on autopilot.
            </>
          }
          description="From first WhatsApp reply to a fully custom AI agent — every service is trained on your business and shipped in days, not months."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
