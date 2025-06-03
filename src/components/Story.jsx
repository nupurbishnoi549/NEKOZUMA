import React from 'react'
import Description from './common/Description'
import StoryImg from '../assets/images/webp/story-image.webp'

const Story = () => {
    return (
        <div id='story' class="bg-[#1C2430] pt-[48px] max-w-[1920px] mx-auto">
            <div class="max-w-[880px] px-4 mx-auto">
                <div>
                    <h1 class="font-normal text-[43px] leading-[100%] text-[#3586FF] ff-franklin text-center">Story</h1>
                </div>
                <div>
                    <Description DescriptionText="Nekozuma which means lightning cats in Japanese (Neko = Cats // Inazuma = Lightning) is a collection of 5555 NFTs on the Solana blockchain. The story centers around 3 eras of cats living in different timelines - past, present, future. In each timeline, there are 3 deities that are all powerful and are meant to protect the world of Nekos." myClass="!text-center !text-base !pt-6" />
                </div>
                <div>
                    <Description DescriptionText="However at every junction in time, there is always a darkness that is waiting to overthrow the good. Hence, each timeline has its own arch nemesis. This means that there will be a total of 4 godly nekos from each timeline making a total of 12 godly will be fully animated." myClass="!text-center !pt-6" />
                </div>
            </div>
            <div className='pt-14'>
                <img src={StoryImg} alt="StoryImg" className='pointer-events-none' />
          </div>
        </div >

    )
}

export default Story
