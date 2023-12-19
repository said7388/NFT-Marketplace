import CollectionFeatured from "./components/homepage/collection-featured/index";
import HeroSection from "./components/homepage/hero-section";
import ServiceSection from "./components/homepage/service-section";

export default function Home() {
  return (
    <main className="font-dm-sans">
      <HeroSection />
      <ServiceSection />
      <div className="section-container py-12 bg-white"></div>
      <CollectionFeatured />
    </main>
  )
}
