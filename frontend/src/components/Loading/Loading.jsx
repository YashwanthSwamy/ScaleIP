import React, { useState, useEffect } from 'react';

const Loading = ({ text }) => {
    const [dots, setDots] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prevDots) => {
                if (prevDots === '...') {
                    return '';
                } else {
                    return prevDots + '.';
                }
            });
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-3xl  text-cyan-900">
                <span>{text}{dots}</span>
            </div>
        </div>
    );
};

export default Loading;
