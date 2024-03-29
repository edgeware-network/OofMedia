import React, { useState, useContext } from 'react';
import { 
  HomeIcon,
  HashtagIcon, 
  LinkIcon, 
  ChatBubbleLeftRightIcon, 
  AdjustmentsHorizontalIcon,
  BellAlertIcon,
  EllipsisVerticalIcon,
  UserIcon,
} from "@heroicons/react/24/solid"
import IconMenu from './IconMenu';
import CustomModal from './CustomModal';
import { OofMediaContext } from '../context/OofMediaProvider';

const Sidebar = () => {
  const [modal, setModal] = useState(false);
  const { username, userLoggedIn } = useContext(OofMediaContext);

  return (
    <div className='flex flex-col col-span-2 items-center space-y-4 md:items-start px-4 py-3 m-2 place-content-center bg-[#191919] outline outline-offset-0 outline-1 outline-gray-800 rounded-box'>
      <div className='flex flex-row justify-between m-3 cursor-pointer space-x-2'>
        <HashtagIcon className='h-7 w-7 text-[#0D7377]' />
        <h1 className='font-poppins hidden md:inline-flex font-bold text-xl'>Oofed</h1>
      </div>
      { !userLoggedIn && (
        <div className="space-y-2">
          <IconMenu Icon={HashtagIcon} title="Explore"/>
          <IconMenu Icon={AdjustmentsHorizontalIcon} title="Settings" />
        </div>
      )}
      { userLoggedIn && (
          <div className='flex flex-col space-y-2'>
          <IconMenu Icon={HomeIcon} title="Home" />
          <IconMenu Icon={HashtagIcon} title="Explore"/>
          <IconMenu Icon={LinkIcon} title="Connect" />
          <IconMenu Icon={ChatBubbleLeftRightIcon} title="Messages" />
          <IconMenu Icon={AdjustmentsHorizontalIcon} title="Settings" />
        </div>

      )}

      {userLoggedIn &&<button onClick={() => {setModal(true)}} className='group flex flex-row p-3 items-center place-content-between space-x-2 hover:bg-[#323232] rounded-box cursor-pointer mb-2'>
        <UserIcon className='h-6 w-6 group-hover:text-oofmedia'/>
        <h3 className='hidden md:inline-flex font-poppins text-[#0D7377] group-hover:text-[#14ffec] text-sm'>{"@"+username}</h3>
        <EllipsisVerticalIcon className='h-6 w-6 group-hover:text-oofmedia transition-all ease-out duration hover:rotate-90 active:scale-150' />
      </button>}
      <CustomModal isVisible={modal} onClose={() => {setModal(false)}} />
    </div>
  );
};

export default Sidebar;

