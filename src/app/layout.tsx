
import './globals.css';
import Header from '../../components/Header';
import { Inter } from 'next/font/google'
// import Image from 'next/image';
import {  AiOutlineStar, AiOutlineUser } from "react-icons/ai";
import Link from 'next/link';
import Contact from './contact/page';
import ModernNav from '../../components/ModernNav';
import { AiOutlineHome } from 'react-icons/ai';
import { BsCurrencyRupee,  } from 'react-icons/bs';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FoodTruck : Get Food Anywhere',
  description: 'We provides food at the same place where you see us.',
}




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 

  return (
    <html lang="en" className='selection:text-white selection:bg-pink-700'>
      <body className={inter.className}>
      {/* <Header/> */}




{/* New Header */}
<Header/>
{/* New Header */}


        {children}


        {/* Footer Component */}
        <Contact />
        {/* Footer Component */}

{/* <ModernNav/> */}

<div className="ModernNav w-full fixed bottom-3 lg:bottom-4">
  <div className="container mx-auto">
        <div className="flex flex-row items-center justify-center space-x-3 bg-pink-400 py-2 mx-20 lg:mx-[520px] bg-opacity-50 backdrop-filter backdrop-blur-2xl rounded-xl">
          <span className=" bg-pink-700 p-2 rounded-xl"><Link href="/"><span className='text-2xl text-white'><AiOutlineHome/></span></Link></span>
          <span className=" bg-pink-700 p-2 rounded-xl"><Link href="/menu"><span className='text-2xl text-white'><BsCurrencyRupee/></span></Link></span>
          <span className=" bg-pink-700 p-2 rounded-xl"><Link href="/reviews"><span className='text-2xl text-white'><AiOutlineStar/></span></Link></span>
          <span className=" bg-pink-700 p-2 rounded-xl"><Link href="/aboutus"><span className='text-2xl text-white'><AiOutlineUser/></span></Link></span>
        </div>
  </div>
</div>


        </body>
    </html>
  )
}
