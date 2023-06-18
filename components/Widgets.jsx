import { ConnectWallet } from '@thirdweb-dev/react';
import styles  from "../styles/Home.module.css";
import React, { useState, useContext } from 'react';
import SignupModal from './SignupModal';
import { OofMediaContext } from '../context/OofMediaProvider';

const Widgets = () => {
  const { userLoggedIn, login } = useContext(OofMediaContext);
  const [signUpModal, setSignUpModal] = useState(false);

  return (
    <div className='hidden lg:flex flex-col items-center place-content-start px-4 py-3 m-2 col-span-3 bg-[#191919] outline outline-offset-0 outline-1 outline-gray-800 rounded-box space-y-4'>
      <div className='mt-2'>
        <ConnectWallet className={styles.customWallet} theme='dark' dropdownPosition={{side:"bottom", align:"center"}} />
      </div>
      {/* // TODO: add condition here */}

      {!userLoggedIn && <div className='flex flex-col bg-[#04100d] outline outline-offset-0 outline-1 outline-gray-800 rounded-box items-center p-2 space-y-4 m-2 justify-between'>
        <div className='flex flex-col items-center justify-between mt-2'>
          <h2 className='font-epilogue text-[16px] font-bold'>New to Oofed?</h2>
          <p className='font-epilogue text-xs text-gray-600 font-light'>Login to personalized normie feeds! </p>
        </div>
        <button onClick={login} className='btn btn-sm font-poppins btn-wide bg-[#0D7377] rounded-[10px] text-white hover:bg-[rgba(13,115,119,0.5)]'>Login</button>
        <button onClick={() => {setSignUpModal(true)}} className='btn btn-sm font-poppins btn-wide bg-[#0D7377] rounded-[10px] text-white hover:bg-[rgba(13,115,119,0.5)]'>Create Account</button>
        <SignupModal isVisible={signUpModal} onClose={() => {setSignUpModal(false)}} />
      </div>}
    </div>
  );
};

export default Widgets;