import React from 'react'
import TokenGridItem from './TokenGridItem'

const TokenGrid = ({tokens}) => {
  console.log(tokens);
  
  return (
    <div className=" grid grid-cols-4 gap-4 p-8">
    {tokens && tokens.map((data, i) => (
    <TokenGridItem key={i} data={data}/>
    ))}

    </div>
  )
}

export default TokenGrid
