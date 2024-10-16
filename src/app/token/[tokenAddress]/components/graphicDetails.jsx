import Image from 'next/image'
import React from 'react'
import TopHeading from './TopHeading'

const GraphicDetails = () => {
  return (
    <div className="detailDiv col-span-3 rounded-2xl bg-darkPry p-4 relative overflow-hidden h-[80dvh]">
      <TopHeading text={'GRAPHICAL VIEW'}/>
    <Image src={'/city.png'} alt="city" width={400} height={200} className="bgImgPart pointer-events-none max-w-none left-0 top-0 absolute object-cover object-top mix-blend-color-dodge"/>

</div>
  )
}

export default GraphicDetails
