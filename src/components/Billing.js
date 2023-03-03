import { useState, useEffect } from "react";

const Billing = () => {

  const [message, setMessage] = useState("Edit Details")
  const [success, setSuccess] = useState(true)
  
  useEffect(()=>{
    if(success)
    setMessage("Edit Details")
    else setMessage("Save")
  
  }, [success])
  
  const handleEdit = () =>{
    setSuccess(!success)
  }


  return (
    <>
      <div className="m-5 px-4 -mt-20 bg-gray-100 w-[95%] rounded-md">
        <div className="text-lg text-blank py-2">Billing Address</div>
        <div class="flex items-center py-4">
          <input
            checked
            id="checked-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-amber-500 bg-amber-500 border-gray-300 rounded focus:ring-amber-500 focus:ring-2"
          />
          <label
            for="checked-checkbox"
            class="ml-2 text-sm font-medium text-gray-900"
          >
            Same as Home Address
          </label>
        </div>

        <div className="flex mt-3">
          <div className="flex w-[40%]">
            <div className="flex flex-col text-xs">First Name:</div>
          </div>
          <div className="flex w-[40%] ml-5">
            <div className="flex flex-col text-xs">Last Name:</div>
          </div>
        </div>
        <div className="flex">
          <div className="flex bg-white w-[40%]   rounded-sm">
            <div className="flex flex-col py-3"></div>
          </div>
          <div className="flex bg-white w-[40%] ml-5   rounded-sm">
            <div className="flex flex-col py-3"></div>
          </div>
        </div>

        <div className="flex mt-3">
          <div className="flex w-[40%]">
            <div className="flex flex-col text-xs">Address Line 1:</div>
          </div>
          <div className="flex w-[40%] ml-5">
            <div className="flex flex-col text-xs">Address Line 2:</div>
          </div>
        </div>
        <div className="flex">
          <div className="flex bg-white w-[40%]  rounded-sm">
            <div className="flex flex-col py-3"></div>
          </div>
          <div className="flex bg-white w-[40%] ml-5 rounded-sm">
            <div className="flex flex-col py-3"></div>
          </div>
        </div>

        <div className="flex mt-3">
          <div className="flex w-[10%]">
            <div className="flex flex-col text-xs">Country:</div>
          </div>
          <div className="flex w-[28%] ml-5">
            <div className="flex flex-col text-xs">State/Province/Region:</div>
          </div>
          <div className="flex w-[20%] ml-5">
            <div className="flex flex-col text-xs">City:</div>
          </div>
          <div className="flex w-[20%] ml-5">
            <div className="flex flex-col text-xs">Zip Code:</div>
          </div>
        </div>
        <div className="flex">
          <div className="flex bg-white w-[8%]">
            <div className="flex flex-col py-3 rounded-sm"></div>
          </div>
          <div className="flex bg-white w-[20%] ml-6">
            <div className="flex flex-col py-3 rounded-sm"></div>
          </div>
          <div className="flex bg-white w-[20%] ml-10">
            <div className="flex flex-col py-3 rounded-sm"></div>
          </div>
          <div className="flex bg-white w-[20%] ml-5">
            <div className="flex flex-col py-3 rounded-sm"></div>
          </div>
        </div>

        <div className="flex justify-end py-6">
          <button
            onClick={handleEdit}
            className={
              "text-base text-white bg-gray-800 px-6 py-1" +
              (success ? " bg-gray-800" : " bg-green-800")
            }
          >
            {message}
          </button>
        </div>
      </div>
    </>
  );
};

export default Billing;
