import React from 'react'
import NavLinks from "./NavLinks"
import Logo from './Logo'
import { MdFileDownload } from "react-icons/md"
import Image from 'next/image'

const MainNav = () => {
  return (
    <nav className='w-full h-full pt-16 relative'>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/image/landmark.png" 
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay để làm mờ ảnh */}
        <div className="absolute inset-0 bg-secondary/80"></div>
      </div>

      {/* Content */}
      <div className='relative z-10 flex flex-col h-full items-center justify-between'>
        <Logo/>
        
        {/* NavLinks centered */}
        <div className="flex-1 flex items-center">
          <NavLinks
            containerStyles="flex flex-col gap-4"
          />
        </div>

        {/* <button className="btn btn-lg btn-accent mb-16">
          <div className='flex items-center gap-3'>
            <span>Visit My CV</span>
            <MdFileDownload className="text-xl"/>
          </div>
        </button> */}
      </div>
    </nav>
  )
}

export default MainNav