import Image from 'next/image'
import React from 'react'
import TopHeading from './TopHeading'
import { bebas } from '@/app/layout'

const MetricsDetails = () => {
  return (
    <div className="detailDiv rounded-3xl bg-darkPry p-4 relative overflow-hidden h-72 pt-14">
    <TopHeading text={'METRICS'}/>
    <div className=' flex flex-col justify-between items-center w-full h-full text-lg'>
      <div className={` w-full flex justify-between items-center py-2 ${bebas.className} text-white`}>
        <p>24H</p>
        <p className=' bg-gradient-to-r to-[#5E6EFF] from-bluePry bg-clip-text text-transparent '>-100%</p>
      </div>
      <div className={` w-full flex justify-between items-center py-2 ${bebas.className} text-white`}>
        <p>PRICE</p>
        <p className=' bg-gradient-to-r to-[#5E6EFF] from-bluePry bg-clip-text text-transparent '>-100%</p>
      </div>
      <div className={` w-full flex justify-between items-center py-2 ${bebas.className} text-white`}>
        <p>VIRTUAL LIQUIDITY</p>
        <p className=' bg-gradient-to-r to-[#5E6EFF] from-bluePry bg-clip-text text-transparent '>-100%</p>
      </div>
      <div className={` w-full flex justify-between items-center py-2 ${bebas.className} text-white`}>
        <p>24H VOLUME</p>
        <p className=' bg-gradient-to-r to-[#5E6EFF] from-bluePry bg-clip-text text-transparent '>-100%</p>
      </div>
      <div className={` w-full flex justify-between items-center py-2 ${bebas.className} text-white`}>
        <p>TOKEN CREATED</p>
        <p className=' bg-gradient-to-r to-[#5E6EFF] from-bluePry bg-clip-text text-transparent '>-100%</p>
      </div>
    </div>

    <Image src={'/city.png'} alt="city" width={400} height={200} className="bgImgPart pointer-events-none max-w-none left-0 top-0 absolute object-cover object-top mix-blend-color-dodge"/>

</div>
  )
}

export default MetricsDetails
