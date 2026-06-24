import { Stethoscope, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import { Container } from "./primitives";
import { NAV_ITEMS, DOCTOR_NAME } from "./site-data";

const socials = [Instagram, Facebook, Twitter, Linkedin];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0b1220] py-16 text-white">
      <div className="pointer-events-none absolute -top-20 left-1/3 h-[360px] w-[360px] rounded-full bg-[#2563eb]/15 blur-[140px]" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2563eb] text-white">
                <Stethoscope className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <span className="text-[18px] font-semibold tracking-tight">{DOCTOR_NAME}</span>
            </div>
            <p className="mt-5 max-w-sm text-[16px] leading-relaxed text-white/60">
              Personalized, evidence-based healthcare focused on prevention,
              accurate diagnosis, and long-term wellness for you and your family.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:-translate-y-0.5 hover:bg-[#2563eb] hover:text-white"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <div className="text-[14px] font-medium uppercase tracking-wide text-white/40">
              Explore
            </div>
            <ul className="mt-5 space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[16px] text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[14px] font-medium uppercase tracking-wide text-white/40">
              Get in touch
            </div>
            <ul className="mt-5 space-y-4 text-[16px] text-white/70">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#93c5fd]" />
                <a href="tel:+919876543210" className="hover:text-white">+91 98765 43210</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#93c5fd]" />
                <span>Nakade Hospital, Tiwary Layout, Christanand Square, Bramhapuri 441206</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-[14px] text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {DOCTOR_NAME}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
