import React, { createContext, useContext, useState } from 'react';

const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
  const [selectedCompanyId, setSelectedCompanyId] = useState(null);

  return (
    <CompanyContext.Provider value={{ selectedCompanyId, setSelectedCompanyId }}>
      {children}
    </CompanyContext.Provider>
  );
};

export const useCompanyContext = () =>useContext(CompanyContext);