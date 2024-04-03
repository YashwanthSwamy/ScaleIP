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
    console.log("process.env.REACT_APP_COMPANIES_LIST_URL", process.env.REACT_APP_COMPANIES_LIST_URL)

    try {
      const response = await axios.get(`${process.env.REACT_APP_COMPANIES_LIST_URL}`, { params: reqBody });
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
      <div className='text-3xl  text-cyan-900 flex justify-center items-center'>
        <p>
          Loading ...
        </p>
      </div>
    )
  }

  if (!companyList) {
    return (
      <div className='text-3xl text-cyan-900 flex justify-center items-center'>
        <p>
          No Companies...
        </p>
      </div>

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