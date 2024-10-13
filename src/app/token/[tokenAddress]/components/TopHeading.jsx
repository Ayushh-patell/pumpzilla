import { mont } from '@/app/layout'
import React from 'react'

const TopHeading = ({text, active=true, isLeft=true}) => {
  return (
    <div className={`${mont.className} whitespace-nowrap overflow-hidden font-extrabold py-3 px-6 absolute z-20 top-0 ${isLeft?"left-0 rounded-ee-3xl":" right-0 rounded-es-3xl"} bg-gradient-to-r  from-[#787878] to-[#4F4F4F] transition-[background] duration-300 ease-in-out text-white`} style={{boxShadow:"7px 8px 10px rgba(0,0,0,0.4)"}}>
        <p className=' relative z-10'>{text}</p>
    <div className={` z-0 absolute pointer-events-none top-0 left-0 w-full h-full bg-gradient-to-r from-[#E309CE] to-bluePry ${active?" opacity-100":" opacity-0"} transition-all duration-300 ease-in-out`}></div>
    </div>
  )
}

export default TopHeading