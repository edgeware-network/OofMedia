import { Cog8ToothIcon, PlusCircleIcon } from '@heroicons/react/24/solid';
import React from 'react'
import MessageList from './MessageList';

const Message = () => {
  return (
    <div className='m-2 p-4 col-span-7 lg:col-span-5 bg-[#191919] outline outline-offset-0 outline-1 outline-gray-800 rounded-box'>
      <div className='flex flex-row items-center justify-between'>
        <h1 className='font-poppins font-bold p-4 text-xl'>Messages</h1>
        <div className='flex flex-row'>
          <Cog8ToothIcon className="h-5 w-5 text-white mx-4 hover:bg-slate-600 hover:rounded-full " /> 
          <PlusCircleIcon className="h-5 w-5 text-white hover:bg-slate-600 hover:rounded-full" />
        </div>
        {/* <ArrowPathRoundedSquareIcon className='h-8 w-8 mr-4 cursor-pointer text-oofmedia transition-all duration-500 ease-out hover:rotate-180 active:scale-150' /> */}
      </div>
      <MessageList />
    </div>
  );
};

export default Message;