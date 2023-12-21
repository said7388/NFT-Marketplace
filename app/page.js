import CollectionFeatured from "./components/homepage/collection-featured/index";
import DiscoverNFT from "./components/homepage/discover-nfts";
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
      <DiscoverNFT />
    </main>
  )
};
