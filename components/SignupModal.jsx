import React, { useState } from 'react';
import { HashtagIcon } from '@heroicons/react/24/solid';

const SignupModal = ({ isVisible, onClose }) => {

  const [username, setUsername] = useState("");

  if (!isVisible) return null;

  const handleClose = (e) => {
    if(e.target.id === "signup") onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("username", username);
    setUsername("");
  }

  return (
    <div onClick={handleClose} id="signup" className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[400px] p-6 h-[360px] bg-[rgba(0,0,0)] text-white rounded-box flex flex-col space-y-4 m-2 items-center justify-between">
        <div className='flex flex-col items-center justify-between'>
          <HashtagIcon className='h-10 w-10 text-[#0D7377]' />
          <h1 className='font-epilogue text-xl font-bold'>Create your oofed account</h1>
        </div>
        <form className='flex flex-col items-center space-y-6' onSubmit={handleSubmit}>
          <div className='flex flex-col items-center justify-between'>
            <span className='text-xs font-epilogue font-thin text-gray-600'>set username</span>
            <input required type='text' value={username} onChange={e => setUsername(e.target.value)} placeholder='username' className='rounded-[3px] bg-black outline outline-1 outline-offset-1 outline-gray-800 font-poppins p-3.5 m-0.5'/>
          </div>
          <button type="submit" className='btn btn-wide font-poppins bg-[#0d7377] text-white hover:bg-[rgba(13,115,119,0.5)]'>Sign</button>
        </form>
        <button onClick={handleClose} id="signup" className='btn btn-wide btn-outline hover:bg-transparent font-poppins border-[#0d7377] hover:border-[#0d7377] hover:text-white'>Cancel</button>
      </div>
      
    </div>
  );
};

export default SignupModal;