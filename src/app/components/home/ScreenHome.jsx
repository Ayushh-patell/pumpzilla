'use client';

// import { useState } from "react/cjs/react.development";
import { useState } from "react"
import TokenFilter from "./TokenFilter"
import TokenGrid from "./TokenGrid"

const ScreenHome = ({tokens}) => {

  const [tokenFilters, settokenFilters] = useState({
    primaryFilter:'LaunchedT',
    UniswapListed:true,
    order:'asc'
  })
  return (
    <div className=" w-full">
      <TokenFilter tokenFilters={tokenFilters} settokenFilters={settokenFilters}/>
      <TokenGrid tokens={tokens}/>
    </div>
  )
}

export default ScreenHome
