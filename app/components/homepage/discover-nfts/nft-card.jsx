// @flow strict
import Image from "next/image";

function NFTCard({ nft }) {

  return (
    <div className="bg-white border border-[#f2f2f280] rounded-xl p-2.5">
      <div className="h-[222px] relative">
        <Image
          src={nft.thumbnail}
          height={222}
          width={248}
          alt={nft.title}
          className="rounded-xl h-full w-full"
        />
        <div className="absolute -bottom-3 left-3 flex -space-x-2">
          {
            nft.users.map((user, i) => (
              <Image
                src={user}
                height={30}
                key={i}
                width={30}
                alt={nft.title}
                className=" relative h-[30px] w-[30px] inline-flex items-center justify-center rounded-full border-2 border-white"
              />
            ))
          }
        </div>
      </div>

      <div className="px-2 py-1 mt-3">
        <p className="text-xl font-bold text-black transition-colors duration-300 hover:text-primary cursor-pointer">
          {nft.title}
        </p>
        <div className="mt-2.5 flex justify-between items-center">
          <p className="flex gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
              <g clipPath="url(#clip0_649_14)">
                <path d="M9.24746 8.15574L4.80473 10.9395L0.35907 8.15574L4.80473 0.332336L9.24746 8.15574ZM4.80473 11.8335L0.35907 9.04968L4.80473 15.6912L9.25038 9.04968L4.80473 11.8335V11.8335Z" fill="#00AC4F" />
              </g>
              <defs>
                <clipPath id="clip0_649_14">
                  <rect width="9.35928" height="15.3588" fill="white" transform="translate(0.125 0.332336)" />
                </clipPath>
              </defs>
            </svg>
            <span className="text-[10px] font-bold text-[#00AC4F]">{`${nft.price} ETH`}</span>
          </p>
          <p className="text-[13px] font-medium text-[#838383]">{`1 of ${nft.count}`}</p>
        </div>
        <hr className="my-4 h-[1px] bg-[#F4F4F4" />
        <div className="flex justify-between items-center">
          <p className="bg-[#F5F5F5] rounded-full text-[#5539A8] font-medium text-[11px] py-1 px-2.5">
            {nft.time}
          </p>
          <button className="group relative inline-flex items-center justify-start overflow-hidden rounded-full bg-white py-1.5 px-2.5 transition-all hover:bg-white">
            <span className="-z-1 absolute left-0 top-0 h-0 w-0 rounded bg-[#4F33A3] transition-all duration-500 ease-out group-hover:h-full group-hover:w-full" />
            <span className="z-10 w-full text-[15px] font-medium text-[#4F33A3] transition-colors duration-300 ease-in-out group-hover:text-white">
              Place a bid
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;