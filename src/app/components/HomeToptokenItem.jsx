'use client';

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { bebas, mont } from '../layout'
import { useRouter } from 'next/navigation'

const HomeToptokenItem = ({data}) => {
  const router = useRouter();
  return (
<Link className=' h-full' href={`/token/${data?.token_address}`}>
<div className=" h-full bg-darkPry rounded-2xl relative overflow-hidden">
{/* MAIN IMAGE */}
    <div className=" w-full px-2 pt-3 relative z-10 overflow-hidden">
    <Image src={`https://ipfs.io/ipfs/${data?.properties.meta.image}`} alt="token" width={200} height={300} className=" w-full rounded-t-2xl"/>
    </div>

{/* PERCENTAGE BAR */}
    <div className=" w-full mt-1 mb-1 px-2 relative z-10">
      <div className=" flex justify-between items-center gap-2">
        <div className=" flex-shrink flex-1 h-1 rounded-full bg-white/25 relative">
          <div className=" w-[30%] h-full rounded-full absolute top-0 left-0 bg-gradient-to-r from-[#67FFDA] to-[#B872FF]"></div>
        </div>
        <span className={` flex-shrink-0 ${mont.className} text-[10px] font-extrabold text-white`}>30.0%</span>
      </div>
    </div>

{/* NAME */}
<h3 className={`${mont.className} font-extrabold text-white relative z-10 px-2 text-sm truncate`}>{data?.name}</h3>
{/* TOKEN BY */}
<p className={`${bebas.className} ${((data?.current_price - data?.yesterday_price)*100)/data?.yesterday_price < 0?" text-[#FF4A6B]":" text-bluePry"} text-xs relative z-10 px-2`}>CREATED BY {data?.deployed_by.slice(0,6)}...{data?.deployed_by.slice(data?.deployed_by.length-4, data?.deployed_by.length)}</p>

{/* SOCIALS */}
<div className=" w-1/2 mt-3 px-3 pl-4 py-1 flex justify-between items-center gap-1 relative z-10">
  <p onClick={()=> router.push(data?.properties.meta.social_media.twitter)}>
    <Image src={'/twitter.png'} alt="twitter" width={50} height={50} className=" size-3 object-contain object-center"/>
  </p>
  <p onClick={()=> router.push(data?.properties.meta.external_url)}>
    <Image src={'/web.png'} alt="web" width={50} height={50} className=" size-3 object-contain object-center"/>
  </p>
  <p onClick={()=> router.push(data?.properties.meta.social_media.telegram)}>
    <Image src={'/telegram.png'} alt="telegram" width={50} height={50} className=" size-3 object-contain object-center"/>
  </p>
</div>

{/* MARKET CAP */}
<div className={` text-white absolute z-20 w-fit whitespace-nowrap bottom-[2px] right-[2px] bg-gradient-to-l from-[#FF4A6B] to-[#E30958] rounded-tl-2xl rounded-br-[15px] px-3 py-2 text-[12px] ${bebas.className}`}>
  MARKET CAP 19K
  <div style={{maskImage:"linear-gradient(90deg, transparent, black)"}} className=" border-2 border-[#A0D2FF] w-full h-full absolute top-0 left-0 z-0 rounded-tl-2xl rounded-br-[15px] bg-transparent"></div>
</div>

{/* TOP PIN */}
<Image src={'/crown.png'} alt=' crown' width={20} height={20} className=' absolute top-2 left-2 size-7 z-20'/>



      {/* BORDER */}
      <div className=" pointer-events-none absolute z-0 top-0 left-0 w-full h-full bg-gradient-to-b from-[#FFB72A] from-5% via-[#FFB72A] via-50% to-[#FFB72A] to-95% p-[2px]">
        <div className=" w-full h-full bg-darkPry rounded-[15px]"></div>
      </div>
    </div>
</Link>
  )
}

export default HomeToptokenItem
