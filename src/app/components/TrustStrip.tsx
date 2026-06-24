import { Stethoscope, Users, Star, HeartPulse } from "lucide-react";
import { Container, Reveal, CountUp } from "./primitives";

const items = [
  { icon: Stethoscope, end: 12, suffix: "+", label: "Years Experience" },
  { icon: Users, end: 20, suffix: "K+", label: "Patients Served" },
  { icon: Star, end: 4.9, decimals: 1, label: "Google Rating" },
  { icon: HeartPulse, end: 100, suffix: "%", label: "Comprehensive Care" },
];

export function TrustStrip() {
  return (
    <section className="relative bg-white py-20">
      <Container className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {items.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.08}>
            <div className="shadow-soft hover:shadow-soft-lg group h-full rounded-3xl border border-[rgba(15,23,42,0.06)] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#dbeafe] text-[#2563eb] transition-colors group-hover:bg-[#2563eb] group-hover:text-white">
                <item.icon className="h-6 w-6" />
              </span>
              <div className="mt-5 text-[34px] font-bold tracking-tight text-[#0f172a]">
                <CountUp end={item.end} suffix={item.suffix ?? ""} decimals={item.decimals ?? 0} />
              </div>
              <div className="mt-1 text-[15px] text-[#475569]">{item.label}</div>
            </div>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
