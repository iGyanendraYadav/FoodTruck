"use client";

import Image from 'next/image';
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

type Props = {}

const Header = (props: Props) => {
  let Pages = [
    { name: "Home", link: "/" },
    { name: "Menu", link: "/menu" },
    { name: "About", link: "/about" },
    { name: "Reviews", link: "/reviews" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full  fixed top-0 left-0 font-Poppins z-10 bg-emerald-500">
      <div className="container mx-auto ">
        <div className="flex flex-col justify-center items-center space-y-3">
        <Image className='py-2' src="/logo.png" width={129} height={129} alt="logo" />
        
        </div>
      </div>
    </div>
  )
}

export default Header