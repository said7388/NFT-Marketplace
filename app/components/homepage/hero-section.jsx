// @flow strict
import Image from 'next/image';

function HeroSection() {
  return (
    <section className="section-container bg-white py-12">
      <div className="grid  grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex relative flex-col order-2 lg:order-1 items-center lg:items-start gap-5 text-center lg:text-left z-0">
          <Image
            src="/image/hero-dot.png"
            alt="NFT Hero Section"
            width={196}
            height={154}
            className='absolute bottom-12 -left-12 -z-10 hidden lg:block'
          />
          <h1 className="text-black text-[40px] font-bold font-integralcf">
            Discover, and collect Digital Art  NFTs
          </h1>
          <p className="text-xl text-[#565656]">
            Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
          </p>
          <button className="py-4 px-12 rounded-full bg-primary text-center text-xl font-medium text-white shadow-lg shadow-blue-500/50 focus:outline-none focus:ring-4 focus:ring-blue-300 hover:shadow-none">
            Explore Now
          </button>
          <div className="flex items-center gap-6">
            <div className="">
              <h3 className="text-[40px] text-black font-bold">98k+</h3>
              <p className="text-xl text-[#565656] leading-8">Artwork</p>
            </div>
            <div className="">
              <h3 className="text-[40px] text-black font-bold">12k+</h3>
              <p className="text-xl text-[#565656] leading-8">Auction</p>
            </div>
            <div className="">
              <h3 className="text-[40px] text-black font-bold">15k+</h3>
              <p className="text-xl text-[#565656] leading-8">Artist</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src="/image/hero-image.png"
            alt="NFT Hero Section"
            width={536}
            height={440}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;