import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import TopHeading from '../TopHeading'
import BottomCommentsSection from './bottomCommentsSection';
import BottomHistorySection from './bottomHistorySection';
import gsap from 'gsap';

const BottomDetails = () => {
    const [commentsSelected, setcommentsSelected] = useState(true);

    useEffect(() => {
      if(commentsSelected) {
        gsap.to('#bottomCommentSection', {translateX:'0%'});
        gsap.to('#bottomHistorySection', {translateX:'0%'});
      }
      else {
        gsap.to('#bottomCommentSection', {translateX:'-100%'});
        gsap.to('#bottomHistorySection', {translateX:'-100%'});
      }
    },[commentsSelected])
  return (
    <div className=" detailDiv rounded-3xl bg-darkPry p-4 px-8 mt-4 relative w-full h-[550px] overflow-hidden">
        <button onClick={() => setcommentsSelected(true)} className=' absolute top-0 left-0'>
        <TopHeading text={'COMMENTS'} active={commentsSelected} isLeft={true}/>
        </button>
        <button onClick={() => setcommentsSelected(false)} className=' absolute top-0 right-0'>
      <TopHeading text={'TRADING HISTORY'} active={!commentsSelected} isLeft={false}/>
        </button>
        <div className=' relative z-10 w-full h-full pt-14 pb-4 flex justify-start items-center overflow-hidden'>
            <BottomCommentsSection/>
            <BottomHistorySection/>
        </div>
            

      <Image src={'/city.png'} alt="city" width={400} height={200} className="bgImgPart pointer-events-none max-w-none left-0 top-0 absolute z-0 object-cover object-top mix-blend-color-dodge"/>
    </div>
  )
}

export default BottomDetails
