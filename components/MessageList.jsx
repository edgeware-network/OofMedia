import React from 'react'

const MessageList = () => {
  return (
    <div className='m-2 p-4 col-span-7 lg:col-span-5 bg-[#191919] outline outline-offset-0 outline-1 outline-gray-800 rounded-box'>
        <h1 className='font-bold text-4xl'>Welcome to your inbox!</h1>
        <p className='mt-4'>
        Drop a line, share posts and more with private conversations between you and others on Oofed. 
        </p>
        <button className='btn p-4 bg-[#0d7377] hover:bg-[#0b5558] font-poppins text-white rounded-lg mt-6'>
        Write a message
        </button>
    </div>
  )
}

export default MessageList