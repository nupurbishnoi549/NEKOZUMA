import React from 'react';
import { TEAM_MEMBERS_LIST } from '../utils/helper';
import Twitter from '../assets/images/svg/twitter.svg';
import Description from './common/Description';

const Team = () => {
    return (
        <div id='team' className='md:py-[61px] py-12 px-4'>
            <div className='max-w-[880px] mx-auto'>
                <div className="w-40 h-[2px] bg-[#3586FF] mx-auto  lg:mb-14 md:mb-8 mb-5" />
                <h2 className='font-normal text-[43px] pb-9 leading-[100%] text-[#3586FF] ff-franklin text-center'>Team</h2>
                <div className='flex flex-wrap gap-6 justify-center'>
                    {TEAM_MEMBERS_LIST.map((member, index) => (
                        <div
                            key={index}
                            className='max-w-xs rounded-lg w-full md:w-[202px] text-center text-white'
                        >
                            <img
                                className='mx-auto md:size-[202px] mb-6 object-cover pointer-events-none'
                                src={member.image}
                                alt={member.name}
                            />
                            <h3 className='font-normal text-2xl leading-[100%] text-[#3586FF] ff-franklin text-center mb-2'>{member.role}</h3>
                            <p className='text-sm mb-2'>{member.name}</p>
                            <Description DescriptionText="  However at every junction in time, there is always a darkness that is waiting to overthrow" myClass="!mb-3 !max-w-[202px] !mx-auto" />
                            <a href="#" target='_blank' rel="noopener noreferrer" className='inline-block'>
                                <img src={Twitter} alt='Twitter' className='w-5 h-5 mx-auto' />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
