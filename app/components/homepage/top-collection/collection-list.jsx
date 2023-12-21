// @flow strict
"use client";

import { topCollections } from "@/utils/data/top-collection";
import Image from "next/image";
import { useState } from "react";

function CollectionList() {
  const [selectedCollection, setSelectedCollection] = useState(topCollections[2]);

  const filterdCollections = () => {
    return topCollections.filter((item) => item.id !== selectedCollection.id);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-8">
      <div>
        <Image
          src={selectedCollection.thumbnail}
          alt="collection-featured"
          width={400}
          height={424}
          className="h-[424px] w-full rounded-lg col-span-7"
        />
        <div className="flex flex-col gap-3 mt-8">
          <div className="flex justify-between items-center">
            <div className="flex items-start gap-2.5">
              <Image
                src={selectedCollection.author.photo}
                alt="collection author"
                width={48}
                height={48}
                className="h-[48px] w-[48px] rounded-full"
              />
              <div className="flex flex-col gap-y-1">
                <p className="text-xl font-bold transition-all duration-200 hover:text-primary cursor-pointer">
                  {selectedCollection.title}
                </p>
                <p className="text-sm text-[#363639]">
                  {`${selectedCollection.count} in the stock`}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="text-xs text-[#3A3A3A]">
                Highest Bid
              </p>
              <p className="flex items-center gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="22" viewBox="0 0 13 22" fill="none">
                  <g clip-path="url(#clip0_0_213)">
                    <path d="M12.671 11.4564L6.50004 15.3231L0.325043 11.4564L6.50004 0.589722L12.671 11.4564ZM6.50004 16.5647L0.325043 12.6981L6.50004 21.9231L12.675 12.6981L6.50004 16.5647Z" fill="#3A3A3A" />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_213">
                      <rect width="13" height="21.3333" fill="white" transform="translate(0 0.589722)" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-base text-[#3A3A3A] font-bold">0.25 ETH</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {
          filterdCollections().map((item, index) => (
            <div
              key={index}
              className="flex gap-5 items-center"
            >
              <Image
                src={item.thumbnail}
                alt="collection-thumbnail"
                width={148}
                height={148}
                className="h-[148px] w-[148px] rounded-lg"
              />
              <div className="flex flex-col gap-y-2">
                <p className="text-xl text-black font-bold">
                  {item.title}
                </p>
                <div className="flex items-center gap-2">
                  <Image
                    src={item.author.photo}
                    alt="collection author"
                    width={34}
                    height={34}
                    className="h-[34px] w-[34px] rounded-full"
                  />
                  <p className="flex items-center gap-1 text-xs text-[#00AC4F] font-bold p-2 rounded-md border border-[#00AC4F]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
                      <g clip-path="url(#clip0_0_238)">
                        <path d="M8.31533 7.13126L4.26566 9.66876L0.213318 7.13126L4.26566 0L8.31533 7.13126ZM4.26566 10.4836L0.213318 7.9461L4.26566 14L8.318 7.9461L4.26566 10.4836Z" fill="#00AC4F" />
                      </g>
                      <defs>
                        <clipPath id="clip0_0_238">
                          <rect width="8.53125" height="14" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>
                      {`${item.price} ETH`}
                    </span>
                  </p>
                  <p className="text-sm text-[#757575]">
                    {`1 of ${item.count}`}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCollection(item)}
                  className="group relative inline-flex items-center justify-start overflow-hidden px-5 py-2.5 w-fit border-2 border-primary rounded-full transition-all">
                  <span className="-z-1 absolute left-0 top-0 h-0 w-0 bg-primary transition-all duration-500 ease-out group-hover:h-full group-hover:w-full" />
                  <span className="z-10 w-full text-[15px] font-medium text-primary transition-colors duration-300 ease-in-out group-hover:text-white">
                    Place a bid
                  </span>
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default CollectionList;