'use client';

import gsap from 'gsap';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'
import { useState, useEffect } from 'react';
import { Suspense } from 'react';

const HomeNav = () => {
    const router = useRouter();
    const [currNav, setcurrNav] = useState(0);

    const searchParams = useSearchParams();

    // UPDATE THE NAV STATE NECCESSARY WHEN LINK IS SHARED
    useEffect(() => {
      if (searchParams.get('launch') === "true") {
        setcurrNav(1)
      }
      else {
        setcurrNav(0)
      }
    
      return () => {
        setcurrNav(0)
      }
    }, [searchParams])

    // MOVE THE BAR WHEN NAV IS CHANGED
    useEffect(() => {
        let topPercent = currNav===0?0:28
        gsap.to('#navMovingBar', {top:`${topPercent}%`});
    },[currNav])

    return (
    <nav className=" flex justify-center flex-col items-center gap-6 w-full relative">
    <div onClick={()=>{setcurrNav(0);router.push('/')}} className={` h-8 w-full flex justify-center items-center relative`}>
        <Image src={'/Home.png'} width={30} height={30} className={` size-5 ${currNav===1?" opacity-100":" opacity-0"} transition-all duration-200 `} alt="Home"/>
        <Image src={'/Home-active.png'} width={30} height={30} className={` size-5 absolute z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ${currNav===0?" opacity-100":" opacity-0"} transition-all duration-200 `} alt="Home"/>
    </div>
    <div onClick={()=>{setcurrNav(1);router.push('/?launch=true')}} className={` h-8 w-full flex justify-center items-center relative`}>
        <Image src={'/Launch.png'} width={30} height={30} className={` size-5 ${currNav===0?" opacity-100":" opacity-0"} transition-all duration-200  `} alt="Launch"/>
        <Image src={'/Launch-active.png'} width={30} height={30} className={` size-5 absolute z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ${currNav===1?" opacity-100":" opacity-0"} transition-all duration-200 `} alt="Launch"/>
    </div>
    <div className={` h-8 w-full flex justify-center items-center`}>
        <Image src={'/twitter.png'} width={30} height={30} className=" size-5" alt="Twitter"/>
    </div>
    <div className={` h-8 w-full flex justify-center items-center`}>
        <Image src={'/telegram.png'} width={30} height={30} className=" size-5" alt="Telegram"/>
    </div>


    {/* MOVING BAR */}
    <div id="navMovingBar" className=" absolute top-[0%] right-0 w-1 h-8 bg-gradient-to-b from-bluePry to-[#5E6EFF]"></div>
  </nav>
  )
}

export function HomeNavWrapper () {
    return (
        <Suspense>
            <HomeNav/>
        </Suspense>
    )
}