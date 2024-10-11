import { bebas, mont } from '@/app/layout'
import Image from 'next/image'
import React from 'react'

const TokenGridItem = ({data}) => {
  // console.log(data, data.properties.image);
  return (
    <div className=" bg-darkPry rounded-3xl relative overflow-hidden">
{/* MAIN IMAGE */}
    <div className=" w-full px-4 pt-6  relative z-10 overflow-hidden">
    <Image src={`https://ipfs.io/ipfs/${data.properties.meta.image}`} alt="token" width={200} height={300} className=" w-full rounded-t-3xl"/>
    </div>

{/* PERCENTAGE BAR */}
    <div className=" w-full mt-4 mb-1 px-4 relative z-10">
      <div className=" flex justify-between items-center gap-3">
        <div className=" flex-shrink flex-1 h-2 rounded-full bg-white/25 relative">
          <div className=" w-[30%] h-full rounded-full absolute top-0 left-0 bg-gradient-to-r from-[#67FFDA] to-[#B872FF]"></div>
        </div>
        <span className={` flex-shrink-0 ${mont.className} text-xs font-extrabold text-white`}>30.0%</span>
      </div>
    </div>

{/* NAME */}
<h3 className={`${mont.className} font-extrabold text-white relative z-10 px-4 text-lg truncate`}>{data.name}</h3>
{/* TOKEN BY */}
<p className={`${bebas.className} text-bluePry relative z-10 px-4`}>CREATED BY {data.deployed_by.slice(0,6)}...{data.deployed_by.slice(data.deployed_by.length-4, data.deployed_by.length)}</p>
{/* DESCRIPTION */}
<p className={`${mont.className} text-[10px] text-white/20 relative z-10 px-4 font-bold my-2`}>{data.properties.meta.description}</p>
{/* SOCIALS */}
<div className=" w-1/2 mt-5 px-4 py-2 flex justify-between items-center gap-1 relative z-10">
  <a href={data.properties.meta.social_media.twitter} target="_blank" rel="noopener noreferrer">
    <Image src={'/twitter.png'} alt="twitter" width={50} height={50} className=" size-6 object-contain object-center"/>
  </a>
  <a href={data.properties.meta.external_url} target="_blank" rel="noopener noreferrer">
    <Image src={'/web.png'} alt="web" width={50} height={50} className=" size-6 object-contain object-center"/>
  </a>
  <a href={data.properties.meta.social_media.telegram} target="_blank" rel="noopener noreferrer">
    <Image src={'/telegram.png'} alt="telegram" width={50} height={50} className=" size-6 object-contain object-center"/>
  </a>
</div>

{/* MARKET CAP */}
<div className={` text-white absolute z-20 w-1/2 bottom-0 right-0 bg-gradient-to-l from-bluePry to-[#5E6EFF] rounded-tl-3xl px-8 py-3 text-lg ${bebas.className}`}>
  MARKET CAP 19K
  <div style={{maskImage:"linear-gradient(90deg, transparent, black)"}} className=" border-2 border-[#A0D2FF] w-full h-full absolute top-0 left-0 z-0 rounded-tl-3xl rounded-br-3xl bg-transparent"></div>
</div>
{/* border: 2.64px solid;

border-image-source: linear-gradient(101.44deg, rgba(255, 255, 255, 0) 35.73%, #A0D2FF 100%);

 */}
{/* TOP PERCENTAGE */}
<div className={` text-white absolute z-20 top-0 left-0 bg-gradient-to-l from-bluePry to-[#5E6EFF] rounded-br-3xl px-8 py-1 text-lg ${bebas.className}`} style={{boxShadow:'5px 5px 10px rgba(0,0,0,0.3)'}}>
  +9%
</div>

      {/* BORDER */}
      <div className=" pointer-events-none absolute z-0 top-0 left-0 w-full h-full bg-gradient-to-bl from-[#cfe8ff66] from-15% to-[#ffffff00] to-30% p-[2px]">
        <div className=" w-full h-full bg-darkPry rounded-[23px]"></div>
      </div>
    </div>
  )
}




export default TokenGridItem
