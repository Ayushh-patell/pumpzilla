import localFont from "next/font/local";
import "./globals.css";
import {Bebas_Neue, Montserrat} from 'next/font/google'
import Image from "next/image";
import HomeNav from "./components/HomeNav";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const beatWord = localFont({
  src:'./fonts/Beat Word demo.ttf',
  variable:'--font-beat-word',
  weight:'100 900',
});
const cheese = localFont({
  src:'./fonts/CHEESEBURGA demo.ttf',
  variable:'--font-cheese-burga',
  weight:'100 900',
});


export const mont = Montserrat({subsets:['cyrillic'], adjustFontFallback:false, display:'swap'})
export const bebas = Bebas_Neue({subsets:['latin'], weight:['400'], adjustFontFallback:false, display:'swap'})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${beatWord.variable} ${cheese.variable} antialiased`}
      >
            <header className=' fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 py-3 bg-darkPry'>
      {/* LOGO */}
        <div className=" flex justify-center items-end">
          <Image src={'/Logo.png'} alt="Logo" className=" h-14 w-auto" width={100} height={100}/>
          <p className='font-[family-name:var(--font-beat-word)] bg-gradient-to-b from-purplePry to-bluePry text-transparent bg-clip-text text-xl'>UMPZILLA</p>
        </div>
        {/* LOGO END */}

        {/* SEARCH */}
        <div className=" w-1/3 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <Image src={"/search.svg"} alt="search icon" width={40} height={40} className=" size-6 absolute z-10 cursor-pointer pointer-events-none top-1/2 left-3 -translate-y-1/2"/>
          <input type="text" placeholder="Search for tokens" className={` w-full bg-blackPry rounded-xl text-white placeholder:text-white/25 outline-none focus:outline-bluePry px-12 py-2 font-bold ${mont.className}`}/>
        </div>
        {/* SEARCH END */}

        {/* CONNECT BTN */}
        <button className=" font-beat bg-gradient-to-r from-bluePry to-purplePry rounded-xl text-lg px-4 py-2 text-white">CONNECT WALLET</button>
      </header>

      <aside className=" fixed z-40 top-0 left-0 h-dvh w-16 pt-40 pb-4 bg-darkPry flex justify-center items-center">
        <HomeNav/>
      </aside>
        {children}
      </body>
    </html>
  );
}
