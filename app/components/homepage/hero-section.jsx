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
          <h1 className="text-black text-[22px] sm:text-[40px] font-bold font-integralcf">
            Discover, and collect Digital Art  NFTs
          </h1>
          <p className="text-xl text-[#565656]">
            Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
          </p>
          <button className="py-4 px-12 rounded-full bg-primary text-center text-xl font-medium text-white shadow-lg shadow-blue-500/50 focus:outline-none focus:ring-4 focus:ring-blue-300 hover:shadow-none">
            Explore Now
          </button>
          <div className="flex items-center gap-6">
            <div>
              <h3 className="text-[25px] sm:text-[40px] text-black font-bold">98k+</h3>
              <p className="text-xl text-[#565656] leading-8">Artwork</p>
            </div>
            <div>
              <h3 className="text-[25px] sm:text-[40px] text-black font-bold">12k+</h3>
              <p className="text-xl text-[#565656] leading-8">Auction</p>
            </div>
            <div>
              <h3 className="text-[25px] sm:text-[40px] text-black font-bold">15k+</h3>
              <p className="text-xl text-[#565656] leading-8">Artist</p>
            </div>
          </div>
        </div>
        <div className="justify-center order-1 hidden lg:flex lg:order-2">

          <div className="card-container relative mx-auto w-[18em] max-w-full min-h-[440px]">
            <div className="card bg-[url(https://source.unsplash.com/E8Ufcyxz514)] card1 left-2/4 z-10 ml-[-13em] -translate-x-9 transition-all delay-100 duration-700 ease-[ease-out] relative">
              <div className="h-full flex flex-col justify-between">
                <div className="flex flex-col gap-2">
                  <p className='text-[28px] font-bold text-white'>
                    Abstr Gradient NFT
                  </p>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/image/men-2.webp"
                      alt="NFT Hero Section"
                      width={32}
                      height={32}
                      className='w-8 h-8 rounded-full'
                    />
                    <p className='text-xl font-semibold text-white'>
                      Arkhan17
                    </p>
                  </div>
                </div>
                <div
                  className="bg-[#ffffff33] backdrop-blur-[25px] rounded-xl px-6 py-4 text-white flex justify-between">
                  <div className="flex flex-col gap-2">
                    <p className="text-xs font-semibold">Current Bid</p>
                    <p className='text-base font-bold flex items-center gap-2.5'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="22" viewBox="0 0 13 22" fill="none">
                        <g clipPath="url(#clip0_0_143)">
                          <path d="M12.671 11.3796L6.50006 15.2463L0.325058 11.3796L6.50006 0.512939L12.671 11.3796ZM6.50006 16.4879L0.325058 12.6213L6.50006 21.8463L12.6751 12.6213L6.50006 16.4879Z" fill="white" />
                        </g>
                        <defs>
                          <clipPath id="clip0_0_143">
                            <rect width="13" height="21.3333" fill="white" transform="translate(0 0.512939)" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span> 0.25 ETH</span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-xs font-semibold">Ends in</p>
                    <p className='text-base font-bold'>
                      <span>12h  43m  42s</span>
                    </p>
                  </div>
                </div>
              </div>
              <Image
                src="/image/hero-logo.png"
                alt=''
                width={100}
                height={100}
                className='absolute bottom-[25%] -left-12'
              />
            </div>

            <div className="card bg-[url(https://source.unsplash.com/pVoEPpLw818)] card2 left-2/4 z-[9] ml-[-12em] transition-all delay-[0.15s] duration-[0.5s] ease-[ease-out] scale-[0.9] relative">
              <div className="h-full flex flex-col justify-between">
                <div className="flex flex-col gap-2">
                  <p className='text-[28px] font-bold text-white'>
                    Abstr Gradient NFT
                  </p>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/image/men-2.webp"
                      alt="NFT Hero Section"
                      width={32}
                      height={32}
                      className='w-8 h-8 rounded-full'
                    />
                    <p className='text-xl font-semibold text-white'>
                      Arkhan17
                    </p>
                  </div>
                </div>
                <div className="bg-[#ffffff33] backdrop-blur-[25px] rounded-xl px-6 py-4 text-white flex justify-between">
                  <div className="flex flex-col gap-2">
                    <p className="text-xs font-semibold">Current Bid</p>
                    <p className='text-base font-bold flex items-center gap-2.5'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="22" viewBox="0 0 13 22" fill="none">
                        <g clipPath="url(#clip0_0_143)">
                          <path d="M12.671 11.3796L6.50006 15.2463L0.325058 11.3796L6.50006 0.512939L12.671 11.3796ZM6.50006 16.4879L0.325058 12.6213L6.50006 21.8463L12.6751 12.6213L6.50006 16.4879Z" fill="white" />
                        </g>
                        <defs>
                          <clipPath id="clip0_0_143">
                            <rect width="13" height="21.3333" fill="white" transform="translate(0 0.512939)" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span> 0.25 ETH</span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-xs font-semibold">Ends in</p>
                    <p className='text-base font-bold'>
                      <span>12h  43m  42s</span>
                    </p>
                  </div>
                </div>
              </div>
              <Image
                src="/image/hero-logo.png"
                alt=''
                width={100}
                height={100}
                className='absolute bottom-[25%] -left-12'
              />
            </div>

            <div className="card bg-[url(https://source.unsplash.com/Tyg0rVhOTrE)] card3 left-2/4 z-[8] ml-[-11em] translate-x-9 transition-all duration-[0.5s] ease-[ease-out] scale-[0.8] relative">
              <div className="h-full flex flex-col justify-between">
                <div className="flex flex-col gap-2">
                  <p className='text-[28px] font-bold text-white'>
                    Abstr Gradient NFT
                  </p>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/image/men-2.webp"
                      alt="NFT Hero Section"
                      width={32}
                      height={32}
                      className='w-8 h-8 rounded-full'
                    />
                    <p className='text-xl font-semibold text-white'>
                      Arkhan17
                    </p>
                  </div>
                </div>
                <div
                  className="bg-[#ffffff33] backdrop-blur-[25px] rounded-xl px-6 py-4 text-white flex justify-between">
                  <div className="flex flex-col gap-2">
                    <p className="text-xs font-semibold">Current Bid</p>
                    <p className='text-base font-bold flex items-center gap-2.5'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="22" viewBox="0 0 13 22" fill="none">
                        <g clipPath="url(#clip0_0_143)">
                          <path d="M12.671 11.3796L6.50006 15.2463L0.325058 11.3796L6.50006 0.512939L12.671 11.3796ZM6.50006 16.4879L0.325058 12.6213L6.50006 21.8463L12.6751 12.6213L6.50006 16.4879Z" fill="white" />
                        </g>
                        <defs>
                          <clipPath id="clip0_0_143">
                            <rect width="13" height="21.3333" fill="white" transform="translate(0 0.512939)" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span> 0.25 ETH</span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-xs font-semibold">Ends in</p>
                    <p className='text-base font-bold'>
                      <span>12h  43m  42s</span>
                    </p>
                  </div>
                </div>
              </div>
              <Image
                src="/image/hero-logo.png"
                alt=''
                width={100}
                height={100}
                className='absolute bottom-[25%] -left-12'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;