import { ConnectWallet } from '@thirdweb-dev/react';
import React from 'react';

const Widgets = () => {
  return (
    <div className='hidden lg:inline-flex items-start place-content-center px-4 m-2 col-span-2 bg-[#191919] outline outline-offset-0 outline-1 outline-gray-800 rounded-box'>
      <div className='mt-2'>
        <ConnectWallet theme='dark' dropdownPosition={{side:"bottom", align:"center"}} />
      </div>
    </div>
  );
};

export default Widgets;