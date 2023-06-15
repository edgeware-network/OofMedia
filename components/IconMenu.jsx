import Link from 'next/link';
import React from 'react';

const IconMenu = ({ Icon, title }) => {
  return (
    <Link href={`${(title === "Home") ? "/" : `${title.toLowerCase()}`}`} className='text-white'>
    <div className="group flex items-center space-x-2 px-4 py-3 cursor-pointer hover:bg-[#323232] rounded-box transition-all duration-200">
      <Icon className="h-6 w-6 group-hover:text-oofmedia" />
      <p className='hidden md:inline-flex group-hover:text-oofmedia font-poppins text-base font-light'>{title}</p>
    </div>
    </Link>
  );
};

export default IconMenu;