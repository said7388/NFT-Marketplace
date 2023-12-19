// @flow strict
import Image from 'next/image';

function ServiceSection() {
  return (
    <section className="bg-[#D9E0EC33]">
      <div className="section-container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          <h2 className='font-bold text-[28px] text-black font-integralcf'>
            The amazing NFT art of the world here
          </h2>
          <div className="flex items-start gap-4">
            <Image
              src="/icons/service-1.svg"
              alt="Service Icon"
              width={36}
              height={36}
            />
            <div className='flex flex-col gap-3'>
              <h3 className='text-black text-xl font-bold'>
                Fast Transaction
              </h3>
              <p className='text-[#696969] text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <Image
              src="/icons/service-2.svg"
              alt="Service Icon"
              width={36}
              height={36}
            />
            <div className='flex flex-col gap-3'>
              <h3 className='text-black text-xl font-bold'>
                Growth Transaction
              </h3>
              <p className='text-[#696969] text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;