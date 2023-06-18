import React from 'react';
import ConnectMode from './ConnectMode';
import Logs from './Logs';
import { PhoneArrowUpRightIcon } from '@heroicons/react/24/solid';


const RandomConnect = () => {
  const tabs = ['Call Logs', 'Chat Logs'];
  const defaultTab = 'Call Logs';

  const tabContent = [
    <div> 
      <div className='flex flex-row items-center justify-start p-2'>
      <PhoneArrowUpRightIcon className="h-5 w-5 text-white mx-5" />
      <p>Missed call <span className='text-xs opacity-50'>4 hours ago</span></p>
      </div>
      <div className='flex flex-row items-center justify-start p-2'>
      <PhoneArrowUpRightIcon className="h-5 w-5 text-white mx-5" />
      <p>Outgoing Call <span className='text-xs opacity-50'>12th June, 2023</span></p>
      </div>
      <div className='flex flex-row items-center justify-start p-2'>
      <PhoneArrowUpRightIcon className="h-5 w-5 text-white mx-5" />
      <p>Missed call <span className='text-xs opacity-50'>4 hours ago</span></p>
      </div>
    </div>,
    <div>
          <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="chat-header">
    User
    <time className="text-xs opacity-50 ml-2">12:45</time>
  </div>
  <div className="chat-bubble">Hello How are you doing?</div>
  <div className="chat-footer opacity-50">
    Delivered
  </div>
</div>
<div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="chat-header">
    You
    <time className="text-xs opacity-50 ml-2">12:46</time>
  </div>
  <div className="chat-bubble">Doing great, Wassup?</div>
  <div className="chat-footer opacity-50">
    Seen at 12:46
  </div>
</div>
</div>,
  ];

  return (
    <div className='m-2 p-4 col-span-7 lg:col-span-5 bg-[#191919] outline outline-offset-0 outline-1 outline-gray-800 rounded-box'>
      <div className='flex flex-col items-center justify-between'>
        <h1 className='font-poppins font-bold p-4 text-xl'>Connect</h1>
        {/* <ArrowPathRoundedSquareIcon className='h-8 w-8 mr-4 cursor-pointer text-oofmedia transition-all duration-500 ease-out hover:rotate-180 active:scale-150' /> */}
        <ConnectMode/>
        <Logs tabs={tabs} defaultTab={defaultTab} tabContent={tabContent} />
      </div>
    </div>
  );
};

export default RandomConnect;