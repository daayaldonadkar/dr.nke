import { Navbar } from "./components/Navbar";
import { MobileActionBar } from "./components/MobileActionBar";
import { Hero } from "./components/Hero";
import { TrustStrip } from "./components/TrustStrip";
import { About } from "./components/About";
import { Conditions } from "./components/Conditions";
// import { Services } from "./components/Services";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Testimonials } from "./components/Testimonials";
import { HealthTips } from "./components/HealthTips";
// import { Gallery } from "./components/Gallery";
// import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#fafafa] text-[#0f172a] antialiased">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Conditions />
        {/* <Services /> */}
        <WhyChooseUs />
        <Testimonials />
        <HealthTips />
        {/* <Gallery /> */}
        <Contact />
        {/* <FAQ /> */}
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}
