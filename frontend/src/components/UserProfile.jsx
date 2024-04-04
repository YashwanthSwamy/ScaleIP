import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { useNavigate } from "react-router-dom";

import { Button } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.png';

const UserProfile = () => {
  const navigate = useNavigate();

  const { userInfo, setAuthenticated, setUserInfo, setIsClicked } = useStateContext();

  const handleOnLogout = () => {
    setAuthenticated(false);
    setUserInfo({});
    localStorage.clear('token');
    navigate('/');
  }

  const handleOnClose = () => {
    setIsClicked(prevState => ({ ...prevState, userProfile: false }));
  }

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <button
          type='button'
          style={{ bgHoverColor: 'light-gray', color: 'rgb(153, 171, 180)', borderRadius: "50%" }}
          className={`text-2xl flex gap-1 items-center justify-center p-3 hower:drop-shadow-xl `}
          onClick={handleOnClose}
        >
          <MdOutlineCancel />
        </button>
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src={avatar}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200"> {userInfo.firstName} {userInfo.lastName}  </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> {userInfo.email} </p>
        </div>
      </div>
      <div className="mt-5">
        <button
          type='button'
          style={{ background: 'black', color: 'white', borderRadius: '10px' }}
          className={`text-l flex gap-1 items-center justify-center p-3 hower:drop-shadow-xl `}
          onClick={handleOnLogout}
        >
          Logout
        </button>
      </div>
    </div>

  );
};

export default UserProfile;