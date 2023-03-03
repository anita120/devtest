const Bank = () => {
  return (
    <>
      <div className="ml-5 px-4 -mt-20 bg-gray-100 w-[95%] rounded-md">
        <div className="text-lg text-blank py-2">Bank Account</div>
        <div className="flex  bg-gray-100 mb-3">
          <div className="flex bg-white w-[100%]">
            <div className="p-2">
              <img src="/images/mastercard-26161.png" alt=""></img>
            </div>
            <div className="flex flex-col py-4">
              <div className="text-black text-sm">**** **** **** 5967</div>
              <div className="text-gray-300 text-xs">Expires 09/27</div>
            </div>
          </div>
          <div className="flex bg-white w-[100%] ml-3 ">
            <div className="p-2">
              <img src="/images/mastercard-26161.png" alt=""></img>
            </div>
            <div className="flex flex-col py-4">
              <div className="text-black text-sm">**** **** **** 5967</div>
              <div className="text-gray-300 text-xs">Expires 09/27</div>
            </div>
          </div>
        </div>
        <div className="flex  bg-gray-100"></div>
      </div>
    </>
  );
};

export default Bank;
