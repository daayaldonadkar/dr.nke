import { GraduationCap, Award, Stethoscope, Hospital, Building2, Users, BadgeCheck, Quote } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Container, Reveal, Eyebrow } from "./primitives";
import { images, DOCTOR_NAME } from "./site-data";

const journey = [
  {
    icon: GraduationCap,
    period: "2012 – 2016",
    title: "MBBS",
    place: "Government Medical College, Nagpur",
    kind: "Education",
  },
  {
    icon: Stethoscope,
    period: "2016 – 2017",
    title: "Medical Officer",
    place: "Gondia",
    kind: "Experience",
  },
  {
    icon: Award,
    period: "2017 – 2019",
    title: "MD — General Medicine",
    place: "Government Medical College, Nanded",
    kind: "Education",
  },
  {
    icon: Hospital,
    period: "2019 – 2020",
    title: "Senior Resident",
    place: "Pune Government Medical College",
    kind: "Experience",
  },
  {
    icon: Building2,
    period: "2020 – 2021",
    title: "Consultant Physician",
    place: "Ruby Hospital",
    kind: "Experience",
  },
  {
    icon: Hospital,
    period: "2022 – 2026",
    title: "Senior Consultant",
    place: "Christanand Hospital, Bramhapuri",
    kind: "Experience",
  },
  {
    icon: Users,
    period: "2026 – Present",
    title: "Founder & MD",
    place: "Nakade Hospital",
    kind: "Milestone",
  },
];

const credentials = [
  "Board Certified",
  "Evidence-Based Care",
  "Preventive Medicine",
  "Chronic Disease Management",
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-[110px] md:py-[140px]">
      <div className="pointer-events-none absolute -left-40 top-1/4 -z-10 h-[440px] w-[440px] rounded-full bg-[#dbeafe]/50 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-[#93c5fd]/15 blur-[150px]" />

      <Container>
        {/* Top: portrait + narrative */}
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Portrait */}
          <Reveal>
            <div className="relative mx-auto w-full max-w-[440px]">
              <div className="absolute -inset-5 -z-10 rounded-[48px] bg-gradient-to-br from-[#2563eb]/20 to-transparent blur-2xl" />
              <div className="overflow-hidden rounded-[40px] border border-white/60 bg-[#dbeafe] shadow-soft-lg">
                <ImageWithFallback
                  src={images.aboutPortrait}
                  alt={`${DOCTOR_NAME} in consultation`}
                  className="h-[520px] w-full object-cover"
                />
              </div>
              <div className="glass shadow-soft-lg absolute -bottom-6 -right-4 flex items-center gap-3 rounded-2xl px-5 py-4">
                <BadgeCheck className="h-7 w-7 text-[#2563eb]" />
                <div>
                  <div className="text-[15px] font-semibold text-[#0f172a]">Board Certified</div>
                  <div className="text-[13px] text-[#475569]">Internal Medicine</div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Narrative */}
          <div>
            <Reveal>
              <Eyebrow>About</Eyebrow>
              <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[#0f172a]">
                Meet {DOCTOR_NAME}
              </h2>
              <p className="mt-6 text-[18px] leading-relaxed text-[#475569]">
                An MD in General Medicine with over a decade of experience caring
                for individuals and families. A practice built on listening first
                — combining evidence-based medicine with genuine empathy to guide
                patients toward lasting wellness.
              </p>

              {/* Pull quote */}
              <div className="mt-8 flex gap-4 rounded-[24px] border border-[rgba(37,99,235,0.12)] bg-[#f5f9ff] p-6">
                <Quote className="h-8 w-8 shrink-0 text-[#2563eb]" fill="currentColor" />
                <p className="text-[18px] font-medium leading-relaxed text-[#0f172a]">
                  "Every consultation is unhurried, personal, and focused on what
                  matters most — your health."
                </p>
              </div>

              {/* Credential chips */}
              <div className="mt-8 flex flex-wrap gap-2.5">
                {credentials.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-[rgba(15,23,42,0.08)] bg-white px-4 py-2 text-[14px] font-medium text-[#475569] shadow-soft"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom: the journey timeline */}
        <div className="mt-24 lg:mt-28">
          <Reveal className="mb-16 text-center">
            <Eyebrow>The Journey</Eyebrow>
            <h3 className="mt-5 text-[clamp(1.6rem,3vw,2.25rem)] font-bold tracking-[-0.02em] text-[#0f172a]">
              Education &amp; experience
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-[#475569]">
              From medical school to leading his own practice — a career built on
              care.
            </p>
          </Reveal>

          <div className="relative mx-auto max-w-3xl">
            {/* Center spine */}
            <div className="pointer-events-none absolute bottom-0 left-[27px] top-0 w-[2px] bg-gradient-to-b from-[#2563eb]/0 via-[#2563eb]/30 to-[#2563eb]/0 lg:left-1/2 lg:-translate-x-1/2" />

            <div className="space-y-8 lg:space-y-2">
              {journey.map((step, i) => {
                const left = i % 2 === 0;
                return (
                  <Reveal key={step.title} delay={(i % 2) * 0.08}>
                    <div className="group relative lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-4">
                      {/* Node on the spine */}
                      <motion.span
                        whileHover={{ scale: 1.12 }}
                        transition={{ type: "spring", stiffness: 300, damping: 18 }}
                        className="absolute left-[27px] top-6 z-10 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#2563eb] to-[#3b82f6] text-white shadow-glow ring-4 ring-[#fafafa] lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2"
                      >
                        <step.icon className="h-6 w-6" />
                      </motion.span>

                      {/* Card — alternates sides on desktop */}
                      <div
                        className={`ml-[68px] lg:ml-0 ${
                          left
                            ? "lg:col-start-1 lg:pr-14 lg:text-right"
                            : "lg:col-start-2 lg:pl-14"
                        }`}
                      >
                        <div className="rounded-[24px] border border-[rgba(15,23,42,0.06)] bg-white p-6 shadow-soft transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-soft-lg">
                          <div
                            className={`flex items-center gap-2 ${
                              left ? "lg:justify-end" : ""
                            }`}
                          >
                            <span className="rounded-full bg-[#dbeafe] px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.06em] text-[#1d4ed8]">
                              {step.period}
                            </span>
                            <span className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#94a3b8]">
                              {step.kind}
                            </span>
                          </div>
                          <div className="mt-3 text-[19px] font-semibold tracking-tight text-[#0f172a]">
                            {step.title}
                          </div>
                          <div className="mt-1 text-[15px] leading-relaxed text-[#475569]">
                            {step.place}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
