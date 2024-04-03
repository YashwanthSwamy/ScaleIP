import React, { useState } from 'react';
import { HiBuildingStorefront } from "react-icons/hi2";
import { FaImage } from "react-icons/fa6";

import { useCompanyContext } from '../contexts/CompanyContext';

const CompanySidebar = ({ companyList }) => {
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const { setSelectedCompanyId } = useCompanyContext();

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentCompanies = companyList.slice(firstIndex, lastIndex);

    const handleNameClick = (websiteUrl) => () => {
        window.open(websiteUrl, '_blank');
    };

    const handleCompanyClick = (companyId) => () => {
        setSelectedCompanyId(companyId);
    };

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <div className='max-h-screen overflow-y-auto w-fit mb-4'>
                <div className="rounded-lg flex justify-center items-center bg-gray-400 lg:h-[5%] md:h-[3%]">
                    <div to="/" className="items-center gap-3 ml-3 mt-4 pb-4 flex text-xl font-extrabold tracking-tight dark:text-white text-white">
                        <HiBuildingStorefront /> <span>Companies</span>
                    </div>
                </div>
                <div className="mt-4 lg:h-[78%] md:h-[70%]">
                    {currentCompanies.map((item) => (
                        <div key={item.id} className='border m-2 rounded-lg cursor-pointer' onClick={handleCompanyClick(item.id)}>
                            <div
                                key={item.name}
                                className='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-cyan-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'
                            >
                                <div className='w-12 h-12 flex justify-center items-center'>
                                    {item.logo_url ? (<img src={item.logo_url} alt={item.name} />) : (<FaImage />)}
                                </div>
                                <div className='capitalize'>
                                    <p className='cursor-pointer' onClick={handleNameClick(item.website_url)}>{item.name}</p>
                                    <p className='text-sm text-gray-400'>{item.city}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="m-4 flex justify-center">
                {companyList.length > itemsPerPage && (
                    <div className="flex">
                        {currentPage > 1 && (
                            <button onClick={() => handlePageClick(currentPage - 1)} className="mx-1 px-3 py-1 rounded-md bg-gray-300 text-gray-700 hover:bg-gray-400">
                                &lt;
                            </button>
                        )}
                        {currentPage > 2 && (
                            <span className="mx-1 py-1 rounded-md">...</span>
                        )}
                        {[...Array(Math.min(3, Math.ceil(companyList.length / itemsPerPage))).keys()].map((pageNumber) => {
                            const page = currentPage - 1 + pageNumber;
                            if (page > 0) {
                                return (
                                    <button key={page} onClick={() => handlePageClick(page)} className={`mx-1 px-3 py-1 rounded-md ${currentPage === page ? 'bg-gray-600 text-white' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'}`}>
                                        {page}
                                    </button>
                                );
                            }
                            return null;
                        })}
                        {currentPage < Math.ceil(companyList.length / itemsPerPage) - 1 && (
                            <span className="mx-1 py-1 rounded-md">...</span>
                        )}
                        {currentPage < Math.ceil(companyList.length / itemsPerPage) && (
                            <button onClick={() => handlePageClick(currentPage + 1)} className="mx-1 px-3 py-1 rounded-md bg-gray-300 text-gray-700 hover:bg-gray-400">
                                &gt;
                            </button>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}

export default CompanySidebar