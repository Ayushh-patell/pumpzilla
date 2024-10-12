'use client';

import gsap from 'gsap';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'
import { useState, useEffect } from 'react';
import { Suspense } from 'react';

const HomeNav = () => {
    const router = useRouter();
    const [currNav, setcurrNav] = useState(0);

    const searchParams = useSearchParams();
    const pathname = usePathname();

    // UPDATE THE NAV STATE NECCESSARY WHEN LINK IS SHARED
    useEffect(() => {
      if (searchParams.get('launch') === "true" && pathname==="/") {
        setcurrNav(1)
        gsap.to('#navMovingBar' ,{opacity:1});
      }
      else if (pathname==="/") {
        setcurrNav(0)
        gsap.to('#navMovingBar' ,{opacity:1});
      }
      else {
        gsap.to('#navMovingBar' ,{opacity:0});
        setcurrNav(2)
      }

    }, [searchParams, pathname])

    // MOVE THE BAR WHEN NAV IS CHANGED
    useEffect(() => {
      if(currNav!==2 && pathname==="/") {
        
        let topPercent = currNav===0?0:28;
        gsap.to('#navMovingBar', {top:`${topPercent}%`, opacity:1});
      }
    },[currNav, pathname])

    return (
    <nav className=" flex justify-center flex-col items-center gap-6 w-full relative">
    <div onClick={()=>{setcurrNav(0);router.push('/')}} className={` cursor-pointer h-8 w-full flex justify-center items-center relative`}>
        <Image src={'/Home.png'} width={30} height={30} className={` size-5 ${currNav===1 || currNav===2?" opacity-100":" opacity-0"} transition-all duration-200 `} alt="Home"/>
        <Image src={'/home-active.png'} width={30} height={30} className={` size-5 absolute z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ${currNav===0?" opacity-100":" opacity-0"} transition-all duration-200 `} alt="Home"/>
    </div>
    <div onClick={()=>{setcurrNav(1);router.push('/?launch=true')}} className={` cursor-pointer h-8 w-full flex justify-center items-center relative`}>
        <Image src={'/Launch.png'} width={30} height={30} className={` size-5 ${currNav===0 || currNav===2?" opacity-100":" opacity-0"} transition-all duration-200  `} alt="Launch"/>
        <Image src={'/launch-active.png'} width={30} height={30} className={` size-5 absolute z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ${currNav===1?" opacity-100":" opacity-0"} transition-all duration-200 `} alt="Launch"/>
    </div>
    <div className={` cursor-pointer h-8 w-full flex justify-center items-center`}>
        <Image src={'/twitter.png'} width={30} height={30} className=" size-5" alt="Twitter"/>
    </div>
    <div className={` cursor-pointer h-8 w-full flex justify-center items-center`}>
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