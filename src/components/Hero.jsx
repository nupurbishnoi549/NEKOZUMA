// import React from 'react'
// import Description from './common/Description'
// import HeroImg from '../assets/images/webp/hero-image.webp'

// const Hero = () => {
//     return (
//         <div className="bg-[#1C2430] relative min-h-screen overflow-hidden">
//             {/* <Header /> */}
//             <div className="container px-5 w-full mx-auto" >
//                 <div className="flex max-lg:flex-col">
//                     {/* <div className="lg:w-6/12 w-full text-center lg:text-left flex flex-col pt-[122px] max-lg:pt-10 max-md:pt-[44px]" */}
//                     {/* data-aos="zoom-in"
//                         data-aos-duration="10"> */}
//                     <div className='lg:w-6/12 w-full pt-[170px]'>
//                         <div className='border border-[#3586FF] w-[164px]'></div>
//                         <h2 className='font-normal text-[64px] text-[#3586FF] ff-franklin'>NEKOZUMA</h2>
//                         <Description DescriptionText="The collection  of 5555 NFTs on the Solana blockchain. The collection serves to be a rising force against the anime meta of collections with undoxxed teams and is therefore backed by the team at Nubbies NFT & Karmic Labs." className="!max-w-[502px] !text-base" />
//                         <button className='bg-[#245AAB] py-2 px-6 mt-11 rounded-lg cursor-pointer text-white'>Connect Wallet</button>
//                     </div>
//                     <div className='lg:w-6/12 w-full absolute right-[-8.5%] pt-[83px] top-[-4%]'>
//                              <img src={HeroImg} alt="HeroImg" className='size-[600px]' />
//                                 </div>
//                 </div>
//             </div>
//         </div>
//         // <section className='bg-[#1C2430] mx-auto max-w-1920 relative overflow-hidden min-h-screen'>
//         //     <div className="container px-5 w-full mx-auto ">
//         //         <div className="flex max-lg:flex-col gap-8 ">
//         //             <div className='lg:w-6/12 w-full'>
//         //                 <div className='border border-[#3586FF] w-[164px]'></div>
//         //                 <h2 className='font-normal text-[64px] text-[#3586FF] ff-franklin'>NEKOZUMA</h2>
//         //                 <Description
//         //                     DescriptionText="The collection  of 5555 NFTs on the Solana blockchain. The collection serves to be a rising force against the anime meta of collections with undoxxed teams and is therefore backed by the team at Nubbies NFT & Karmic Labs."
//         //                     className="!max-w-[502px] !text-base"
//         //                 />
//         // //                 <button className='bg-[#245AAB] py-2 px-6 mt-11 rounded-lg cursor-pointer text-white'>Connect Wallet</button>
//         // //             </div>
//         //             <div className='lg:w-6/12 w-full absolute right-0'>
//         //                 <img src={HeroImg} alt="HeroImg" />
//         //             </div>
//         //         </div>
//         //     </div>
//         // </section>
//     )
// }

// export default Hero
import React from "react";
import Description from './common/Description'
import HeroImg from '../assets/images/webp/hero-image.webp'
import HeroMobileImg from '../assets/images/webp/cartoon.webp'
import LeftGlow from '../assets/images/webp/hero-left-light.webp'
import Header from "./common/Header";

const Hero = () => {
    return (
        <div className="bg-[#1C2430] min-h-[682px] relative overflow-hidden">
            <Header />
            <div className="max-w-[880px] mx-auto xl:px-4 lg:px-0 px-4">
                <div className="">
                    <div className="text-center lg:text-left z-10 lg:pt-[169px] pt-20">
                        <div className="w-40 h-[2px] bg-[#3586FF] mx-auto lg:mx-0 mb-4" />
                        <h2 className='font-normal md:text-[64px] text-5xl pb-3 text-[#3586FF] ff-franklin'>NEKOZUMA</h2>
                        <Description DescriptionText="The collection  of 5555 NFTs on the Solana blockchain. The collection serves to be a rising force against the anime meta of collections with undoxxed teams and is therefore backed by the team at Nubbies NFT & Karmic Labs." className="!max-w-[502px] !text-base max-lg:!mx-auto" />
                        <button className='bg-[#245AAB] py-2 px-6 lg:mt-11 mt-7 rounded-lg cursor-pointer text-white'>Connect Wallet</button>
                    </div>

                    <div className="lg:absolute lg:right-0 xl:top-[12%] top-[17%] mt-8 lg:mt-0">
                        <img
                            src={HeroImg}
                            alt="Nekozuma"
                            className="hidden lg:block w-[450px] xl:w-[600px] pointer-events-none"
                        />
                        <img
                            src={HeroMobileImg}
                            alt="Nekozuma Mobile"
                            className="block lg:hidden mx-auto w-[300px] md:w-[350px] pointer-events-none"
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

