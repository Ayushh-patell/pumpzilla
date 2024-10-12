'use client';

// import { useState } from "react/cjs/react.development";
import { useEffect, useState } from "react"
import TokenFilter from "./TokenFilter"
import TokenGrid from "./TokenGrid"

const ScreenHome = ({tokens, prices}) => {

  const [tokenFilters, settokenFilters] = useState({
    primaryFilter:'LaunchedT',
    UniswapListed:true,
    order:'asc'
  })
  const [filteredTokens, setfilteredTokens] = useState([]);


  // INITIALLY COMBINE THE TOKENS AND PRICES ARRAY
  useEffect(() => {
    let newtokenArr = tokens.map((tokenData) =>
      {
        tokenData.current_price = 0;
        tokenData.yesterday_price = 0;
        let idx = prices.map(obj => obj.token_address).indexOf(tokenData.token_address)

        if(idx !== -1) {
          tokenData.current_price = prices[idx].current_price;
          tokenData.yesterday_price = prices[idx].yesterday_price;
        }

        return tokenData
      }
    )
    setfilteredTokens(newtokenArr)
  },[])
  
  return (
    <div className=" w-full">
      <TokenFilter tokenFilters={tokenFilters} settokenFilters={settokenFilters}/>
      <TokenGrid tokens={filteredTokens}/>
    </div>
  )
}

export default ScreenHome
