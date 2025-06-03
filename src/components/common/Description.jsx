import React from 'react'

const Description = ({ DescriptionText, myClass }) => {
  return (
    <p className={`text-[#D4E5FF] font-normal text-sm leading-[135%] ${myClass} `}>{DescriptionText}</p>
  )
}

export default Description
