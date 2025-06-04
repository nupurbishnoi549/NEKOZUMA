import React from 'react'

const Discription = ({ titleText, myClass }) => {
    return (
        <p className={`text-[#D4E5FF] font-normal text-sm leading-[135%] antialiased tracking-[0.2px] ${myClass}`}>
            {titleText}
        </p>
    )
}

export default Discription
