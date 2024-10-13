"use client";

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import LeftBGImg from './LeftBGImg';
import RightBGImg from './RightBGImg';
import Image from 'next/image';
import LaunchInput from './LaunchInput';
import LaunchTextArea from './LaunchTextArea';
import { Montserrat } from 'next/font/google';
import { CustomEase } from 'gsap/all';

let timeOut;
const mont = Montserrat({ subsets: ['cyrillic'] });
gsap.registerPlugin(CustomEase);

const LaunchScreen = () => {
  const searchParams = useSearchParams();
  const [formValue, setFormValue] = useState({
    name: "",
    symbol: "",
    description: "",
    website: "",
    telegram: "",
    twitter: "",
    initialBuy: ""
  });

  const changeFormValue = (name, value) => {
    const key =
      name === 'TOKEN NAME' ? 'name' :
      name === 'TOKEN SYMBOL' ? 'symbol' :
      name === 'TOKEN DESCRIPTION' ? 'description' :
      name === 'WEBSITE' ? 'website' :
      name === 'TELEGRAM' ? 'telegram' :
      name === 'TWITTER' ? 'twitter' :
      'initialBuy';
    let newVal = { ...formValue };
    newVal[key] = value;
    setFormValue(newVal);
  };

  const DebounceChange = (key, value) => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      changeFormValue(key, value);
    }, 800);
  };

  const springAni = (e) => {
    gsap.to(e.target, {scale:0.6, duration:0.1});
    gsap.to(e.target, {scale:1, duration:0.5, delay:0.1, ease: CustomEase.create("custom", "M0,0 C0.129,0.352 0.131,0.32 0.19,0.533 0.226,0.664 0.305,1.349 0.378,1.396 0.417,1.421 0.534,0.9 0.6,0.9 0.647,0.9 0.701,1.167 0.76,1.172 0.8,1.174 0.862,0.937 0.903,0.937 0.943,0.936 1,1 1,1 ")});
    
  }

  useEffect(() => {
    if (searchParams.get('launch') === 'true') {
      gsap.set('#LaunchScreen', { pointerEvents: 'all', display: 'flex' });
      gsap.to('#LaunchScreen', { opacity: 1 });
      gsap.to('#HomeScreen', { opacity: 0 });
      gsap.set('#HomeScreen', { pointerEvents: 'none', delay: 0.3, display: 'none' });
    } else {
      gsap.set('#HomeScreen', { pointerEvents: 'all', display: 'block' });
      gsap.to('#HomeScreen', { opacity: 1 });
      gsap.to('#LaunchScreen', { opacity: 0 });
      gsap.set('#LaunchScreen', { pointerEvents: 'none', delay: 0.2, display: 'none' });
    }
  }, [searchParams]);

  return (
    <div id="LaunchScreen" className="absolute z-10 pt-20 pl-16 top-0 left-0 hidden pointer-events-none opacity-0 w-full h-dvh">
      <LeftBGImg />
      <RightBGImg />

      <div className="flex relative z-10 p-4 w-full h-full gap-4 justify-between items-center">
        <div className="w-2/5 h-full flex pl-10 justify-start items-center">
          <div className="rounded-3xl overflow-hidden relative w-4/5 h-3/4 bg-blackPry">
            <div className="flex justify-center items-center gap-4 flex-col w-full h-full p-8 relative z-10">
              <div className="w-1/2 aspect-square rounded-full p-3 flex justify-center items-center relative bg-gradient-to-bl from-[#5E6EFF] to-[#B910BC]">
                <Image src={'/profile.png'} alt="profile" width={100} height={100} className="w-full h-full object-contain object-center" />
                <button className="absolute bottom-0 right-0 flex justify-center items-center p-2 rounded-2xl border-4 border-blackPry bg-gradient-to-b from-bluePry to-[#5E6EFF]">
                  <Image src={'/pencil.png'} alt="edit" width={40} height={40} className="size-7" />
                </button>
              </div>
              <LaunchInput DebounceChange={DebounceChange} bgClr={'#1B1C1E'} font={'beat'} name={'TOKEN NAME'} required={true} type={'text'} />
              <LaunchInput DebounceChange={DebounceChange} bgClr={'#1B1C1E'} font={'beat'} name={'TOKEN SYMBOL'} required={true} type={'text'} />
            </div>
            <Image src={"/form bg.png"} alt="bg" aria-hidden width={200} height={300} className="pointer-events-none w-full h-full absolute top-0 left-0 z-0 object-cover object-center mix-blend-color-dodge" />
          </div>
        </div>
        <div className="w-1/2 h-full flex justify-end items-center px-14 py-10">
          <div className="w-full h-full">
            <h4 className={`${mont.className} font-black text-white text-4xl w-full text-center`}>LAUNCH YOUR TOKEN !</h4>
            <p className={`bg-gradient-to-r from-[#4EA5FF] to-[#B972FF] bg-clip-text text-transparent ${mont.className} font-medium py-2 text-center`}>No presale, No Team Allocation, Lower Gas</p>
            <LaunchTextArea DebounceChange={DebounceChange} bgClr={'#111111'} font={'bebas'} name={'TOKEN DESCRIPTION'} required={false} type={'text'} />
            <LaunchInput DebounceChange={DebounceChange} bgClr={'#111111'} font={'bebas'} name={'WEBSITE'} required={false} type={'text'} />
            <div className="flex w-full justify-center items-center gap-2">
              <LaunchInput DebounceChange={DebounceChange} bgClr={'#111111'} font={'bebas'} name={'TELEGRAM'} required={false} type={'text'} />
              <LaunchInput DebounceChange={DebounceChange} bgClr={'#111111'} font={'bebas'} name={'TWITTER'} required={false} type={'text'} />
            </div>
            <LaunchInput DebounceChange={DebounceChange} bgClr={'#111111'} font={'bebas'} name={'INITIAL BUY'} required={false} type={'text'} />
            <div className="w-full flex justify-center my-3 items-center">
              <button onClick={springAni} className="font-cheese py-2 px-10 text-4xl mx-auto rounded-xl text-white bg-gradient-to-r from-[#FF4672] to-[#B972FF]" style={{ boxShadow: '5px 5px 10px rgba(0,0,0,0.3)' }}>LAUNCH</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export function LaunchPageWrapper() {
  return (
    <Suspense>
      <LaunchScreen />
    </Suspense>
  );
}
