import React from "react";
import Description from './common/Description'
import HeroImg from '../assets/images/webp/hero-image.webp'
import LeftGlow from '../assets/images/webp/hero-left-light.webp'
import Header from "./common/Header";

const Hero = () => {
    return (
        <div className="xl:min-h-[682px] lg:min-h-[543px] md:min-h-[760px] min-h-[730px] relative overflow-hidden">
            <Header />
            <div className="max-w-[880px] mx-auto xl:px-4 lg:px-0 px-4">
                <div>
                    <div className="text-center lg:text-left z-10 lg:pt-[169px] pt-10">
                        <div className="w-40 h-[2px] bg-[#3586FF] mx-auto lg:mx-0 mb-4" />
                        <h2 className='font-normal md:text-[64px] text-5xl pb-3 text-[#3586FF] ff-franklin'>NEKOZUMA</h2>
                        <Description DescriptionText="The collection  of 5555 NFTs on the Solana blockchain. The collection serves to be a rising force against the anime meta of collections with undoxxed teams and is therefore backed by the team at Nubbies NFT & Karmic Labs." className="lg:!max-w-[502px] !text-base max-lg:!mx-auto" />
                        <button className='bg-[#245AAB] py-2 px-6 lg:mt-11 mt-7 rounded-lg cursor-pointer text-white'>Connect Wallet</button>
                    </div>

                    <div className="absolute right-0  xl:top-[12%] lg:top-[17%] md:top-[42%] top-[48%] mt-8 md:mt-0">
                        <img
                            src={HeroImg}
                            alt="Nekozuma"
                            className="lg:w-[450px] xl:w-[600px] md:w-[450px] w-[350px] pointer-events-none"
                        />
                    </div>
                </div>

                <img
                    src={LeftGlow}
                    alt="Left Glow"
                    className="w-full max-w-[325px] absolute left-0 bottom-[-2%] hidden xl:block pointer-events-none"
                />

            </div>
        </div>
    );
};

export default Hero;

