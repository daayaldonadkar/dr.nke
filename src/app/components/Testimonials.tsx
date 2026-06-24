import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Container, Reveal, Eyebrow } from "./primitives";
import { images } from "./site-data";

const reviews = [
  {
    name: "Priya Sharma",
    role: "Patient since 2019",
    photo: images.patient1,
    text: "I've never felt rushed in a single appointment. The doctor takes time to truly understand what's going on. My diabetes is finally under control and I feel cared for.",
  },
  {
    name: "Rahul Verma",
    role: "Patient since 2021",
    photo: images.patient2,
    text: "Calm, thorough, and genuinely kind. The clinic feels more like a premium wellness space than a typical hospital. Highly recommend for the whole family.",
  },
  {
    name: "Ananya Iyer",
    role: "Patient since 2020",
    photo: images.patient3,
    text: "After years of unexplained fatigue, this was the first doctor who actually investigated the root cause. I'm grateful for the patience and precision.",
  },
  {
    name: "Meera Nair",
    role: "Patient since 2022",
    photo: images.patient4,
    text: "Booking is effortless, the wait is minimal, and the care is world-class. Every detail feels considered. Truly a premium healthcare experience.",
  },
  {
    name: "Sandeep Rao",
    role: "Patient since 2018",
    photo: images.patient5,
    text: "My parents are senior citizens and the gentle, attentive care they receive is exceptional. We finally found a doctor we completely trust.",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = useCallback((d: number) => {
    setDir(d);
    setIndex((i) => (i + d + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [go]);

  const r = reviews[index];

  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#f7f8fa] py-[110px] md:py-[140px]">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Testimonials</Eyebrow>
          <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[#0f172a]">
            Words from patients
          </h2>
          <p className="mt-5 text-[20px] leading-relaxed text-[#475569]">
            Real stories from people who made their health a priority.
          </p>
        </Reveal>

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="relative min-h-[340px] sm:min-h-[300px]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -60 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[40px] border border-[rgba(15,23,42,0.06)] bg-white p-9 shadow-soft-lg sm:p-12"
              >
                <Quote className="h-12 w-12 text-[#dbeafe]" fill="currentColor" />
                <p className="mt-4 text-[20px] leading-relaxed text-[#0f172a] sm:text-[22px]">
                  “{r.text}”
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <ImageWithFallback
                    src={r.photo}
                    alt={r.name}
                    className="h-14 w-14 rounded-full object-cover ring-2 ring-[#dbeafe]"
                  />
                  <div className="flex-1">
                    <div className="text-[17px] font-semibold text-[#0f172a]">{r.name}</div>
                    <div className="text-[14px] text-[#475569]">{r.role}</div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-[18px] w-[18px] fill-[#f59e0b] text-[#f59e0b]" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => go(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(15,23,42,0.1)] bg-white text-[#0f172a] shadow-soft transition-all hover:-translate-y-0.5 hover:text-[#2563eb]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => {
                    setDir(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-7 bg-[#2563eb]" : "w-2 bg-[#cbd5e1]"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => go(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(15,23,42,0.1)] bg-white text-[#0f172a] shadow-soft transition-all hover:-translate-y-0.5 hover:text-[#2563eb]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
