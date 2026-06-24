import { motion } from "motion/react";
import { Phone, Navigation, Star, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { images, DOCTOR_NAME } from "./site-data";
import doctorPortrait from "../../imports/ChatGPT_Image_Jun_24__2026__12_51_35_PM-3.png";

const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
};

const avatars = [images.patient1, images.patient2, images.patient3];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#fafafa] pb-16 pt-32 lg:pt-36"
    >
      {/* Layer 1–4: stage lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[6%] top-[8%] h-[680px] w-[680px] rounded-full bg-[#2563eb]/12 blur-[150px]" />
        <div className="absolute -left-32 top-1/3 h-[460px] w-[460px] rounded-full bg-[#93c5fd]/20 blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 h-[420px] w-[420px] rounded-full bg-[#dbeafe]/50 blur-[130px]" />
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[45%_55%] lg:gap-10">
          {/* LEFT */}
          <div className="order-1 flex flex-col">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, ease }}
              className="glass shadow-soft inline-flex w-fit items-center gap-2 rounded-[14px] px-4 py-2 text-[14px] font-medium text-[#0f172a]"
            >
              <Star className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]" />
              Trusted by 20,000+ Families Across Pune
            </motion.div>

            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.08, ease }}
              className="mt-7 text-[clamp(2.25rem,4vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.025em] text-[#0f172a]"
            >
              Care that listens.
              <br />
              Expertise that
              <br />
              <span className="text-[#2563eb]">heals.</span>
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.16, ease }}
              className="mt-6 max-w-[460px] text-[17px] leading-[1.7] text-[#64748b]"
            >
              Evidence-based medical care with a focus on accurate diagnosis,
              preventive health, and long-term wellness.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.24, ease }}
              className="mt-9 flex items-center gap-3"
            >
              <a
                href="tel:+919876543210"
                className="flex h-[56px] flex-1 items-center justify-center gap-2 rounded-[20px] bg-[#2563eb] px-5 text-[15px] font-medium text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 sm:flex-none sm:px-8 sm:text-[16px] sm:h-[60px]"
              >
                <Phone className="h-[18px] w-[18px] shrink-0" />
                Call the Clinic
              </a>
              <a
                href="https://maps.google.com"
                className="glass shadow-soft flex h-[56px] flex-1 items-center justify-center gap-2 rounded-[20px] px-5 text-[15px] font-medium text-[#0f172a] transition-all duration-300 hover:-translate-y-0.5 sm:flex-none sm:px-8 sm:text-[16px] sm:h-[60px]"
              >
                <Navigation className="h-[18px] w-[18px] shrink-0 text-[#2563eb]" />
                Get Directions
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.32, ease }}
              className="mt-9 flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {avatars.map((src, i) => (
                  <ImageWithFallback
                    key={i}
                    src={src}
                    alt="Patient"
                    className="h-11 w-11 rounded-full border-2 border-white object-cover shadow-soft"
                  />
                ))}
              </div>
              <p className="text-[15px] text-[#475569]">
                <span className="font-semibold text-[#0f172a]">20,000+</span> patients
                trust our care.
              </p>
            </motion.div>
          </div>

          {/* RIGHT — arch composition */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease }}
            className="relative order-2 mx-auto flex w-full max-w-[540px] justify-center"
          >
            {/* Background glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(37,99,235,0.16),transparent)]" />

            {/* Orbital rings + dots */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 animate-[spin_60s_linear_infinite] rounded-full border border-[rgba(37,99,235,0.12)]">
              <span className="absolute -top-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#2563eb] shadow-[0_0_12px_rgba(37,99,235,0.6)]" />
            </div>
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 animate-[spin_90s_linear_infinite_reverse] rounded-full border border-[rgba(37,99,235,0.07)]">
              <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#93c5fd] shadow-[0_0_10px_rgba(147,197,253,0.7)]" />
            </div>

            {/* Arch stage */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 h-[600px] w-[420px] overflow-hidden rounded-t-[210px] rounded-b-[40px] border border-white/60 bg-gradient-to-b from-white to-[#dbeafe] shadow-soft-lg"
            >
              <ImageWithFallback
                src={doctorPortrait}
                alt={`${DOCTOR_NAME}, MD General Medicine`}
                className="h-full w-full object-cover object-top"
              />
            </motion.div>

            {/* Floating card: Open Today */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease }}
              className="glass shadow-soft-lg animate-float absolute left-0 top-16 z-20 flex items-center gap-3 rounded-[22px] px-4 py-3"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#16a34a]/60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#16a34a]" />
              </span>
              <div>
                <div className="text-[14px] font-semibold text-[#0f172a]">Open Today</div>
                <div className="text-[12px] text-[#64748b]">10 AM – 8 PM</div>
              </div>
            </motion.div>

            {/* Floating card: Rating */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.72, ease }}
              className="glass shadow-soft-lg animate-float-rev absolute -right-2 top-[56%] z-20 flex items-center gap-3 rounded-[22px] px-4 py-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fef3c7] text-[#f59e0b]">
                <Star className="h-5 w-5 fill-current" />
              </span>
              <div>
                <div className="text-[14px] font-semibold text-[#0f172a]">4.9 Patient Rating</div>
                <div className="text-[12px] text-[#64748b]">Based on 230+ reviews</div>
              </div>
            </motion.div>

            {/* Floating card: Easy to Reach */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.84, ease }}
              className="glass shadow-soft-lg animate-float absolute -left-2 bottom-12 z-20 flex items-center gap-3 rounded-[22px] px-4 py-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#dbeafe] text-[#2563eb]">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="text-[14px] font-semibold text-[#0f172a]">Easy to Reach</div>
                <div className="text-[12px] text-[#64748b]">Central location with parking</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
