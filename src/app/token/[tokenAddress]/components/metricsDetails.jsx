import Image from 'next/image'
import React from 'react'
import TopHeading from './TopHeading'
import { bebas } from '@/app/layout'

const MetricsDetails = ({tokenData}) => {
  
  const timeAgo = (timestamp) => {
    const now = Date.now();
    const diffInMiliSeconds = now - new Date(timestamp);
  
    const minutes = Math.floor(diffInMiliSeconds / 600);
    const hours = Math.floor(diffInMiliSeconds / 36000);
    
  
    if (minutes < 60) {
      return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
    } else if (hours < 24) {
      return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
    } else {
      
      const date = new Date(timestamp);
      return date.toLocaleDateString();
    }
  }
  
  return (
    <div className="detailDiv rounded-3xl bg-darkPry p-4 relative overflow-hidden h-72 pt-14">
    <TopHeading text={'METRICS'}/>
    <div className=' flex flex-col justify-between items-center w-full h-full text-lg'>
      <div className={` w-full flex justify-between items-center py-2 ${bebas.className} text-white`}>
        <p>24H</p>
        <p className=' bg-gradient-to-r to-[#5E6EFF] from-bluePry bg-clip-text text-transparent '>
          {
          isNaN(((tokenData.current_price - tokenData.yesterday_price)*100)/tokenData.yesterday_price)? 0
          :
          (((tokenData.current_price - tokenData.yesterday_price)*100)/tokenData.yesterday_price).toFixed(2)
          }%
        </p>
      </div>
      <div className={` w-full flex justify-between items-center py-2 ${bebas.className} text-white`}>
        <p>PRICE</p>
        <p className=' bg-gradient-to-r to-[#5E6EFF] from-bluePry bg-clip-text text-transparent '>0.000013 ETH</p>
      </div>
      <div className={` w-full flex justify-between items-center py-2 ${bebas.className} text-white`}>
        <p>VIRTUAL LIQUIDITY</p>
        <p className=' bg-gradient-to-r to-[#5E6EFF] from-bluePry bg-clip-text text-transparent '>$ 11.4K</p>
      </div>
      <div className={` w-full flex justify-between items-center py-2 ${bebas.className} text-white`}>
        <p>24H VOLUME</p>
        <p className=' bg-gradient-to-r to-[#5E6EFF] from-bluePry bg-clip-text text-transparent '>961.29 ETH</p>
      </div>
      <div className={` w-full flex justify-between items-center py-2 ${bebas.className} text-white`}>
        <p>TOKEN CREATED</p>
        <p className=' bg-gradient-to-r to-[#5E6EFF] from-bluePry bg-clip-text text-transparent '>{timeAgo(tokenData.properties.meta.launchTime)}</p>
      </div>
    </div>

    <Image src={'/city.png'} alt="city" width={400} height={200} className="bgImgPart pointer-events-none max-w-none left-0 top-0 absolute object-cover object-top mix-blend-color-dodge"/>

</div>
  )
}

export default MetricsDetails
