import Hamburger from './Hamburger'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center  w-full h-16 px-4 bg-gray-800">
      <div className="lg:hidden flex justify-start text-lg font-bold text-white">
        <Hamburger/>
      </div>

      <div className="flex w-[15%] justify-start text-lg font-bold text-white">LOGO</div>
      <div className="hidden md:flex w-[50%]">
        <ul className="hidden md:flex">
          <div className="group relative text-base">
            <button className="py-4 px-4 rounded inline-flex items-center group">
              <li className="px-12 text-white group relative text-base">
                Menu1
              </li>
            </button>
            {/* menu list */}
            <ul className="rounded absolute hidden text-black group-hover:block w-40 border-2 border-gray-50 shadow-md">
              <li className="bg-white hover:bg-amber-500 py-2 px-2 cursor-pointer text-xs">
                My Programs
              </li>
              <li className="bg-white hover:bg-amber-500 py-2 px-2 cursor-pointer text-xs">
                New Programs
              </li>
              <li className="bg-white hover:bg-amber-500 py-2 px-2 cursor-pointer text-xs">
                Program Invites
              </li>
              <li className="bg-white hover:bg-amber-500 py-2 px-2 cursor-pointer text-xs">
                Program Requests
              </li>
            </ul>
          </div>
          <li className="px-12 py-4 text-white">Menu2</li>
          <li className="px-12 py-4 text-white">Menu3</li>
        </ul>
      </div>

      <div className="flex w-[25%] justify-end px-4">
        <div className="mt-3">
          <img classname="" src="/images/notification-outline.svg" alt=""></img>
        </div>
        <div className="ml-5">
          <img src="/images/Mask Group 2.png" alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
