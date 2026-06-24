import { MapPin, Clock, Phone, MessageCircle, Siren, Navigation } from "lucide-react";
import { Container, Reveal, Eyebrow } from "./primitives";

const details = [
  {
    icon: MapPin,
    label: "Address",
    value: "42 Wellness Avenue, Bandra West, Mumbai 400050",
  },
  {
    icon: Clock,
    label: "Timings",
    value: "Mon – Sat · 9:00 AM – 8:00 PM",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 98765 43210",
    href: "https://wa.me/919876543210",
    tint: "text-[#16a34a]",
  },
  {
    icon: Siren,
    label: "Emergency Contact",
    value: "+91 98765 00000",
    href: "tel:+919876500000",
    tint: "text-[#dc2626]",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-white to-[#e8f1ff] py-[110px] md:py-[140px]"
    >
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Contact</Eyebrow>
          <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[#0f172a]">
            Visit our clinic
          </h2>
          <p className="mt-5 text-[20px] leading-relaxed text-[#475569]">
            We'd love to care for you. Reach out, drop by, or find us on the map.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left — details */}
          <Reveal>
            <div className="flex h-full flex-col gap-4">
              {details.map((d) => {
                const Body = (
                  <div className="group flex items-start gap-4 rounded-3xl border border-[rgba(15,23,42,0.06)] bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#dbeafe]">
                      <d.icon className={`h-[22px] w-[22px] ${d.tint ?? "text-[#2563eb]"}`} />
                    </span>
                    <div>
                      <div className="text-[14px] font-medium uppercase tracking-wide text-[#94a3b8]">
                        {d.label}
                      </div>
                      <div className="mt-1 text-[18px] font-medium text-[#0f172a]">{d.value}</div>
                    </div>
                  </div>
                );
                return d.href ? (
                  <a key={d.label} href={d.href}>
                    {Body}
                  </a>
                ) : (
                  <div key={d.label}>{Body}</div>
                );
              })}
            </div>
          </Reveal>

          {/* Right — map */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col overflow-hidden rounded-[32px] border border-[rgba(15,23,42,0.06)] bg-white shadow-soft-lg">
              <iframe
                title="Clinic location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=72.81%2C19.04%2C72.86%2C19.08&layer=mapnik&marker=19.06%2C72.83"
                className="h-[380px] w-full grayscale-[0.15] lg:h-full"
                loading="lazy"
              />
              <div className="border-t border-[rgba(15,23,42,0.06)] p-5">
                <a
                  href="https://maps.google.com"
                  className="flex w-full items-center justify-center gap-2 rounded-[18px] bg-[#2563eb] px-6 py-4 text-[16px] font-medium text-white shadow-glow transition-all hover:-translate-y-0.5"
                >
                  <Navigation className="h-5 w-5" />
                  Get Directions
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
