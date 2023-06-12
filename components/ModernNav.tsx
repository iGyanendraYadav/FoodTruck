import Link from 'next/link'
import React from 'react'
import { AiOutlineHome, AiOutlineStar, AiOutlineUser } from 'react-icons/ai';
import { BsCurrencyRupee, BsInfo, BsInfoSquare } from 'react-icons/bs';
import { MdOutlineReviews } from 'react-icons/md';

type Props = {}

const ModernNav = (props: Props) => {
  return (
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
  )
}

export default ModernNav