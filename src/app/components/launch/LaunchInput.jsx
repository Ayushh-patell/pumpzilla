import { bebas } from '@/app/layout'
import { useState } from 'react'

const LaunchInput = ({name, font, bgClr, required, type, DebounceChange}) => {
    const [isFocus, setisFocus] = useState(false)
  return (
    <div data-name={`${name}`} className={` w-full  my-2 relative rounded-2xl formInput ${isFocus? 'active':''}`} style={{backgroundColor:`${bgClr}`}}>
    {font==="beat"? 
    <> 
        <input onFocus={() => setisFocus(true)} onBlur={() => setisFocus(false)} onChange={(e) => DebounceChange(name, e.target.value)} required={required} type={type} className="  outline-none w-full relative z-10 rounded-[15px] text-xl p-3 font-beat" style={{backgroundColor:`${bgClr}`}} />
        <span className={` absolute z-20 ${isFocus?" scale-50 top-[1px] text-transparent bg-gradient-to-r":" scale-100 top-3 text-white/15 bg-transparent"} from-[#FF4672] to-[#B872FF] bg-clip-text origin-top-left left-3 text-xl pointer-events-none transition-all duration-300 ease-in-out font-beat`}>{name}{required? <span className=" text-red-600">*</span>:""}</span>
    </>
        :
        <>
        <input onFocus={() => setisFocus(true)} onBlur={() => setisFocus(false)} onChange={(e) => DebounceChange(name, e.target.value)} required={required} type={type} className={` outline-none w-full relative z-10 rounded-[15px] text-xl p-3 ${bebas.className}`} style={{backgroundColor:`${bgClr}`}} />
        <span className={` absolute z-20 ${isFocus?" scale-50 top-[1px] text-transparent bg-gradient-to-r":" scale-100 top-3 text-white/25 bg-transparent"} from-[#FF4672] to-[#B872FF] bg-clip-text origin-top-left left-3 text-xl pointer-events-none transition-all duration-300 ease-in-out ${bebas.className}`}>{name}{required? <span className=" text-red-600">*</span>:""}</span>
        </>
    }

    </div>
  )
}

export default LaunchInput
