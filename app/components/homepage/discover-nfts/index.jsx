// @flow strict
"use client"

import { categories } from "@/utils/data/categories";
import { nfts } from "@/utils/data/nfts";
import { useEffect, useState } from "react";
import NFTCard from "./nft-card";

function DiscoverNFT() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredNfts, setFilteredNfts] = useState(nfts);


  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredNfts(nfts);
    } else {
      const filtered = nfts.filter(nft => nft.category === selectedCategory);
      setFilteredNfts(filtered);
    }
  }, [selectedCategory])

  return (
    <section className="bg-[#D9E0EC33]">
      <div className="section-container py-16">
        <h2 className="text-[24px] md:text-[34px] font-bold font-integralcf">
          Discover more NFTs
        </h2>
        <div className="my-9 flex justify-between items-center">
          <div className="flex gap-3 items-center flex-wrap">
            {
              categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category.value)}
                  className="group relative inline-flex items-center justify-start overflow-hidden rounded-full bg-[#dcdcdc33] px-5 py-2.5 transition-all"
                >
                  <span className={`-z-1 absolute left-0 top-0 rounded bg-primary transition-all duration-500 ease-out group-hover:h-full group-hover:w-full  ${category.value === selectedCategory ? "h-full w-full" : "h-0 w-0"}`} />
                  <span className={`z-10 w-full text-sm font-medium transition-colors duration-300 ease-in-out group-hover:text-white ${category.value === selectedCategory ? "text-white" : "text-black "}`}>
                    {category.title}
                  </span>
                </button>
              ))
            }
          </div>

          <button className="hidden lg:flex text-sm text-[#371C87] font-medium px-5 py-2.5 rounded-full bg-[#dcdcdc33] items-center gap-2.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g clipPath="url(#clip0_0_399)">
                <path d="M9.33333 20H14.6667V17.3333H9.33333V20ZM0 4V6.66667H24V4H0ZM4 13.3333H20V10.6667H4V13.3333Z" fill="#371C87" />
              </g>
              <defs>
                <clipPath id="clip0_0_399">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>All Filters</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-10">
          {
            filteredNfts.map((nft, index) => (
              <NFTCard key={index} nft={nft} />
            ))
          }
        </div>

        <div className="mt-12 flex justify-center">
          <button
            className="group relative inline-flex items-center justify-start overflow-hidden px-12 py-4 w-fit border-2 border-[#4F33A3] rounded-full transition-all">
            <span className="-z-1 absolute left-0 top-0 h-0 w-0 bg-[#4F33A3] transition-all duration-500 ease-out group-hover:h-full group-hover:w-full" />
            <span className="z-10 w-full text-[15px] font-medium text-[#4F33A3] transition-colors duration-300 ease-in-out group-hover:text-white">
              More NFTs
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiscoverNFT;