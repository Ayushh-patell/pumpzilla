import { bebas, mont } from '@/app/layout'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BasicDetails = ({tokenData}) => {
  return (
    <div className=" detailDiv col-span-2 rounded-3xl bg-darkPry p-4 relative h-72 overflow-hidden flex justify-center items-center gap-3">
        <Image src={`https://ipfs.io/ipfs/${tokenData.properties.meta.image}`} alt='token' width={100} height={120} className=' h-full w-auto object-cover object-center rounded-3xl relative z-10'/>
        <div className={`${mont.className} flex-1 h-full relative z-10`}>
            <h6 className=' font-extrabold text-white text-xl'>{tokenData.name}</h6>
            <p className=' text-transparent bg-gradient-to-r from-[#5E6EFF] to-bluePry bg-clip-text font-bold w-fit'>$ PROMOTION</p>

            <p className=' text-white/30 truncate font-bold py-1'>Created by: <span className={`${bebas.className} text-white`}>{tokenData.deployed_by}</span></p>
            <div className=' w-full flex justify-start items-center gap-2'>
                <p className=' text-white/30 font-bold truncate'>Contract: <span className={`${bebas.className} text-white`}>{tokenData.token_address}</span></p>
                {/* COPY AND LINK BUTTON */}
                <button onClick={()=> navigator.clipboard.writeText(tokenData.token_address)} className=' bg-blackPry rounded-lg p-1 flex justify-center items-center' style={{boxShadow:"4px 4px 5px rgba(0,0,0,0.4)"}}><Image src={'/copy.png'} alt='Copy' width={20} height={20} className=' size-4'/></button>
                <button className=' bg-blackPry rounded-lg p-1 flex justify-center items-center' style={{boxShadow:"4px 4px 5px rgba(0,0,0,0.4)"}}><Image src={'/link.png'} alt='link' width={20} height={20} className=' size-4'/></button>
            </div>

            <p className=' font-bold text-white/30 pt-4 text-xl'>Market Cap</p>
            <p className=' w-fit bg-gradient-to-r from-purplePry to-[#A647E1] bg-clip-text text-transparent font-extrabold text-2xl pb-4'>$ 16.9k</p>

            <div className=' flex justify-center items-center gap-3 pt-1'>
                <Link href={tokenData.properties.meta.external_url}>
                    <button className=' flex justify-center items-center gap-2 bg-gradient-to-r from-[#5E6EFF] to-bluePry rounded-xl p-2 px-4'>
                        <Image src={'/web.png'} alt='website' width={20} height={20} className=' size-5 object-contain object-center'/>
                        <span className={`${bebas.className}`}>WEBSITE</span>
                    </button>
                </Link>
                <Link href={tokenData.properties.meta.social_media.telegram}>
                    <button className=' flex justify-center items-center gap-2 bg-gradient-to-r from-[#5E6EFF] to-bluePry rounded-xl p-2 px-4'>
                        <Image src={'/telegram.png'} alt='website' width={20} height={20} className=' size-5 object-contain object-center'/>
                        <span className={`${bebas.className}`}>TELEGRAM</span>
                    </button>
                </Link>
                <Link href={tokenData.properties.meta.social_media.twitter}>
                    <button className=' flex justify-center items-center gap-2 bg-gradient-to-r from-[#5E6EFF] to-bluePry rounded-xl p-2 px-4'>
                        <Image src={'/twitter.png'} alt='website' width={20} height={20} className=' size-5 object-contain object-center'/>
                        <span className={`${bebas.className}`}>TWITTER</span>
                    </button>
                </Link>
            </div>
        </div>


    <Image src={'/city.png'} alt="city" width={400} height={200} className="bgImgPart pointer-events-none max-w-none left-0 top-0 absolute z-0 object-cover object-top mix-blend-color-dodge"/>

</div>
  )
}

export default BasicDetails
