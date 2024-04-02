import React from 'react';
import { CompanyDetails, CompanySidebar } from './components';
import { CompanyProvider } from './contexts/CompanyContext';

const Dashboard = () => {
  return (
    <CompanyProvider>
      <div className='flex'>
        <div className='w-[20%] m-4 sidebar dark:bg-secondary-dark-bg bg-white rounded-lg'>
          <CompanySidebar />
        </div>
        <div className='w-[80%] m-4'>
          <CompanyDetails />
        </div>
      </div>
    </CompanyProvider>
  )
}

export default Dashboard