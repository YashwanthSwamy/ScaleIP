import React, { useState } from 'react';
import { FaSackDollar } from "react-icons/fa6";
import { AiOutlineFundView } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import MailDialog from './MailDialog';

const IntroCard = ({ currentCompanyDetails }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleOpenDialog = () => {
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    const handleNameClick = (websiteUrl) => () => {
        window.open(websiteUrl, '_blank');
    };

    return (
        <div className='flex flex-wrap lg:flex-nowrap justify-center'>
            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-auto rounded-xl w-full p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
                <div className="flex justify-between items-center">
                    <div className='rounded-lg cursor-pointer w-[80%]'>
                        <div className='flex items-center gap-5 rounded-lg text-md text-cyan-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray'>
                            <div className='capitalize'>
                                <p className='cursor-pointer text-3xl' onClick={handleNameClick(currentCompanyDetails.website_url)}>
                                    {currentCompanyDetails.name}
                                    {currentCompanyDetails.industry && <span className='text-sm ml-4 px-2 border-2 border-green-500 inline-flex items-center text-green-500'>{currentCompanyDetails.industry}</span>}
                                </p>
                                {currentCompanyDetails.short_description && <p className='text-sm mt-2 text-gray-400 min-h-min text-justify'>{currentCompanyDetails.short_description}</p>}
                                {!currentCompanyDetails.short_description && <p className='text-sm mt-2 text-gray-400 min-h-min text-justify'>Mission statement currently under development</p>}
                            </div>
                        </div>
                        <div className='mt-4 text-2xl text-cyan-700 flex gap-2'>
                            {currentCompanyDetails.website_url && <FaGlobe onClick={handleNameClick(currentCompanyDetails.website_url)} />}
                            {currentCompanyDetails.linkedin_url && <FaLinkedin onClick={handleNameClick(currentCompanyDetails.linkedin_url)} />}
                            {currentCompanyDetails.twitter_url && <FaXTwitter onClick={handleNameClick(currentCompanyDetails.twitter_url)} />}
                            {currentCompanyDetails.facebook_url && <FaFacebookSquare onClick={handleNameClick(currentCompanyDetails.facebook_url)} />}
                        </div>
                    </div>
                    <div className='w-[15%]'>
                        <div>
                            <p className='flex font-bold text-xl text-gray-400 gap-2'>Revenue <FaSackDollar color='gold' className='text-2xl' /></p>
                            {currentCompanyDetails.annual_revenue_printed && <p className='text-2xl'>$ {currentCompanyDetails.annual_revenue_printed}</p>}
                            {!currentCompanyDetails.annual_revenue_printed && <p className='text-l'>Income figures pending, stay tuned.</p>}
                        </div>
                        <div className='mt-6 flex justify-center items-center'>
                            <button
                                type='button'
                                style={{ background: 'green', color: 'white', borderRadius: "10px" }}
                                className={`text-md flex gap-1 items-center justify-center p-3 hower:drop-shadow-xl `}
                                onClick={handleOpenDialog}
                            >
                                Reach out <AiOutlineFundView className='text-3xl pt-1' />
                            </button>
                        </div>
                    </div>
                </div>
                {isDialogOpen && (
                    <MailDialog isOpen={isDialogOpen} onClose={handleCloseDialog} />
                )}
            </div>
        </div>
    )
}

export default IntroCard;