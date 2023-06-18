import { HashtagIcon } from '@heroicons/react/24/solid';
import React, { useContext } from 'react';
import { OofMediaContext } from '../context/OofMediaProvider';


const CustomModal = ({ isVisible, onClose }) => {
  const { logout } = useContext(OofMediaContext);

  if (!isVisible) return null;

  const handleClose = (e) => {
    if(e.target.id === "close") onClose();
  };

  return (
    <div onClick={handleClose} id="close" className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[400px] p-6 h-[320px] bg-[rgba(0,0,0)] text-white rounded-box flex flex-col space-y-4 m-2 items-center justify-between">
        <HashtagIcon className='h-10 w-10 text-[#0D7377]' />
        <h1 className='font-epilogue text-xl font-bold'>Log out of OofMedia?</h1>
        <p className='font-epilogue text-sm text-gray-600'>You can always log back in at any time.</p>
        <button onClick={logout} className='btn btn-wide font-poppins bg-[#0d7377] text-white hover:bg-[rgba(13,115,119,0.5)]'>Logout</button>
        <button onClick={handleClose} id="close" className='btn btn-wide font-poppins btn-outline hover:bg-transparent border-[#0d7377] hover:border-[#0d7377] hover:text-white'>Cancel</button>
      </div>
    </div>
  );
};

export default CustomModal;