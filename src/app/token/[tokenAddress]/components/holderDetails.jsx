import Image from 'next/image'
import React from 'react'
import TopHeading from './TopHeading'
import { bebas } from '@/app/layout'

const HolderDetails = () => {
  return (
    <div className="detailDiv w-full rounded-2xl bg-darkPry p-4 pt-14 relative overflow-hidden h-[45%]">
      <TopHeading text={'HOLDER DISTRIBUTION'}/>

      <div className={` h-full w-full flex flex-col items-center justify-between text-lg ${bebas.className}`}>
        <div className=' w-full flex justify-between items-center py-1'>
          <p>0bc...fws</p>
          <p><span className=' bg-gradient-to-r to-[#5E6EFF] from-bluePry bg-clip-text text-transparent'>20.6 %</span> <span className=' text-white'>(BONDING CURVE)</span></p>
        </div>
        <div className=' w-full flex justify-between items-center py-1'>
          <p>0bc...fws</p>
          <p className=' bg-gradient-to-r to-[#5E6EFF] from-bluePry bg-clip-text text-transparent'>20.6 %</p>
        </div>
        <div className=' w-full flex justify-between items-center py-1'>
          <p>0bc...fws</p>
          <p className=' bg-gradient-to-r to-[#5E6EFF] from-bluePry bg-clip-text text-transparent'>20.6 %</p>
        </div>
        <div className=' w-full flex justify-between items-center py-1'>
          <p>0bc...fws</p>
          <p className=' bg-gradient-to-r to-[#5E6EFF] from-bluePry bg-clip-text text-transparent'>20.6 %</p>
        </div>
        <div className=' w-full flex justify-between items-center py-1'>
          <p>0bc...fws</p>
          <p className=' bg-gradient-to-r to-[#5E6EFF] from-bluePry bg-clip-text text-transparent'>20.6 %</p>
        </div>
        <div className=' w-full flex justify-between items-center py-1'>
          <p>0bc...fws</p>
          <p className=' bg-gradient-to-r to-[#5E6EFF] from-bluePry bg-clip-text text-transparent'>20.6 %</p>
        </div>
        <div className=' w-full flex justify-between items-center py-1'>
          <p>0bc...fws</p>
          <p className=' bg-gradient-to-r to-[#5E6EFF] from-bluePry bg-clip-text text-transparent'>20.6 %</p>
        </div>
        <div className=' w-full flex justify-between items-center py-1'>
          <p>0bc...fws</p>
          <p className=' bg-gradient-to-r to-[#5E6EFF] from-bluePry bg-clip-text text-transparent'>20.6 %</p>
        </div>
      </div>

    <Image src={'/city.png'} alt="city" width={400} height={200} className="bgImgPart pointer-events-none max-w-none left-0 top-0 absolute object-cover object-top mix-blend-color-dodge"/>
     </div>
  )
}

export default HolderDetails
