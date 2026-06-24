import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import { Container, Reveal, Eyebrow } from "./primitives";

const faqs = [
  {
    q: "Do you accept walk-ins?",
    a: "Yes — walk-ins are welcome during clinic hours. To minimise your wait, we recommend booking a consultation in advance by phone or WhatsApp.",
  },
  {
    q: "What conditions do you treat?",
    a: "As an MD in General Medicine, the clinic treats a broad range of acute and chronic conditions, including diabetes, hypertension, thyroid disorders, infections, allergies, digestive issues, and general lifestyle diseases.",
  },
  {
    q: "What are the consultation timings?",
    a: "The clinic is open Monday to Saturday, 9:00 AM to 8:00 PM. Sunday consultations are available by prior appointment for urgent needs.",
  },
  {
    q: "Is parking available?",
    a: "Yes. Dedicated patient parking is available right outside the clinic, with easy wheelchair-accessible entry.",
  },
  {
    q: "Which languages are spoken?",
    a: "Consultations are comfortably conducted in English and Hindi, ensuring clear communication for every patient.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-white py-[110px] md:py-[140px]">
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[#0f172a]">
            Questions, answered
          </h2>
          <p className="mt-5 text-[18px] leading-relaxed text-[#475569]">
            Everything you need to know before your visit. Still curious? Reach
            out any time — we're happy to help.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="divide-y divide-[rgba(15,23,42,0.08)]">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="py-2">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="text-[19px] font-medium text-[#0f172a]">{f.q}</span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[rgba(15,23,42,0.1)] text-[#2563eb] transition-all duration-300 ${
                        isOpen ? "rotate-45 bg-[#2563eb] text-white" : "bg-white"
                      }`}
                    >
                      <Plus className="h-[18px] w-[18px]" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-12 text-[17px] leading-relaxed text-[#475569]">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
