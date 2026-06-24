import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Container, Reveal, Eyebrow } from "./primitives";
import { images } from "./site-data";

const articles = [
  {
    tag: "Heart Health",
    title: "Managing Blood Pressure",
    desc: "Simple daily habits — from sodium awareness to mindful movement — that keep your numbers in a healthy range.",
    read: "5 min read",
    image: images.bloodPressure,
  },
  {
    tag: "Metabolic Health",
    title: "Understanding Diabetes",
    desc: "What your blood sugar is really telling you, and how small, consistent choices add up to lasting control.",
    read: "6 min read",
    image: images.fruits,
  },
  {
    tag: "Acute Care",
    title: "When Fever Needs Attention",
    desc: "A practical guide to the warning signs that mean it's time to see a doctor — and what you can safely manage at home.",
    read: "4 min read",
    image: images.consultation,
  },
  {
    tag: "Prevention",
    title: "Preventive Health Checkups",
    desc: "Why the right screenings at the right age are the most powerful investment you can make in your future.",
    read: "5 min read",
    image: images.stethoscope,
  },
];

export function HealthTips() {
  return (
    <section className="relative overflow-hidden bg-white py-[110px] md:py-[140px]">
      <Container>
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Eyebrow>Health Journal</Eyebrow>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[#0f172a]">
              Read, learn, stay well
            </h2>
            <p className="mt-5 text-[20px] leading-relaxed text-[#475569]">
              Editorial, easy-to-follow guidance from the clinic.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {articles.map((a, i) => (
            <Reveal key={a.title} delay={(i % 2) * 0.08}>
              <a
                href="#contact"
                className="group block h-full overflow-hidden rounded-[32px] border border-[rgba(15,23,42,0.06)] bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft-lg"
              >
                <div className="relative overflow-hidden bg-[#dbeafe]">
                  <ImageWithFallback
                    src={a.image}
                    alt={a.title}
                    className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="glass absolute left-5 top-5 rounded-full px-3.5 py-1.5 text-[13px] font-medium text-[#1d4ed8]">
                    {a.tag}
                  </span>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[24px] font-semibold tracking-tight text-[#0f172a]">
                      {a.title}
                    </h3>
                    <ArrowUpRight className="h-6 w-6 shrink-0 text-[#94a3b8] transition-all group-hover:text-[#2563eb] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="mt-3 text-[16px] leading-relaxed text-[#475569]">{a.desc}</p>
                  <div className="mt-5 text-[14px] font-medium text-[#94a3b8]">{a.read}</div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
