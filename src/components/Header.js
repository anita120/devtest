import { useEffect, useState } from "react";

const Header = () => {
const [message, setMessage] = useState('Success Message Here')
const [success, setSuccess] = useState(true)

useEffect(()=>{
  if(success)
  setMessage('Success Message Here')
  else setMessage('Warning Message Here')

}, [success])

const handleMessage = () =>{
  setSuccess(!success)
}

  return (
    <>
      <div className="flex w-full mt-5 mb-5">
        <div className="flex md:w-1/3 px-4 text-lg text-black font-bold border-black">
          My Account
        </div>
        <div className="hidden md:flex w-1/3  rounded-md">
          <button onClick = {handleMessage}
           className={
            'px-14 py-1 text-base font-bold' +
            (success ?  'text-green-800 bg-emerald-100' : 'text-red-500 bg-red-100' )
          }
           >
            {message}
          </button>
        </div>

        <div className="hidden md:flex w-1/3 justify-end px-4">
          <button className="text-base text-white bg-gray-800 px-6 py-1 rounded">
            View Button
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
