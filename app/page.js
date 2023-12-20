import CollectionFeatured from "./components/homepage/collection-featured/index";
import HeroSection from "./components/homepage/hero-section";
import SellNFT from "./components/homepage/sell-nft";
import ServiceSection from "./components/homepage/service-section";
import TopCollection from "./components/homepage/top-collection";

export default function Home() {
  return (
    <main className="font-dm-sans">
      <HeroSection />
      <ServiceSection />
      <TopCollection />
      <CollectionFeatured />
      <SellNFT />
    </main>
  )
}
