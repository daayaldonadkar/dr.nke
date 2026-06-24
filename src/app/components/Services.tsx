import { Stethoscope, ShieldCheck, Droplet, Gauge, Salad, Accessibility } from "lucide-react";
import { Container, Reveal, Eyebrow } from "./primitives";

const services = [
  {
    icon: Stethoscope,
    title: "General Consultation",
    desc: "Thorough, unhurried consultations for any health concern, with clear explanations and a personalized plan.",
  },
  {
    icon: ShieldCheck,
    title: "Preventive Health Checkups",
    desc: "Comprehensive screenings that catch issues early and keep you ahead of your health.",
  },
  {
    icon: Droplet,
    title: "Diabetes Management",
    desc: "Structured monitoring, diet guidance, and medication tuning for stable blood sugar.",
  },
  {
    icon: Gauge,
    title: "Hypertension Management",
    desc: "Ongoing blood pressure control combining lifestyle coaching with the right medication.",
  },
  {
    icon: Salad,
    title: "Lifestyle Counseling",
    desc: "Practical, sustainable changes in nutrition, activity, and sleep tailored to your life.",
  },
  {
    icon: Accessibility,
    title: "Senior Citizen Care",
    desc: "Gentle, attentive care for older adults — managing multiple conditions with dignity.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-white py-[110px] md:py-[140px]">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Services</Eyebrow>
          <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[#0f172a]">
            Care designed around you
          </h2>
          <p className="mt-5 text-[20px] leading-relaxed text-[#475569]">
            A full spectrum of services — from everyday care to specialized,
            long-term management.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <a
                href="#contact"
                className="group flex h-full flex-col rounded-[28px] border border-[rgba(15,23,42,0.06)] bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft-lg"
              >
                <div className="flex items-center gap-4 sm:block">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#dbeafe] text-[#2563eb] transition-colors group-hover:bg-[#2563eb] group-hover:text-white">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-[20px] font-semibold tracking-tight text-[#0f172a] sm:mt-5">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-[#475569]">{s.desc}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
