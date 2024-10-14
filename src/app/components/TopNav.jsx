'use client';

import gsap from 'gsap'
import { CustomEase } from 'gsap/all'
import Image from 'next/image'
import React from 'react'
import { mont } from '../layout';

const TopNav = () => {
    gsap.registerPlugin(CustomEase)

    const springAni = (e) => {
      gsap.to(e.target, {scale:0.6, duration:0.1});
      gsap.to(e.target, {scale:1, duration:0.5, delay:0.1, ease: CustomEase.create("custom", "M0,0 C0.129,0.352 0.131,0.32 0.19,0.533 0.226,0.664 0.305,1.349 0.378,1.396 0.417,1.421 0.534,0.9 0.6,0.9 0.647,0.9 0.701,1.167 0.76,1.172 0.8,1.174 0.862,0.937 0.903,0.937 0.943,0.936 1,1 1,1 ")});
      
    }
  return (
    <header className=' fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 pl-5 py-3 bg-darkPry' style={{boxShadow:"70px 6px 10px rgba(0,0,0,0.4)"}}>
    {/* LOGO */}
      <div className=" flex justify-center items-end">
        <Image src={'/Logo.png'} alt="Logo" className=" h-14 w-auto" width={100} height={100}/>
        <p className='font-[family-name:var(--font-beat-word)] bg-gradient-to-b from-purplePry to-bluePry text-transparent bg-clip-text text-xl'>UMPZILLA</p>
      </div>
      {/* LOGO END */}

      {/* SEARCH */}
      <div className=" w-[30%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
      <Image src={"/search.svg"} alt="search icon" width={40} height={40} className=" size-6 absolute z-10 cursor-pointer pointer-events-none top-1/2 left-3 -translate-y-1/2"/>
        <input type="text" placeholder="Search for tokens" className={` w-full bg-blackPry rounded-xl text-white placeholder:text-white/25 outline-none focus:outline-bluePry px-12 py-2 font-bold ${mont.className}`}/>
      </div>
      {/* SEARCH END */}

      {/* CONNECT BTN */}
      <button onClick={springAni} className=" font-cheese bg-gradient-to-r from-bluePry to-purplePry rounded-xl text-lg px-4 py-2 text-white">CONNECT WALLET</button>
    </header>
  )
}

export default TopNav
