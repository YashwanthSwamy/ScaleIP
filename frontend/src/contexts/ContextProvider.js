import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
  chat: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState();
  const [userInfo, setUserInfo] = useState();

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true })
  }

  return (
    <StateContext.Provider value={{ 
      activeMenu, setActiveMenu, 
      isClicked, setIsClicked, handleClick,
      screenSize, setScreenSize,
      authenticated, setAuthenticated,
      userInfo, setUserInfo
      }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);