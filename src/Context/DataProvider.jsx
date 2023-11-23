import React, { createContext, useState, useContext } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [showLogin, setShowLogin] = useState(true);

  const [islogin, setIsLogin] = useState(true);

  const handleButonClick = () => {
    setIsLogin((previslogin) => !previslogin);
    setShowLogin((prevShowLogin) => !prevShowLogin);
  };

  const constextValue = {
    showLogin,
    handleButonClick,
    islogin,
  };

  return (
    <DataContext.Provider value={constextValue}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};

export default DataProvider;
