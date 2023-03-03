const Family = () => {
  return (
    <>
      <div className="mt-5 ml-5 px-4 bg-gray-100 w-[90%] rounded-md">
        <div className="flex justify-between items-center py-4">
          <div className="text-lg text-blank px-4  py-2">Family</div>
          <div className="flex py-2">
            <img src="/images/sharp-search.svg" alt=""></img>
            <button className="ml-3 text-base text-white bg-green-800 px-6 py-1 rounded">
              Add New
            </button>
          </div>
        </div>

      <div className="flex w-[100%]">
        <div className=" w-[95%]">
        <div className="flex px-2 mb-3 bg-amber-500 rounded-md">
          <div className="flex justify-between items-center w-[100%]">
            <div>
              <div className=" flex px-2 py-2">
                <img src="/images/Mask Group 2.png" alt=""></img>

                <div className=" ml-4 mt-1 text-gray-800 text-base">
                  John Smith
                </div>
              </div>
            </div>
            <div className="flex p-2">
              <button className="text-xs text-gray-800 bg-white px-6 py-1 rounded-sm">
              ADMIN
              </button>
              <div className="ml-2 px-2 py-2 bg-white rounded-sm">
                <img src="images/Icon awesome-users-cog.svg" alt=""/>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex px-2 mb-3 bg-indigo-100 rounded-md">
          <div className="flex justify-between items-center w-[100%]">
            <div>
              <div className=" flex px-2 py-2">
                <img src="/images/Mask Group 2.png" alt=""></img>

                <div className=" ml-4 mt-1 text-gray-800 text-base">
                  John Smith
                </div>
              </div>
            </div>
            <div>
              <button className="text-xs text-gray-800 bg-blue-200 px-6 py-1 rounded">
                MEMBER
              </button>
            </div>
          </div>
        </div>
        <div className="flex px-2 mb-3 bg-indigo-100 rounded-md">
          <div className="flex justify-between items-center w-[100%]">
            <div>
              <div className=" flex px-2 py-2">
                <img src="/images/Mask Group 2.png" alt=""></img>

                <div className=" ml-4 mt-1 text-gray-800 text-base">
                Dianne Russell
                </div>
              </div>
            </div>
            <div>
              <button className="text-xs text-gray-800 bg-blue-200 px-6 py-1 rounded">
                MEMBER
              </button>
            </div>
          </div>
        </div>
        <div className="flex px-2 mb-3 bg-indigo-100 rounded-md">
          <div className="flex justify-between items-center w-[100%]">
            <div>
              <div className=" flex px-2 py-2">
                <img src="/images/Mask Group 2.png" alt=""></img>

                <div className=" ml-4 mt-1 text-gray-800 text-base">
                Lisa Smith
                </div>
              </div>
            </div>
            <div>
              <button className="text-xs text-gray-800 bg-blue-200 px-6 py-1 rounded">
                MEMBER
              </button>
            </div>
          </div>
        </div>
        <div className="flex px-2 mb-3 bg-indigo-100 rounded-md">
          <div className="flex justify-between items-center w-[100%]">
            <div>
              <div className=" flex px-2 py-2">
                <img src="/images/Mask Group 2.png" alt=""></img>

                <div className=" ml-4 mt-1 text-gray-800 text-base">
                Sean Michaletz
                </div>
              </div>
            </div>
            <div>
              <button className="text-xs text-gray-800 bg-blue-200 px-6 py-1 rounded">
                MEMBER
              </button>
            </div>
          </div>
        </div>

        </div>
        <div className="flex flex-col w-[5%] ml-5">
        <div className="ml-1 h-5 w-0.5 bg-gray-200"></div>
        <div className="h-3 w-3 rounded-full bg-gray-800"></div>
        <div className="ml-1 h-80 w-0.5 bg-gray-200"></div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Family;
