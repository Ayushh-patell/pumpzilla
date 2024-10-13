import { bebas, mont } from '@/app/layout';
import gsap from 'gsap';
import { CustomEase } from 'gsap/all';
import Image from 'next/image'
import React, { useState } from 'react'

const BuySellDetails = ({tokenData}) => {
  const [isBuy, setisBuy] = useState(true);
  const [slippage, setslippage] = useState(null);
  gsap.registerPlugin(CustomEase)

  const openModal = () => {
    gsap.set('body', {overflow:'hidden'});
    gsap.set('#SettingsModalWrapper', {display:'flex', pointerEvents:"all"});
    gsap.to('#SettingsModalWrapper', {opacity:1, duration:0.5});
    gsap.to('#SettingsModal', {scale:1, duration:1, ease: CustomEase.create("custom", "M0,0 C0.129,0.352 0.131,0.32 0.19,0.533 0.226,0.664 0.305,1.349 0.378,1.396 0.417,1.421 0.534,0.963 0.6,0.963 0.647,0.963 0.701,1.042 0.76,1.047 0.8,1.049 0.862,0.98 0.903,0.98 0.943,0.979 1,1 1,1 ")})
    document.getElementById('closeModalBtn').focus();
  }
  // }M0,0 C0.157,0.335 0.158,0.313 0.231,0.521 0.275,0.647 0.379,1.21 0.452,1.257 0.491,1.282 0.554,0.922 0.658,0.978 0.801,1.054 0.841,0.989 0.903,0.989 0.944,0.989 1,1 1,1 
  const closeModal = () => {
    gsap.set('body', {overflow:'auto'});
    gsap.to('#SettingsModalWrapper', {opacity:0, duration:0.5});
    gsap.to('#SettingsModal', {scale:0.5, duration:0.5, ease:"power2.out"})
    gsap.set('#SettingsModalWrapper', {display:'none', pointerEvents:"none", delay:0.6});
    document.getElementById('openModalBtn').focus();
  }
  const changeSlippage = (e) => {
    
    if(isNaN(parseInt(e.target.value))) {
      console.log(e.target.value);
      e.target.value = ""
    }
    setslippage(e.target.value)
  }
  return (
<>
<div className="detailDiv w-full rounded-2xl bg-darkPry p-4 relative overflow-hidden h-[55%]">
    {/* BUY/SELL BUTTON */}
       <div className=' flex justify-center items-center gap-4 relative z-10'>
        <button onClick={() => setisBuy(true)} className={`${isBuy? " text-white bg-gradient-to-r from-bluePry to-[#5E6EFF]":" text-white/30 bg-[#2C2D30]"} rounded-xl ${mont.className} font-extrabold py-2 px-4 w-1/2`} style={{boxShadow:"4px 4px 10px rgba(0,0,0,0.4)"}}>BUY</button>
        <button onClick={() => setisBuy(false)} className={`${!isBuy? " text-white bg-gradient-to-r from-bluePry to-[#5E6EFF]":" text-white/30 bg-[#2C2D30]"} rounded-xl ${mont.className} font-extrabold py-2 px-4 w-1/2`} style={{boxShadow:"4px 4px 10px rgba(0,0,0,0.4)"}}>SELL</button>
       </div> 
       {/* SETTING */}
       <div className=' flex justify-end items-center py-3'>
        <button id='openModalBtn' onClick={openModal}><Image src={'/settings.png'} alt='setting' width={20} height={20} className=' cursor-pointer size-4 object-contain object-center'/></button>
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

     {/* SETTINGS MODAL POPUP */}
     <div id='SettingsModalWrapper' className=' hidden pointer-events-none font-beat fixed z-40 top-0 left-0 w-screen h-dvh justify-center items-center bg-black/70'>
      <div id='SettingsModal' className=' scale-50 w-3/4 rounded-3xl border-2 border-black bg-[#24262B] relative p-4'>
        <div className=' relative w-full flex justify-between items-center'>
          <p className=' relative z-10 bg-gradient-to-r from-[#5E6EFF] to-bluePry bg-clip-text text-transparent font-beat text-3xl'>SET MAX SLIPPAGE %</p>
          <p id='slippagetextBorder' className=' absolute z-0 top-1/2 -translate-y-1/2 left-0 bg-gradient-to-r from-[#5E6EFF] to-bluePry bg-clip-text text-transparent font-beat text-3xl pointer-events-none'>SET MAX SLIPPAGE %</p>

          <button id='closeModalBtn' onClick={closeModal} className=' text-white flex justify-center items-center'><Image src={'/close.png'} alt='close' width={20} height={20} className=' size-6'/></button>
        </div>

        <div className=' w-full grid grid-cols-4 gap-4 text-2xl mt-3 relative z-10'>
          <button onClick={() => setslippage("2")} className={` ${slippage==='2'?" text-white ":" text-white/20"} relative flex justify-center items-center px-4 py-2 rounded-2xl overflow-hidden bg-[#161616]`} style={{boxShadow:"5px 5px 10px rgba(0,0,0,0.4)"}}>
            <div className={` pointer-events-none absolute z-0 top-0 left-0 w-full h-full bg-gradient-to-b from-bluePry to-[#5E6EFF] ${slippage==="2"?" opacity-100":" opacity-0"} transition-all duration-200 ease-in-out`}></div>
            <p className=' relative z-10'>2%</p>
          </button>
          <button onClick={() => setslippage('10')} className={` ${slippage==='10'?" text-white ":" text-white/20"} relative flex justify-center items-center px-4 py-2 rounded-2xl overflow-hidden bg-[#161616]`} style={{boxShadow:"5px 5px 10px rgba(0,0,0,0.4)"}}>
            <div className={` pointer-events-none absolute z-0 top-0 left-0 w-full h-full bg-gradient-to-b from-bluePry to-[#5E6EFF] ${slippage==="10"?" opacity-100":" opacity-0"} transition-all duration-200 ease-in-out`}></div>
            <p className=' relative z-10'>10%</p>
          </button>
          <button onClick={() => setslippage('20')} className={` ${slippage==='20'?" text-white ":" text-white/20"} relative flex justify-center items-center px-4 py-2 rounded-2xl overflow-hidden bg-[#161616]`} style={{boxShadow:"5px 5px 10px rgba(0,0,0,0.4)"}}>
            <div className={` pointer-events-none absolute z-0 top-0 left-0 w-full h-full bg-gradient-to-b from-bluePry to-[#5E6EFF] ${slippage==="20"?" opacity-100":" opacity-0"} transition-all duration-200 ease-in-out`}></div>
            <p className=' relative z-10'>20%</p>
          </button>
          <input onChange={changeSlippage} type="text" placeholder='ENTER AMOUNT' value={slippage} className=' w-full bg-[#161616] rounded-2xl px-4 py-1 placeholder:text-white/20 text-white' />
        </div>

        <div className={`${(slippage>=10)?" opacity-100":" opacity-0"} transition-all duration-150 w-full p-4`}>
          <p className={`${bebas.className} text-[#FF2F61] w-full text-center`}>Caution: Slippage above 10% may result in significant deviations in the transaction price. Please proceed with caution.</p>
        </div>

      <div className=' w-full flex justify-center items-center'>
        <button onClick={closeModal} className=' w-60 rounded-2xl bg-gradient-to-r from-[#E309CE] to-bluePry text-white text-2xl py-2' style={{boxShadow:"10px 10px 10px rgba(0,0,0,0.4)"}}>SAVE</button>
      </div>


        {/* BACKGROUND IMG */}
        <Image src={'/city.png'} alt='city' width={400} height={200} className=' absolute pointer-events-none z-0 top-0 w-full h-full left-0 object-cover object-center mix-blend-color-dodge'/>
      </div>
     </div>
</>
  )
}

export default BuySellDetails