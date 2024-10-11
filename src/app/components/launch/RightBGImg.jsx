'use client';

import Image from "next/image";

// import { useEffect, useState } from 'react';

const RightBGImg = () => {


  return (
    <div className="absolute z-0 top-0 left-0 pt-24 pb-4 pr-4 w-full h-full rounded-3xl pointer-events-none">

      <div className="h-full w-[54%] relative  text-white rounded-3xl overflow-hidden ml-auto">
        <div className=" h-full w-full -skew-x-12 absolute top-0 right-[-8%] rounded-3xl overflow-hidden">
            <Image src={'/launchRight.png'} alt=" cyberpunk city" width={600} height={600} className=" w-full h-full relative right-[8%] object-cover object-bottom skew-x-12"/>
        </div>
      </div>
    </div>
  );
};

export default RightBGImg;
