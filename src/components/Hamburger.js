import { useState } from "react";

const Hamburger = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex">
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-amber-500"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-amber-500"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-amber-500"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div class="absolute left-0 top-0 h-16 text-white text-lg p-4">
              LOGO
            </div>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-2 py-2 m-4 bg-gray-100 rounded-md"
              onClick={() => setIsNavOpen(false)} 
            >
              <svg
                className="h-4 w-4 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <div className="flex -ml-20">
              <div>
                <img
                  className="mt-5"
                  src="/images/Mask Group 2@2x.png"
                  alt=""
                ></img>
              </div>
              <div className="flex flex-col py-4 ml-4 mt-5">
                <div className="text-white text-xl">John Smith</div>
                <div className="flex">
                  <img
                    classname=""
                    src="images/outline-location-on.svg"
                    alt=""
                  ></img>
                  <div className="text-gray-300 text-[8px]">
                    Main St. Farmington, CA 123
                  </div>
                </div>
                <img
                  className="w-5 h-5 bg-gray-100 rounded-full -ml-7 -mt-7"
                  src="/images/Component 53 – 1.svg"
                  alt=""
                ></img>
              </div>
            </div>
            <div className="MENU-LINK-MOBILE-OPEN flex flex-col w-[60%] h-96">
              <div className="flex justify-between items-center text-amber-500 ">
                <div className="flex">
                <div><img src="/images/Component 330 – 1.svg" alt=""></img></div>
                <div className="ml-2 text-base uppercase">Menu 1</div>
                </div>
                <div>
                <img src="/images/sharp-expand-less.svg" alt=""></img>
                </div>
              </div>
              <div className="ml-2 h-7 w-0.5 bg-amber-500"></div>
              <div className="flex">
              <div className="ml-2 h-0.5 w-7 bg-amber-500"></div>
              <div className="ml-2 -mt-3 text-base">Sub Menu 1</div>
              </div>
              <div className="ml-2 -mt-3 h-7 w-0.5 bg-amber-500"></div>
              <div className="flex">
              <div className="ml-2 h-0.5 w-7 bg-amber-500"></div>
              <div className="ml-2 -mt-3 text-base">Sub Menu 2</div>
              </div>
              <div className="ml-2 -mt-3 h-7 w-0.5 bg-amber-500"></div>
              <div className="flex">
              <div className="ml-2 h-0.5 w-7 bg-amber-500"></div>
              <div className="ml-2 -mt-3 text-base">Sub Menu 3</div>
              </div>
              <div className="flex mt-5">
                <div><img src="/images/profit (2).png" alt=""></img></div>
                <div className="ml-2 text-base">Menu 2</div>
                </div>
                <div className="flex mt-5">
                <div><img src="/images/teamwork.png" alt=""></img></div>
                <div className="ml-2 text-base">Menu 3</div>
                </div>
                <div className="flex mt-5">
                <div><img src="/images/logout.png" alt=""></img></div>
                <div className="ml-2 text-base">Logout</div>
                </div>
                 </div>
          </div>
        </section>
      </nav>

      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: #232E3E;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
};

export default Hamburger;
