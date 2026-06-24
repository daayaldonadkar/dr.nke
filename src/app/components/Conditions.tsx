import {
  Droplet,
  Activity,
  Thermometer,
  Gauge,
  Wind,
  Brain,
  BatteryLow,
  Soup,
  HeartPulse,
} from "lucide-react";
import { Container, Reveal, Eyebrow } from "./primitives";

const conditions = [
  { icon: Droplet, name: "Diabetes", desc: "Blood sugar monitoring and long-term management plans." },
  { icon: Gauge, name: "High Blood Pressure", desc: "Hypertension control with lifestyle and medication." },
  { icon: Thermometer, name: "Fever & Infections", desc: "Accurate diagnosis and treatment of acute illness." },
  { icon: Activity, name: "Thyroid Disorders", desc: "Hormonal evaluation and balanced treatment." },
  { icon: Wind, name: "Allergies", desc: "Identifying triggers and providing lasting relief." },
  { icon: Brain, name: "Headaches & Migraines", desc: "Root-cause assessment and preventive care." },
  { icon: BatteryLow, name: "Fatigue & Weakness", desc: "Comprehensive workups to restore your energy." },
  { icon: Soup, name: "Digestive Problems", desc: "Care for stomach, gut, and digestive health." },
  { icon: HeartPulse, name: "Lifestyle Diseases", desc: "Holistic management of chronic conditions." },
];

export function Conditions() {
  return (
    <section
      id="conditions"
      className="relative overflow-hidden bg-[#f0f6ff] py-[110px] md:py-[140px]"
    >
      <div className="pointer-events-none absolute right-0 top-0 -z-0 h-[400px] w-[400px] rounded-full bg-[#dbeafe]/70 blur-[120px]" />
      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Conditions</Eyebrow>
          <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[#0f172a]">
            Conditions we treat
          </h2>
          <p className="mt-5 text-[20px] leading-relaxed text-[#475569]">
            Comprehensive care for common and chronic health conditions.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {conditions.map((c, i) => (
            <Reveal key={c.name} delay={(i % 3) * 0.08}>
              <div className="group h-full rounded-[32px] border border-[rgba(15,23,42,0.06)] bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-soft-lg">
                <div className="flex items-center gap-4 sm:block">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#dbeafe] text-[#2563eb] transition-colors group-hover:bg-[#2563eb] group-hover:text-white">
                    <c.icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-[20px] font-semibold tracking-tight text-[#0f172a] sm:mt-6">
                    {c.name}
                  </h3>
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-[#475569]">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
