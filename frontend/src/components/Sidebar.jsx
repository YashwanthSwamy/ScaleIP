import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiFillSliders } from 'react-icons/ai';
import { FaAngleDoubleLeft } from "react-icons/fa";
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900 ) {
      setActiveMenu(false);
    }
  };

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-black  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-cyan-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link to="/dashboard" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-cyan-700">
              <AiFillSliders /> <span>Venture Vista</span>
            </Link>
            <TooltipComponent content="Close Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block text-cyan-700"
              >
                <FaAngleDoubleLeft />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10 ">
            {
              links.map((item) => (
                <div key={item.name}>
                  <NavLink to={`/${item.name}`} key={item.name} onClick={handleCloseSideBar}
                    className={({ isActive }) => isActive ? activeLink : normalLink}
                  >
                    {item.icon}
                    <span className='capitalize'>{item.name}</span>
                  </NavLink>
                </div>
              ))
            }
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;