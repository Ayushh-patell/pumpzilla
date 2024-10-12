'use client';

import Image from 'next/image'
import React, { useEffect } from 'react'
import BasicDetails from './components/basicDetails';
import MetricsDetails from './components/metricsDetails';
import GraphicDetails from './components/graphicDetails';
import BuySellDetails from './components/buysellDetails';
import HolderDetails from './components/holderDetails';



const GridDetails = ({tokenData}) => {


    useEffect(() => {
        // DYNAMICALLY UPDATE THE HEIGHT AND WIDTH OF THE IMAGES WITH THE PARENT MAIN DIV
        const mainVals = document.getElementById('ImgBg').getBoundingClientRect();
        console.log(mainVals);
        document.querySelector('#rightDiv').style.height = `${mainVals.height}px`
        let itemImg = document.querySelectorAll('#ImgBg .detailDiv .bgImgPart');
        itemImg.forEach((el) => {
            el.style.width = `${mainVals.width}px`;
            el.style.height = `${mainVals.height}px`;
        })
        // DYNAMICALLY GET THE POSITION OF EACH DIV AND ADJUST THE IMAGE ACCORDING TO THE RELATION BETWEEN PARENT AND EACH DIV
        let itemDivsVals = Array.from(document.querySelectorAll('#ImgBg .detailDiv')).map((el) => el.getBoundingClientRect());

        itemImg.forEach((el,i) => {
            el.style.top = `-${itemDivsVals[i].y-mainVals.y}px`
            el.style.left = `-${itemDivsVals[i].x-mainVals.x}px`
        })

        
    },[])

    return (
    <div id="ImgBg" className=" w-full flex justify-center items-center gap-4 relative">
    <div className=" w-3/4 grid grid-cols-3 gap-4 z-0">
        <BasicDetails tokenData={tokenData}/>
        <MetricsDetails/>
        <GraphicDetails/>
    </div>
    <div id='rightDiv' className=" w-1/4 flex flex-col justify-center items-center gap-4 z-0">
        <BuySellDetails tokenData={tokenData}/>
        <HolderDetails/>
    </div>

</div>
  )
}

export default GridDetails
