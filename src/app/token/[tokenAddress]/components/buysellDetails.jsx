import { bebas, mont } from '@/app/layout';
import Image from 'next/image'
import React, { useState } from 'react'

const BuySellDetails = ({tokenData}) => {
  const [isBuy, setisBuy] = useState(true);
  return (
    <div className="detailDiv w-full rounded-2xl bg-darkPry p-4 relative overflow-hidden h-[55%]">
    {/* BUY/SELL BUTTON */}
       <div className=' flex justify-center items-center gap-4 relative z-10'>
        <button onClick={() => setisBuy(true)} className={`${isBuy? " text-white bg-gradient-to-r from-bluePry to-[#5E6EFF]":" text-white/30 bg-[#2C2D30]"} rounded-xl ${mont.className} font-extrabold py-2 px-4 w-1/2`} style={{boxShadow:"4px 4px 10px rgba(0,0,0,0.4)"}}>BUY</button>
        <button onClick={() => setisBuy(false)} className={`${!isBuy? " text-white bg-gradient-to-r from-bluePry to-[#5E6EFF]":" text-white/30 bg-[#2C2D30]"} rounded-xl ${mont.className} font-extrabold py-2 px-4 w-1/2`} style={{boxShadow:"4px 4px 10px rgba(0,0,0,0.4)"}}>SELL</button>
       </div> 
       {/* SETTING */}
       <div className=' flex justify-end items-center py-3'>
        <button><Image src={'/settings.png'} alt='setting' width={20} height={20} className=' size-4 object-contain object-center'/></button>
       </div>
      {/* AMOUNT INPUT */}
       <div className=' w-full relative mb-2 z-10' style={{boxShadow:"5px 5px 15px rgba(0,0,0,0.4)"}}>
        <input type="text" placeholder='ENTER AMOUNT' className={`${bebas.className} text-white w-full p-3 pr-8 rounded-xl relative z-0 bg-blackPry outline-none`} />
        <Image src={'/ethereum.png'} alt='ETH' width={30} height={30} className={` ${!isBuy && " hidden"} size-7 rounded-full absolute z-10 pointer-events-none top-1/2 -translate-y-1/2 right-3`}/>
        <Image src={`https://ipfs.io/ipfs/${tokenData.properties.meta.image}`} alt='ETH' width={30} height={30} className={` ${isBuy && " hidden"} size-7 rounded-full absolute z-10 pointer-events-none top-1/2 -translate-y-1/2 right-3`}/>
       </div>
      {/* BONDING CURVE BAR */}
      <div className=' w-full py-3 relative z-10'>
        <div className=' w-full relative h-2 rounded-full bg-white/10'>
          <div aria-hidden className=' pointer-events-none absolute top-0 left-0 h-full w-3/4 bg-gradient-to-r from-[#B872FF] to-[#5E6EFF] rounded-full'/>
        </div>
        <p className=' flex justify-between items-center'>
          <span className={` ${bebas.className} text-white`}>BONDING CURVE PROGRESS</span>
          <span className={` bg-gradient-to-r from-[#BB72FF] to-[#5E6EFF] bg-clip-text text-transparent ${mont.className} font-bold`}>75 %</span>
        </p>
      </div>
      {/* INFO */}
      <div className={` w-full rounded-3xl p-4 bg-blackPry ${bebas.className} relative z-10 text-center`}>
      <p>There are <span>676,991,162.93</span> PROMOTION tokens and <span>4,546.3</span> ETH still available in the bonding curve for sale.</p>
      <p> When the <span>Market cap</span> reaches <span>$77,296.81</span>, all the liquidity from the bonding curve will be moved to UNISWAP and <span>locked</span>. <span>The process speeds up as the price increases</span>.</p>
      </div>
      {/* FINAL BUTTON */}
    <div className=' w-full flex justify-center items-center py-2'>
    <button className=' px-5 py-1 text-lg bg-gradient-to-r from-[#FF4672] to-[#B972FF] rounded-xl text-white font-cheese'>{isBuy?"BUY":"SELL"}</button>
    </div> 
    <Image src={'/city.png'} alt="city" width={400} height={200} className="bgImgPart pointer-events-none max-w-none left-0 top-0 absolute z-0 object-cover object-top mix-blend-color-dodge"/>
     </div>
  )
}

export default BuySellDetails
