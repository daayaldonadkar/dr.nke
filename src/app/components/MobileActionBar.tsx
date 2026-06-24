import { Phone, MessageCircle, MapPin } from "lucide-react";

/** Floating glass pill action bar — mobile only. */
export function MobileActionBar() {
  const actions = [
    { label: "Call", icon: Phone, href: "tel:+919876543210", tint: "text-[#2563eb]" },
    {
      label: "WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/919876543210",
      tint: "text-[#16a34a]",
    },
    {
      label: "Directions",
      icon: MapPin,
      href: "https://maps.google.com",
      tint: "text-[#0f172a]",
    },
  ];

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 lg:hidden">
      <div className="glass shadow-soft-lg flex w-full max-w-sm items-center justify-around gap-1 rounded-full px-2 py-2">
        {actions.map((a) => (
          <a
            key={a.label}
            href={a.href}
            className="flex flex-1 flex-col items-center gap-1 rounded-full py-2 transition-colors active:bg-white/70"
          >
            <a.icon className={`h-5 w-5 ${a.tint}`} />
            <span className="text-[12px] font-medium text-[#0f172a]">{a.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
