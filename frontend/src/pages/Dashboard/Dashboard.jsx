import React, { useState, useEffect } from 'react';
import { CompanyDetails, CompanySidebar } from './components';
import { CompanyProvider } from './contexts/CompanyContext';
import axios from 'axios';

const Dashboard = () => {
  const [companyList, setCompanyList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    setIsLoading(true);
    const reqBody = {
      "email": "yashwanth.swamy@colorado.edu"
    }
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/userinfo/companieslist`, { params: reqBody });
      if (response.status === 200) {
        const resp = response.data.companies;
        if (resp) {
          setCompanyList(resp);
        }
      }
    } catch (error) {
      console.error('API call failed', error);
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <p className='text-3xl flex justify-center items-center'>
        Loading ...
      </p>
    )
  }

  if(!companyList){
    return (
      <p className='text-3xl flex justify-center items-center'>
        No Companies...
      </p>
    )
  }

  return (
    <CompanyProvider>
      <div className='flex'>
        <div className='w-[20%] m-4 sidebar dark:bg-secondary-dark-bg bg-white rounded-lg'>
          <CompanySidebar companyList={companyList} />
        </div>
        <div className='w-[80%] m-4'>
          <CompanyDetails />
        </div>
      </div>
    </CompanyProvider>
  )
}

export default Dashboard