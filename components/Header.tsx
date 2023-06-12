

import Image from 'next/image';
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className="  bg-emerald-500">
      <div className="container mx-auto ">
        <div className="flex flex-col justify-center items-center">
        <Image className='py-2' src="/logo.png" width={129} height={129} alt="logo" />
        
        </div>
      </div>
    </div>
  )
}

export default Header