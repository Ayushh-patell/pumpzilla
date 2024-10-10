import { bebas } from "@/app/layout"
import gsap from "gsap";

const TokenFilter = ({tokenFilters, settokenFilters}) => {

  const changePrimaryFilters = (filter) => {
    let newFilter = {...tokenFilters};
    newFilter.primaryFilter = filter;
    {/* 0.2, 7.9, 15.65, 22.15 */}
    if(filter==="LaunchedT") {
      gsap.to('#FilterBottomBar', {left:'0.2%', width:'7rem'})
    }
    if(filter==="TradingV") {
      gsap.to('#FilterBottomBar', {left:'7.9%', width:'7rem'})
    }
    if(filter==="MarketC") {
      gsap.to('#FilterBottomBar', {left:'15.65%', width:'6rem'})
    }
    if(filter==="24HPI") {
      gsap.to('#FilterBottomBar', {left:'22.15%', width:'8rem'})
    }
    settokenFilters(newFilter);
  }
  const changeUniswapListed = () => {
    let newFilter = {...tokenFilters};
    newFilter.UniswapListed = !newFilter.UniswapListed;
    settokenFilters(newFilter);
  }
  const changeOrder = (filter) => {
    let newFilter = {...tokenFilters};
    newFilter.order = filter;
    settokenFilters(newFilter);
  }
  
  return (
    <div className="  w-full flex justify-between items-center px-4 py-4 border-b-2 border-[#242628] relative">
    <div className={` flex justify-center items-center gap-4 ${bebas.className}`}>
      <button onClick={() => changePrimaryFilters('LaunchedT')} className={` rounded-xl bg-darkPry px-2 py-1 ${tokenFilters.primaryFilter==='LaunchedT'?" text-white":" text-white/25"}`}>LAUNCHED TIME</button>
      <button onClick={() => changePrimaryFilters('TradingV')} className={` rounded-xl bg-darkPry px-2 py-1 ${tokenFilters.primaryFilter==='TradingV'?" text-white":" text-white/25"}`}>TRADING VOLUME</button>
      <button onClick={() => changePrimaryFilters('MarketC')} className={` rounded-xl bg-darkPry px-2 py-1 ${tokenFilters.primaryFilter==='MarketC'?" text-white":" text-white/25"}`}>MARKET CAP</button>
      <button onClick={() => changePrimaryFilters('24HPI')} className={` rounded-xl bg-darkPry px-2 py-1 ${tokenFilters.primaryFilter==='24HPI'?" text-white":" text-white/25"}`}>24H PRICE INCREASE</button>
      <div id="FilterBottomBar" className=" absolute top-full left-[0.25%] w-28 h-[2px] rounded-full bg-[#FFD47E]"/>
    </div>
    <div className=" flex justify-center items-center gap-4 font-beat">
    {/* LISTED ON UNISWAP BUTTON */}
      <button onClick={changeUniswapListed} className='bg-[#2C2D30] rounded-xl flex justify-center items-center gap-2 px-2 py-1'>
        <div className="  rounded-full flex justify-center items-center p-1 border border-white pointer-events-none">
          <div className={` size-2 rounded-full ${tokenFilters.UniswapListed?"bg-gradient-to-b from-bluePry to-[#5E6EFF]":" bg-transparent"}`}/>
        </div>
        <span className=" bg-gradient-to-r from-bluePry to-purplePry bg-clip-text text-transparent">LISTED ON UNISWAP</span>
      </button>
    {/* LISTED ON UNISWAP BUTTON END */}

    {/* ASC & DESC BUTTON */}
    <button onClick={() => changeOrder('asc')} className={` px-2 py-1 rounded-xl min-w-16  ${tokenFilters.order==="asc"?"bg-gradient-to-r from-bluePry to-purplePry text-white":"bg-[#2C2D30] text-white/30"}`}>ASC</button>
    <button onClick={() => changeOrder('desc')} className={` px-2 py-1 rounded-xl min-w-16  ${tokenFilters.order==="desc"?"bg-gradient-to-r from-bluePry to-purplePry text-white":"bg-[#2C2D30] text-white/30"}`}>DESC</button>
    </div>
</div> 
  )
}

export default TokenFilter
