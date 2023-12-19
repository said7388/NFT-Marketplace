"use client";

import { useState } from "react";

export default function Navbar() {
  const [isToggleOpen, setIsToggleOpen] = useState(false)

  return (
    <>
      <header className="border-b-1 relative z-20 w-full border-b border-[#EFEFEF] bg-[#fff] after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-[#EFEFEF] lg:border-[#EFEFEF] lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            <a
              id="NFT"
              aria-label="NFT logo"
              aria-current="page"
              className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-primary focus:text-primary focus:outline-none focus-visible:outline-none lg:px-8"
              href="javascript:void(0)"
            >
              <svg width="107" height="19" viewBox="0 0 107 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.7 18H6.1V8.92H6.6L12.32 18H18.54V1.2H13.14V10.28H12.64L7.06 1.2H0.7V18ZM19.9422 18H25.4822V12.1H34.6222V8.1H25.4822V5.82H35.0422V1.2H19.9422V18ZM53.9622 1.2H36.3422V5.82H42.3822V18H47.9222V5.82H53.9622V1.2ZM55.2625 18H70.4025V13.56H60.8025V11.42H70.0425V7.78H60.8025V5.64H70.4025V1.2H55.2625V18ZM89.2694 18L86.2694 12.48C87.6894 11.48 88.7094 9.88 88.7094 7.62C88.7094 3.2 86.0894 1.2 81.4294 1.2H71.8094V18H77.3494V13.66H81.5494L83.8294 18H89.2694ZM77.3494 5.8H81.0494C82.4494 5.8 83.1694 6.48 83.1694 7.66C83.1694 8.84 82.4494 9.52 81.0494 9.52H77.3494V5.8ZM97.7625 18.56C103.523 18.58 106.363 16.76 106.363 13.1C106.363 8.5 101.783 8.4 98.4425 7.84L96.6625 7.54C95.3825 7.34 95.0825 6.76 95.0825 6.28C95.0825 5.52 95.8425 4.96 97.6825 4.96C99.8025 4.96 100.743 5.66 100.943 6.78H105.882C105.983 1.98 102.622 0.639999 97.8025 0.639999C92.4625 0.639999 89.7625 2.68 89.7625 6C89.7625 10.3 93.5825 10.68 96.7625 11.2L98.9225 11.54C100.563 11.78 100.863 12.34 100.863 12.88C100.863 13.66 99.8825 14.26 97.7625 14.24C95.3625 14.22 94.4025 13.52 94.3425 12.38H89.3625C89.2225 16.74 91.9625 18.54 97.7625 18.56Z" fill="#3D00B7" />
              </svg>
            </a>
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                  : ""
                }
              `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>

            <ul
              role="menubar"
              className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0 gap-x-5 gap-y-3 lg:pt-0 lg:opacity-100 ${isToggleOpen
                ? "visible opacity-100 backdrop-blur-sm"
                : "invisible opacity-0"
                }`}
            >
              <li className="flex items-center">
                <a
                  role="menuitem"
                  aria-current="page"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-primary focus:text-primary focus:outline-none focus-visible:outline-none xl:px-8"
                  href="javascript:void(0)"
                >
                  <span>Marketplace</span>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-primary focus:text-primary focus:outline-none focus-visible:outline-none xl:px-8"
                  href="javascript:void(0)"
                >
                  <span>Resource</span>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-primary focus:text-primary focus:outline-none focus-visible:outline-none xl:px-8"
                  href="javascript:void(0)"
                >
                  <span>About</span>
                </a>
              </li>
              <li className="flex items-center">
                <div
                  className="flex items-center"
                  href="javascript:void(0)"
                >
                  <div className="relative my-6">
                    <input
                      id="id-l16"
                      type="text"
                      placeholder="Search here"
                      className="relative w-full h-12 px-4 pr-12 transition-all border rounded-full outline-none peer border-[#EFEFEF] text-[#C0C0C0]  focus:border-primary focus:outline-none  focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute w-6 h-6 cursor-pointer top-3 right-4 stroke-[#757575] peer-disabled:cursor-not-allowed" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" aria-labelledby="title-9 description-9" role="graphics-symbol">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </div>
                </div>
              </li>
              <li className="flex items-center py-4 lg:py-0">
                <button
                  className="flex items-center gap-2 px-10 h-12 bg-primary text-white rounded-full">
                  Upload
                </button>
              </li>
              <li className="flex items-center py-4 lg:py-0">
                <button
                  className="flex items-center gap-2 px-5 h-12 bg-white border-2 border-primary rounded-full text-primary">
                  Connect Wallet
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
};