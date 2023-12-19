import HeroSection from "./components/homepage/hero-section";
import ServiceSection from "./components/homepage/service-section";

export default function Home() {
  return (
    <main className="font-dm-sans">
      <HeroSection />
      <ServiceSection />
    </main>
  )
}
