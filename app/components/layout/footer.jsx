
export default function Footer() {
  return (
    <footer className="w-full section-container text-slate-500 font-dm-sans">
      <div className="bg-white text-sm">
        <div className="pt-16 pb-12">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-9 lg:grid-cols-5">
            <div
              className="col-span-4 md:col-span-9 lg:col-span-2"
              aria-labelledby="footer-header"
            >
              <a
                aria-label="NFT logo"
                aria-current="page"
                className="text-2xl font-bold text-black font-integralcf"
                href="/"
              >
                <span>NFters</span>
              </a>
              <p className="mt-6">
                The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
              </p>
            </div>
            <nav
              className="col-span-2 md:col-span-3 lg:col-span-1"
              aria-labelledby="footer-product-5-logo"
            >
              <h3
                className="mb-6 text-lg font-bold text-black"
                id="footer-product-5-logo"
              >
                Market Place
              </h3>
              <ul>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 text-[#3D3D3D] font-medium hover:text-primary focus:text-primary"
                  >
                    All NFTs
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 text-[#3D3D3D] font-medium hover:text-primary focus:text-primary"
                  >
                    New
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 text-[#3D3D3D] font-medium hover:text-primary focus:text-primary"
                  >
                    Art
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 text-[#3D3D3D] font-medium hover:text-primary focus:text-primary"
                  >
                    Sports
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 text-[#3D3D3D] font-medium hover:text-primary focus:text-primary"
                  >
                    Utility
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 text-[#3D3D3D] font-medium hover:text-primary focus:text-primary"
                  >
                    Music
                  </a>
                </li>
              </ul>
            </nav>
            <nav
              className="col-span-2 md:col-span-3 lg:col-span-1"
              aria-labelledby="footer-docs-5-logo"
            >
              <h3
                className="mb-6 text-lg font-bold text-black"
                id="footer-product-5-logo"
              >
                My Account
              </h3>
              <ul>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 text-[#3D3D3D] font-medium hover:text-primary focus:text-primary"
                  >
                    Documentation
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 text-[#3D3D3D] font-medium hover:text-primary focus:text-primary"
                  >
                    Training
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 text-[#3D3D3D] font-medium hover:text-primary focus:text-primary"
                  >
                    System status
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 text-[#3D3D3D] font-medium hover:text-primary focus:text-primary"
                  >
                    {"FAQ's"}
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 text-[#3D3D3D] font-medium hover:text-primary focus:text-primary"
                  >
                    Help Center
                  </a>
                </li>
              </ul>
            </nav>
            <nav
              className="col-span-2 md:col-span-3 lg:col-span-1"
              aria-labelledby="footer-about-5-logo"
            >
              <h3
                className="mb-6 text-lg font-bold text-black"
                id="footer-product-5-logo"
              >
                Stay in the loop
              </h3>
              <p>
                Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.
              </p>
            </nav>
          </div>
        </div>
        <div className="border-t border-[#F4F4F4] pt-4 pb-6 flex justify-center">
          <p className="text-sm text-[#A4A4A4]">Copyright © 2023 NFters</p>
        </div>
      </div>
    </footer>
  )
}
