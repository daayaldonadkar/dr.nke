import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Container, Reveal, Eyebrow } from "./primitives";
import { images } from "./site-data";

const shots = [
  { src: images.clinicExterior, label: "Clinic Exterior", h: "h-[420px]" },
  { src: images.reception, label: "Reception", h: "h-[260px]" },
  { src: images.consultationRoom, label: "Consultation Room", h: "h-[360px]" },
  { src: images.waitingArea, label: "Waiting Area", h: "h-[320px]" },
  { src: images.corridor, label: "Corridors", h: "h-[260px]" },
  { src: images.patientRoom, label: "Patient Care", h: "h-[400px]" },
];

export function Gallery() {
  return (
    <section className="relative overflow-hidden bg-[#f7f8fa] py-[110px] md:py-[140px]">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Gallery</Eyebrow>
          <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[#0f172a]">
            A space designed for calm
          </h2>
          <p className="mt-5 text-[20px] leading-relaxed text-[#475569]">
            Step inside a clinic that feels reassuring from the moment you arrive.
          </p>
        </Reveal>

        <Reveal className="mt-14">
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1024: 3 }}>
          <Masonry gutter="20px">
            {shots.map((s) => (
              <div
                key={s.label}
                className="group relative overflow-hidden rounded-[32px] border border-[rgba(15,23,42,0.06)] bg-[#dbeafe] shadow-soft"
              >
                <ImageWithFallback
                  src={s.src}
                  alt={s.label}
                  className={`w-full ${s.h} object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute bottom-5 left-5 translate-y-2 text-[16px] font-semibold text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {s.label}
                </span>
              </div>
            ))}
          </Masonry>
          </ResponsiveMasonry>
        </Reveal>
      </Container>
    </section>
  );
}
