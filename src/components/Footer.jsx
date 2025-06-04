import React from 'react';
import leftImage from '../assets/images/webp/footer-left-image.webp'
import rightImage from '../assets/images/webp/footer-right-image.webp'
import discord from "../assets/images/svg/discord.svg";
import twitter from "../assets/images/svg/twitter.svg";

const Footer = () => {
    return (
        <div className="py-5 relative bg-[#245AAB] min-h-[174px] overflow-hidden max-w-[1920px] mx-auto">
            <img
                className="absolute hidden md:block lg:w-[355px] w-[300px] left-0 bottom-0 pointer-events-none"
                src={leftImage}
                alt="left-footer"
            />
            <img
                className="absolute hidden md:block lg:w-[564px] w-[450px] right-0 bottom-0 pointer-events-none"
                src={rightImage}
                alt="right-footer"
            />
            <div className="container mx-auto px-4">
                <a
                    href="#"
                    className="text-center text-white text-xl font-bold block pb-4 pt-7 mb-0"
                >
                    NEKOZUMA
                </a>
                <div className="flex items-center justify-center gap-4">
                    <a
                        className="hover:scale-110 transition duration-300"
                        href="https://discord.com/channels"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={discord}
                            alt="discord"
                            width={32}
                            height={32}
                        />
                    </a>
                    <a
                        className="hover:scale-110 transition duration-300"
                        href="https://x.com/?lang=en"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={twitter}
                            alt="twitter"
                            width={32}
                            height={32}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
