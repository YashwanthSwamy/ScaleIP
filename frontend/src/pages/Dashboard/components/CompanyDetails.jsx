import React, { useState, useEffect } from 'react';
import { GoDotFill } from "react-icons/go";
import axios from 'axios';

import { Stacked, Button, SparkLine, Loading } from '../../../components';
import { SparklineAreaData } from '../../../data/dummy';
import { useCompanyContext } from '../contexts/CompanyContext';
import { IntroCard, StatisticCard } from './';

const CompanyDetails = () => {
  const { selectedCompanyId } = useCompanyContext();
  const [currentCompanyDetails, setcurrentCompanyDetails] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    if (selectedCompanyId) {
      setIsLoading(true);
      const reqBody = {
        "companyId": selectedCompanyId
      }
      try {
        const response = await axios.get(`${process.env.REACT_APP_COMPANY_DETAILS_URL}`, { params: reqBody });
        if (response.status === 200) {
          console.log("resp", response)
          const resp = response.data.details;
          if (resp) {
            setcurrentCompanyDetails(resp);
          }
        }
        else {
          setcurrentCompanyDetails([]);
        }
      } catch (error) {
        console.error('API call failed', error);
        setcurrentCompanyDetails([]);
      }
      setIsLoading(false);
    }
  }, [selectedCompanyId]);

  if (!currentCompanyDetails) {
    return (
        <Loading text={'Make a Selection'} />
    );
  }

  if (isLoading) {
    return (
        <Loading text={'Loading'} />
    );
  }

  return (
    <div className='mt-8'>
      <IntroCard currentCompanyDetails={currentCompanyDetails} />
      <StatisticCard currentCompanyDetails={currentCompanyDetails} />

      {/* charts */}
      <div className='flex gap-10 sm:w-full'>
        <div className='bg-white dark:text-gray-200 dark:secondary-bg m-3 p-4 rounded-2xl w-full justify-between'>
          <div className='flex justify-between'>
            <p className='font-bold text-xl text-gray-400'>Revenue Updates</p>
            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                <span><GoDotFill /></span>
                <span>Expense</span>
              </p>
              <p className='flex items-center gap-2 text-green-600 hover:drop-shadow-xl'>
                <span><GoDotFill /></span>
                <span>Profit</span>
              </p>
            </div>
          </div>
          <div className='mt-10 flex gap-10 justify-between'>
            <div className='border-r-1 border-color m-4 pr-10'>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>
                    $ 88,999.00
                  </span>
                  <span className='text-sm ml-1 mb-1 p-1.5 hover:drop-shadow-xl rounded-full cursor-pointer text-white bg-green-400'>
                    25%
                  </span>
                </p>
                <p className='text-gray-500 mt-1'>
                  Profit
                </p>
              </div>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>
                    $ 50,985.00
                  </span>
                </p>
                <p className='text-gray-500 mt-1'>
                  Expense
                </p>
              </div>
              <div className='mt-5'>
                <SparkLine
                  color='cyan'
                  type='Line'
                  id='line-sparkline'
                  height='80-px'
                  width='250px'
                  data={SparklineAreaData}
                />
              </div>
              <div className='mt-4'>
                <Button
                  color='white'
                  bgColor='cyan'
                  text='Download Report'
                  borderRadius='10px'
                />
              </div>
            </div>
            <div>
              <Stacked width='320px' height='360px' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyDetails;