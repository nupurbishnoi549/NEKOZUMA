import React from 'react'

const Description = ({ DescriptionText, className }) => {
  return (
      <p className={`text-[#D4E5FF] font-normal text-[14px] leading-[100%] ${className} `}>{DescriptionText}</p>
  )
}

export default Description
