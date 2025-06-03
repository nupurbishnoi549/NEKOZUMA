import React, { useEffect, useState } from 'react';
import TopArrow from '../assets/images/svg/top-arrow.svg'

const BackToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 400);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {showButton && (
                <div onClick={scrollToTop} className="fixed bottom-5 bg-[#3586FF] flex justify-center items-center border border-[#1C2430] animate-bounce right-5 cursor-pointer z-10 w-10 h-10 rounded-full transition-all duration-200 ease-linear" >
                    <img src={TopArrow} alt="TopArrow" />
                </div>
            )}
        </>
    );
};

export default BackToTop;