const Profile = () => {
  return (
    <>
      <div className=" flex mt-5 ml-5 px-2 bg-gray-100 w-[96%] rounded">
        <div className="w-[30%] border-r border-gray-200">
          <div className="flex   w-[100%]">
            <div className="group relative text-base mt-8 w-11 h-11">
              <button className="inline-flex items-center group">
                <img src="/images/Mask Group 2@2x.png" alt=""></img>
              </button>
              <ul className="rounded-md absolute hidden text-black group-hover:block w-24 shadow-md">
                <li className="bg-amber-500 py-2 px-2 cursor-pointer text-xs text-white">
                  Upload New
                </li>
                <li className="bg-gray-800 py-2 px-2 cursor-pointer text-xs text-white">
                  Remove
                </li>
              </ul>
            </div>
            <div className="flex flex-col py-4 ml-2 mt-5">
              <div className="text-black text-xl">John Smith</div>
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
                className="w-5 h-5 -ml-6 -mt-3"
                src="/images/Component 53 – 1.svg"
                alt=""
              ></img>
            </div>
          </div>
        </div>
        <div className="w-2/4">
          <div className="flex flex-col p-2 ">
            <div className="flex">
              <div className="text-sm text-gray-800 w-[35%] py-1">
                First Name:
              </div>
              <div className="flex bg-white ml-2 w-[60%] border-gray-300 border-2 rounded">
                <div className="flex flex-col text-sm px-2 py-1 text-gray-800 font-bold ">
                  John
                </div>
              </div>
            </div>
            <div>
              <div className="flex mt-3">
                <div className="text-sm text-gray-800 w-[35%] py-1">
                  Last Name:
                </div>
                <div className="flex bg-white ml-2 w-[60%] border-gray-300 border-2 rounded">
                  <div className="flex flex-col text-sm px-2 py-1 text-gray-800 font-bold ">
                    Smith
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex mt-3">
                <div className="text-sm text-gray-800 w-[35%] py-1">Email:</div>
                <div className="flex bg-gray-100 ml-2 w-[60%] border-gray-300 border-2 rounded">
                  <div className="flex flex-col text-xs px-2 py-1 text-gray-800 ">
                    johnsmith@yahoo.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/4">
          <div className="flex flex-col p-2">
            <div className="flex">
              <div className="text-sm text-gray-800 w-[45%] py-1">Phone:</div>
              <div className="flex bg-white ml-2 w-[60%] border-gray-300 border-2 rounded">
                <div className="flex flex-col text-sm px-2 py-1 text-gray-800 font-bold ">
                  +1 (324) 234-2342
                </div>
              </div>
            </div>
            <div>
              <div className="flex mt-3">
                <div className="text-sm text-gray-800 py-1 w-[45%]">
                  Graduation Year:
                </div>
                <div className="flex bg-white ml-2 w-[60%] border-gray-300 border-2 rounded">
                  <div className="flex flex-col text-sm px-2 py-1 text-gray-800 font-bold ">
                    1988
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex mt-3">
                <div className="text-sm text-gray-800 w-[45%] py-1">
                  Date of Birth:
                </div>
                <div className="flex bg-gray-100 ml-2 w-[60%] border-gray-300 border-2 rounded">
                  <div className="flex flex-col text-xs px-2 py-1 text-gray-800 ">
                    08/03/1960
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <div className="flex flex-col px-2 py-2">
            <div className="flex ">
              <button className="text-xs text-white bg-green-800 w-[100%] py-2 rounded">
                Save Changes
              </button>
            </div>
            <div>
              <div className="flex mt-3">
                <button className="text-xs text-white bg-gray-800 w-[100%] py-2 rounded">
                  Change Password
                </button>
              </div>
            </div>
            <div>
              <div className="flex mt-3">
                <button className="text-xs text-white bg-red-500 w-[100%] py-2 rounded">
                  Leave Family
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
