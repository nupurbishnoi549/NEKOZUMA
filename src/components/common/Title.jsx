import React from 'react'

const Title = ({ titleText, myClass }) => {
    return (
        <p className={`text-[#D4E5FF] font-normal text-sm leading-[135%] ${myClass} `}>{titleText}</p>
    )
}

export default Title
