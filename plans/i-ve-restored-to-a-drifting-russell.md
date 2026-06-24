# Ultra-Premium Hero Redesign

## Context
The user wants the hero section rebuilt to match a detailed new spec
(`src/imports/pasted_text/physician-hero-design.md`) — an Apple-keynote /
Aman-Resorts / luxury-clinic aesthetic. The current hero uses a pale-blue
circle behind the doctor; the new direction calls for a **tall rounded arch**
stage, layered "stage-lighting" background, subtle orbital elements, social
proof, and a floating glassmorphism statistics bar. The user supplied a doctor
photo (`ChatGPT_Image_Jun_24__2026__12_51_35_PM-3.png`) and chose to **crop it
tightly inside the arch with `object-cover`** (its grey vignette background gets
clipped by the arch shape; minor grey near the doctor is acceptable).

Goal: a single, cohesive, cinematic hero that still uses the site's existing
tokens, fonts, and utility classes so it feels native to the rest of the page.

## Scope
Single file rewrite: `src/app/components/Hero.tsx`. No other components change.
Reuse existing helpers — do not recreate them.

## Reuse (existing utilities)
- `CountUp` and `Container` from `src/app/components/primitives.tsx`
  (`CountUp` props: `end`, `suffix`, `decimals`). Used for the stats bar.
- Patient avatar images from `src/app/components/site-data.ts`
  (`images.patient1`–`patient5`, `DOCTOR_NAME`).
- Glass / shadow / float utilities already in `src/styles/theme.css`:
  `glass`, `shadow-soft`, `shadow-soft-lg`, `shadow-glow`, `animate-float`,
  `animate-float-rev`. Orbital rotation uses Tailwind's built-in `spin`
  keyframe via arbitrary duration (`animate-[spin_60s_linear_infinite]`) — no
  CSS additions needed.
- `lucide-react` icons; `motion/react` for entrance + float animations.

## Implementation (Hero.tsx)

**Section shell**
- `min-h-screen`, off-white `bg-[#fafafa]`, `relative overflow-hidden`,
  top padding ~120px, side padding 80px on large screens.
- Inner wrapper `mx-auto w-full max-w-[1440px] px-6 md:px-20` (hero needs the
  wider 1440px frame from the spec, so use a local wrapper, not `Container`).

**Layered background** (absolute, `-z-10`, `pointer-events-none`)
- Large soft blue radial glow behind the right/arch area (very low opacity).
- One or two big blurred organic blobs (blue/white) for "stage lighting".
- Keep it airy; no medical illustrations.

**Layout grid**: `lg:grid-cols-[45%_55%]`, items-center. On mobile, single
column with explicit ordering so the portrait sits between headline and
description: badge+headline (`order-1`), arch (`order-2`),
description+buttons+social (`order-3`).

**Left column**
- Trust badge (glass pill): `★ Trusted by 20,000+ Families Across Pune`.
- Headline `h1`, ~88px (`text-[clamp(2.75rem,6.5vw,5.5rem)]`), weight 700,
  `leading-[0.95]`, max 3 lines:
  `Care that listens.` / `Expertise that` / `heals.` — "heals." in `#2563eb`.
- Description `p`, 20px, `leading-[1.7]`, `text-[#64748b]`, `max-w-[500px]`,
  ≤2 lines.
- CTA row: primary `Call the Clinic` (filled `#2563eb`, `shadow-glow`),
  secondary `Get Directions` (white glass + border); both `h-[60px]`,
  `rounded-[20px]`, hover lift.
- Social proof: 4–5 overlapping circular avatars (`images.patient*`, ring +
  `-ml` overlap) followed by `20,000+ Patients trust our care.`

**Right column — the arch composition**
- Container `relative`, sized ~`max-w-[520px]`, `h-[620px]`, `mx-auto`.
- Background glow: large blurred blue radial behind the arch (low opacity).
- Orbital elements: 1–2 concentric thin-border circles (`rounded-full
  border border-[rgba(37,99,235,0.12)]`) larger than the arch, each carrying a
  tiny glowing dot, slowly rotating via `animate-[spin_60s_linear_infinite]` /
  reverse — subtle, not sci-fi.
- Arch frame: a tall shape with a rounded top —
  `rounded-t-[260px] rounded-b-[40px]`, background
  `bg-gradient-to-b from-white to-[#dbeafe]`, subtle translucent border,
  `shadow-soft-lg`, `overflow-hidden`.
- Doctor image imported as ES module
  (`import doctorPortrait from "../../imports/ChatGPT_Image_Jun_24__2026__12_51_35_PM-3.png"`),
  rendered with `ImageWithFallback`, `h-full w-full object-cover object-top`
  so the arch crops the grey edges. Wrap in `motion.div` with a gentle
  `animate-float` for the "tiny floating movement".
- Three floating info cards (white glass, `rounded-[22px]`, soft shadow,
  positioned so they do **not** cover the face), each with an icon + two lines:
  - `● Open Today` / `10 AM – 8 PM` (green pulse dot)
  - `★ 4.9 Patient Rating` / `Based on 230+ reviews`
  - `📍 Easy to Reach` / `Central location with parking`
  Stagger their entrance and apply float for parallax feel.

**Bottom statistics bar**
- Centered glass container, ~`w-[85%] lg:w-[70%]`, `rounded-[32px]`, strong
  blur, `min-h-[120px]`, `shadow-soft-lg`, placed below the grid near the
  section bottom (`mt-16`/`mt-20`).
- Three cells separated by thin vertical dividers, each: elegant icon, large
  count-up number, label — `12+ Years Experience`, `20,000+ Patients Treated`,
  `4.9 Patient Rating` (use `CountUp`).

**Micro-interactions**: motion fade-up entrances (~0.5s, staggered), doctor +
cards float loops, button hover elevation, stats count-up on view, slow orbital
rotation. Calm, no flashy effects.

## Notes / caveats
- The supplied PNG is not truly transparent; per the user's choice we crop it
  inside the arch. Some grey may remain immediately around the doctor — expected
  and accepted.
- Keep `DOCTOR_NAME` = "Dr. Rahul Sharma" (navbar unchanged); the spec's
  "Dr. Aniket Sharma" is just an example.

## Verification
- Hero renders at desktop and mobile widths via the running dev server preview.
- Confirm: arch crops the photo cleanly, headline wraps to 3 lines with blue
  "heals.", three floating cards clear the face, stats count up when scrolled
  into view, orbital rings rotate slowly, no console import errors for the PNG.
- Check the ~1000px breakpoint: grid collapses to the mobile order
  (badge/headline → arch → description/buttons/social → stats) without overlap.
