// @flow strict
import Image from "next/image";

function SellNFT() {
  return (
    <section className="section-container bg-white py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="grid grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-y-12 items-end">
            <div className="h-[180px] sm:h-[300px] relative">
              <Image
                src="https://source.unsplash.com/6R1rq5yTl7g"
                width={300}
                height={300}
                alt="nft"
                className="h-full rounded-lg"
              />
              <Image
                src="/image/men-2.webp"
                width={80}
                height={80}
                alt="nft"
                className="h-[80px] w-[80px] absolute -bottom-6 -right-6 rounded-full border-4 border-white"
              />
            </div>
            <div className="h-[140px] sm:h-[214px] relative">
              <Image
                src="https://source.unsplash.com/NUZ9jhRs-as"
                width={194}
                height={214}
                alt="nft"
                className="h-full rounded-lg"
              />
              <Image
                src="/image/men-1.png"
                width={80}
                height={80}
                alt="nft"
                className="h-[80px] w-[80px] absolute -bottom-6 -right-6 rounded-full border-4 border-white"
              />
            </div>
          </div>
          <div>
            <div className="h-[160px] sm:h-[265px] relative">
              <Image
                src="https://source.unsplash.com/c1rOy44wuts"
                width={240}
                height={265}
                alt="nft"
                className="h-full rounded-lg"
              />
              <Image
                src="/image/women.webp"
                width={80}
                height={80}
                alt="nft"
                className="h-[80px] w-[80px] absolute -bottom-6 -right-6 rounded-full border-4 border-white"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-8">
          <h2 className="text-xl md:text-3xl font-bold font-integralcf">
            Create and sell your NFTs
          </h2>
          <p className="text-lg text-[#636363] mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
          </p>
          <button className="py-4 px-12 rounded-full bg-primary text-center text-xl font-medium text-white shadow-lg shadow-blue-500/50 focus:outline-none focus:ring-4 focus:ring-blue-300 hover:shadow-none w-fit">
            Sign Up Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default SellNFT;