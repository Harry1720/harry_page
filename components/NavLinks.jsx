'use client'
import React from 'react'
import Link from "next/link"
import { usePathname } from 'next/navigation'

const links = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About",
        path: "/about"
    },
    {
        name: "Services",
        path: "/services"
    },
    {
        name: "Work",
        path: "/work"
    },
    {
        name: "Contact",
        path: "/contact"
    },
]

const NavLinks = ({containerStyles}) => {
    const pathname = usePathname();
    return (
        <ul className={containerStyles}>
            {links.map((link,index)=>{
                const isActive = pathname === link.path;
                return (
                    <Link 
                        href={link.path} 
                        key={index}
                        className={`relative text-base text-white leading-relaxed
                                    border-white/10 
                                    px-4 py-2 rounded-lg
                                    transition-all duration-300
                                    group hover:font-bold
                                    ${isActive && 'bg-accent/50 border-accent shadow-[0_0_20px_rgba(64,196,184,0.5)] font-bold'}`}>
                        
                        <span className="relative z-10 flex items-center gap-2 uppercase ">
                            {link.name}
                        </span>
                        
                        {/* Line animation on hover */}
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                )
            })}
        </ul>
    )
}

export default NavLinks