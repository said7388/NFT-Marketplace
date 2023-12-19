// @flow strict
"use client";
import Image from "next/image";
import { useState } from 'react';

function Collection({ product }) {
  const [cover, setCover] = useState(product.items[0]);

  return (
    <div >
      <div className="grid grid-cols-10 gap-2">
        <Image
          src={cover}
          alt="collection-featured"
          width={266}
          height={272}
          className="h-[272px] w-full rounded-lg col-span-7"
        />
        <div className="grid grid-rows-3 gap-y-2 col-span-3">
          {
            product.items.slice(1, 4).map((url, index) => (
              <div key={index} className="overflow-hidden h-[85px] w-full rounded-lg">
                <Image
                  src={url}
                  alt="collection-featured"
                  width={103}
                  height={85}
                  onClick={() => setCover(url)}
                  className="h-full w-full transition-all duration-200 hover:scale-110 cursor-pointer"
                />
              </div>
            ))
          }
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-8">
        <h3 className="text-xl font-bold text-black transition-all duration-200 hover:text-primary cursor-pointer">
          {product.title}
        </h3>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <Image
              src={product.author.photo}
              alt="collection author"
              width={28}
              height={28}
              className="h-[28px] w-[28px] rounded-full"
            />
            <p className="text-sm font-medium transition-all duration-200 hover:text-primary cursor-pointer">
              {product.author.name}
            </p>
          </div>
          <p className="text-[#2639ED] font-bold border border-[#2639ED] text-xs rounded-full px-5 py-2.5">
            {`Total ${product.count} Items`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Collection;