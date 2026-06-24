import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MessageCircle, Menu, X, Stethoscope } from "lucide-react";
import { NAV_ITEMS } from "./site-data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center px-4">
      <motion.header
        className="glass shadow-soft mt-4 w-full max-w-[1280px] rounded-[22px]"
        animate={{
          paddingTop: scrolled ? 10 : 16,
          paddingBottom: scrolled ? 10 : 16,
          marginTop: scrolled ? 10 : 16,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center justify-between px-5 md:px-7">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2563eb] text-white shadow-glow">
              <Stethoscope className="h-5 w-5" strokeWidth={2.2} />
            </span>
            <span className="text-[17px] font-semibold tracking-tight text-[#0f172a]">
              Dr. Nakade
              <span className="ml-1 hidden font-normal text-[#475569] sm:inline">
                · MD
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-[15px] font-medium text-[#475569] transition-colors hover:bg-white/70 hover:text-[#0f172a]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/919876543210"
              className="hidden items-center gap-2 rounded-[14px] border border-[rgba(15,23,42,0.1)] bg-white/70 px-4 py-2.5 text-[15px] font-medium text-[#0f172a] transition-all hover:-translate-y-0.5 hover:shadow-soft sm:flex"
            >
              <MessageCircle className="h-4 w-4 text-[#16a34a]" />
              WhatsApp
            </a>
            <a
              href="tel:+919876543210"
              className="hidden items-center gap-2 rounded-[14px] bg-[#2563eb] px-4 py-2.5 text-[15px] font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-glow sm:flex"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(15,23,42,0.1)] bg-white/70 text-[#0f172a] lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden lg:hidden"
            >
              <div className="flex flex-col gap-1 px-5 pb-4 pt-3">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-[16px] font-medium text-[#475569] transition-colors hover:bg-white/70 hover:text-[#0f172a]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
}
