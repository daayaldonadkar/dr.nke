import { HeartHandshake, FlaskConical, Award, Clock } from "lucide-react";
import { Container, Reveal, Eyebrow } from "./primitives";
import { DOCTOR_NAME } from "./site-data";

const reasons = [
  {
    icon: HeartHandshake,
    title: "Patient-Centric Care",
    desc: "Every plan starts with listening. Your concerns, lifestyle, and goals shape the treatment.",
  },
  {
    icon: FlaskConical,
    title: "Evidence-Based Treatment",
    desc: "Decisions grounded in the latest clinical research — never guesswork.",
  },
  {
    icon: Award,
    title: "Experienced Physician",
    desc: "Over 12 years and 20,000+ patients across the full spectrum of general medicine.",
  },
  {
    icon: Clock,
    title: "Accessible Healthcare",
    desc: "Easy appointments, quick responses on WhatsApp, and a central, reachable location.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#0b1220] py-[110px] text-white md:py-[140px]">
      {/* glows */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -top-20 left-1/4 h-[480px] w-[480px] rounded-full bg-[#2563eb]/25 blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-[#3b82f6]/15 blur-[150px]" />
      </div>

      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[13px] font-medium uppercase tracking-wide text-[#93c5fd]">
            Why patients trust us
          </span>
          <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
            Why patients trust <span className="whitespace-nowrap">{DOCTOR_NAME}</span>
          </h2>
          <p className="mt-5 text-[20px] leading-relaxed text-white/70">
            A standard of care that feels personal, precise, and reassuring.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08}>
              <div className="glass-dark group h-full rounded-[28px] p-7 transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.09]">
                <div className="flex items-center gap-3">
                  <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-[#2563eb]/20 p-3 text-[#93c5fd] transition-colors group-hover:bg-[#2563eb] group-hover:text-white">
                    <r.icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-[19px] font-semibold tracking-tight text-white">
                    {r.title}
                  </h3>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-white/65">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
