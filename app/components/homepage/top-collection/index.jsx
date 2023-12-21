// @flow strict

import { topCollectionsOver } from "@/utils/data/top-collection";
import Image from "next/image";
import CollectionList from "./collection-list";

function TopCollection() {

  return (
    <section className="bg-white">
      <div className="section-container py-24">
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-3 gap-y-6">
          <div className="col-span-1 lg:col-span-2">
            <CollectionList />
          </div>
          <div className="border-l border-[#ECECEC] pl-9">
            <h3 className="text-xl font-bold font-integralcf">Top Collections over </h3>
            <p className="text-lg font-bold text-[#3D00B7] mt-2.5">Last 7 days</p>
            <div className="flex flex-col divide-y mt-4">
              {
                topCollectionsOver.map((item, i) => (
                  <div key={i} className="py-4 flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <p className="font-bold text-2xl">{i}</p>
                      <div className="h-[60px] w-[60px] relative">
                        <Image
                          src={item.thumbnail}
                          alt="collection-thumbnail"
                          width={60}
                          height={60}
                          className="rounded-full w-full h-full cursor-pointer"
                        />
                        {
                          item.verify &&
                          <span className="absolute -top-2 -right-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                              <rect x="8" y="10" width="16" height="11" fill="white" />
                              <path d="M28.7479 14.3182L26.9345 12.2115C26.5879 11.8115 26.3079 11.0648 26.3079 10.5315V8.26483C26.3079 6.8515 25.1479 5.6915 23.7345 5.6915H21.4679C20.9479 5.6915 20.1879 5.4115 19.7879 5.06483L17.6812 3.2515C16.7612 2.46483 15.2545 2.46483 14.3212 3.2515L12.2278 5.07817C11.8278 5.4115 11.0678 5.6915 10.5478 5.6915H8.24114C6.8278 5.6915 5.6678 6.8515 5.6678 8.26483V10.5448C5.6678 11.0648 5.3878 11.8115 5.05447 12.2115L3.25447 14.3315C2.48114 15.2515 2.48114 16.7448 3.25447 17.6648L5.05447 19.7848C5.3878 20.1848 5.6678 20.9315 5.6678 21.4515V23.7315C5.6678 25.1448 6.8278 26.3048 8.24114 26.3048H10.5478C11.0678 26.3048 11.8278 26.5848 12.2278 26.9315L14.3345 28.7448C15.2545 29.5315 16.7612 29.5315 17.6945 28.7448L19.8012 26.9315C20.2012 26.5848 20.9479 26.3048 21.4812 26.3048H23.7479C25.1612 26.3048 26.3212 25.1448 26.3212 23.7315V21.4648C26.3212 20.9448 26.6012 20.1848 26.9479 19.7848L28.7612 17.6782C29.5345 16.7582 29.5345 15.2382 28.7479 14.3182ZM21.5479 13.4782L15.1079 19.9182C14.9212 20.1048 14.6679 20.2115 14.4012 20.2115C14.1345 20.2115 13.8812 20.1048 13.6945 19.9182L10.4678 16.6915C10.0811 16.3048 10.0811 15.6648 10.4678 15.2782C10.8545 14.8915 11.4945 14.8915 11.8811 15.2782L14.4012 17.7982L20.1345 12.0648C20.5212 11.6782 21.1612 11.6782 21.5479 12.0648C21.9345 12.4515 21.9345 13.0915 21.5479 13.4782Z" fill="#1E93FF" />
                            </svg>
                          </span>
                        }
                      </div>
                      <div className="flex flex-col gap-y-2.5">
                        <p className="text-base font-medium transition-all duration-200 hover:text-primary cursor-pointer">
                          {item.title}
                        </p>
                        <p className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 15 24" fill="none">
                            <g clip-path="url(#clip0_0_288)">
                              <path d="M14.6203 12.225L7.49994 16.575L0.374939 12.225L7.49994 0L14.6203 12.225ZM7.49994 17.9719L0.374939 13.6219L7.49994 24L14.6249 13.6219L7.49994 17.9719Z" fill="black" />
                            </g>
                            <defs>
                              <clipPath id="clip0_0_288">
                                <rect width="15" height="24" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="text-sm text-[#636363] font-semibold">
                            {item.price}
                          </span>
                        </p>
                      </div>
                    </div>
                    <p
                      className={`text-xl font-semibold 
                    ${item.rise ? "text-[#14C8B0]" : "text-[#FF002E]"}`}
                    >
                      {item.percentage}
                    </p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCollection;