import Logo from './Logo'
import {CiMenuFries} from 'react-icons/ci'
import { MdFileDownload } from "react-icons/md"
import Image from 'next/image'

import{
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,}
from "@/components/ui/sheet";
import NavLinks from './NavLinks';

const Header = () => {
  return (
    <header className='2xl:hidden absolute z-40 left-0 top-0 right-0'>
      <div className="container mx-auto">
        <div className='flex items-center justify-between py-6'>
            {/* logo */}
            <Logo/>

            {/* navigation for mobile */}
            <Sheet>
                <SheetTrigger className="cursor-pointer text-[30px] text-white">
                    <CiMenuFries/>
                </SheetTrigger>
                <SheetContent 
                    className="border-0 flex flex-col justify-between items-center pt-16 pb-20"
                    side="right"
                >
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
                    <div className="relative z-10 flex flex-col h-full items-center justify-between w-full">
                        <SheetHeader>
                            <SheetTitle><Logo/></SheetTitle>
                            <SheetDescription className="sr-only">Navigation Menu</SheetDescription>
                        </SheetHeader>
                        <NavLinks containerStyles="flex flex-col gap-8 max-w-[100px]"/>
                        {/* <div>
                            <button className="btn btn-lg btn-accent mb-16">
                                <div className='flex items-center gap-3'>
                                    <span>Visit My CV</span>
                                    <MdFileDownload className="text-xl"/>
                                </div>
                            </button>
                        </div> */}
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header