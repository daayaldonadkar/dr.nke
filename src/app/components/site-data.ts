// Centralized content + imagery for the doctor website.
// Unsplash images are referenced by URL with consistent crop sizing.

const u = (id: string, w = 1200, h = 1500) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`;

export const DOCTOR_NAME = "Dr. Vivek Nakade";

// India-focused, high-quality imagery to match the clinic's audience.
export const images = {
  heroPortrait: u("1631217873436-b0fa88e71f0a", 1100, 1300),
  aboutPortrait: u("1739285388427-d6f85d12a8fc", 1200, 1400),
  // Gallery — clinic spaces
  clinicExterior: u("1757894651531-c318fe4072b2", 900, 1300),
  reception: u("1774953037913-af0cf688491a", 900, 700),
  consultationRoom: u("1761258747617-822222c941aa", 900, 1100),
  waitingArea: u("1581982231900-6a1a46b744c9", 900, 1050),
  corridor: u("1719556659399-3bb10ead68d2", 900, 700),
  patientRoom: u("1759987383760-327efaf5522a", 900, 1200),
  // Patients (Indian)
  patient1: u("1533128361669-69c065857a13", 200, 200),
  patient2: u("1774437678715-fb40846dc252", 200, 200),
  patient3: u("1528082414335-adbd64f18d12", 200, 200),
  patient4: u("1544264796-acfb69e05b37", 200, 200),
  patient5: u("1595956481935-a9e254951d49", 200, 200),
  // Services / Health
  bloodPressure: u("1631558554184-319c88f4f8a4", 1000, 750),
  fruits: u("1588644525273-f37b60d78512", 1000, 750),
  consultation: u("1739289696456-823ef234a417", 1000, 750),
  stethoscope: u("1678940805950-73f2127f9d4e", 1000, 750),
  vegetables: u("1546833999-b9f581a1996d", 1000, 750),
  doctorGlasses: u("1631217868204-db1ed6bdd224", 1000, 750),
};

export type NavItem = { label: string; href: string };
export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Conditions", href: "#conditions" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];
