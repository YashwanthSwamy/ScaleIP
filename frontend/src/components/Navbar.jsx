import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.png';
import { Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
    return (
        <TooltipComponent content={title} position="BottomCenter">
            <button type='button' onClick={customFunc} style={{ color }}
                className='relative text-xl rounded-full p-3 hover:bg=ligh-gray'>
                <span style={{ background: dotColor }}
                    className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
                />
                {icon}
            </button>
        </TooltipComponent>
    );
};

const Navbar = () => {
    const { setActiveMenu, isClicked, handleClick, screenSize, setScreenSize, userInfo} = useStateContext();

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize <= 900) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    return (
        <div className='flex justify-between p-2 pl-0 md:ml-1 md:mx-6 relative bg-white'>
            <NavButton title="Menu"
                customFunc={() => { setActiveMenu((prevActiveMenu) => !prevActiveMenu) }}
                color="cyan"
                icon={<AiOutlineMenu
                />}
            />
            <div className='flex'>
                <NavButton title='Chat'
                    dotColor='#03C9D7'
                    customFunc={() => handleClick('chat')}
                    color="cyan"
                    icon={<BsChatLeft />}
                />
                <NavButton title='Chat'
                    dotColor='#03C9D7'
                    customFunc={() => handleClick('notification')}
                    color="cyan"
                    icon={<RiNotification3Line />}
                />
                <TooltipComponent
                    content='Profile'
                    position='BottomCenter'
                >
                    <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-ligh-gray rounded-lg'
                        onClick={() => handleClick('userProfile')}
                    >
                        <img
                            className='rounded-full w-8 h-8'
                            src={avatar}
                        />
                        <p className='text-cyan-400 text-14'>
                            <span> Hey, </span> {' '}
                            <span className='font-extrabold ml-1 text-cyan-400'>{userInfo.firstName}</span>
                        </p>
                        <MdKeyboardArrowDown />
                    </div>
                </TooltipComponent>

                {isClicked.chat && <Chat />}
                {isClicked.notification && <Notification />}
                {isClicked.userProfile && <UserProfile />}
            </div>
        </div>
    )
}

export default Navbar