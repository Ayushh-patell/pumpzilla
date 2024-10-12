import { mont } from '@/app/layout'
import React from 'react'

const TopHeading = ({text}) => {
  return (
    <div className={`${mont.className} font-extrabold py-3 px-6 absolute z-20 top-0 left-0 rounded-ee-3xl bg-gradient-to-r from-[#E309CE] to-bluePry text-white`} style={{boxShadow:"7px 8px 10px rgba(0,0,0,0.4)"}}>
        {text}
    </div>
  )
}

export default TopHeading