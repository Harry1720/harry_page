'use client'
import React, { useState } from 'react'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { GoHome, GoPersonFill } from "react-icons/go"
import { MdWork, MdDesignServices } from "react-icons/md"
import { RiContactsBook3Fill } from "react-icons/ri"

const navItems = [
    {
        name: "Home",
        path: "/",
        icon: GoHome
    },
    {
        name: "About",
        path: "/about",
        icon: GoPersonFill
    },
    {
        name: "Services",
        path: "/services",
        icon: MdDesignServices
    },
    {
        name: "Work",
        path: "/work",
        icon: MdWork
    },
    {
        name: "Contact",
        path: "/contact",
        icon: RiContactsBook3Fill
    },
]

const FloatingDock = () => {
    const pathname = usePathname();
    const [hoveredIndex, setHoveredIndex] = useState(null);
    
    // Calculate size based on distance from hovered item
    const getSize = (index) => {
        if (hoveredIndex === null) return 42; // default 48px (w-12)
        const distance = Math.abs(index - hoveredIndex);
        if (distance === 0) return 80; // Hovered item (1.67x)
        if (distance === 1) return 64; // Adjacent items (1.33x)
        if (distance === 2) return 56; // Next adjacent (1.17x)
        return 48; // Others
    };
    
    const getIconSize = (index) => {
        if (hoveredIndex === null) return 18;
        const distance = Math.abs(index - hoveredIndex);
        if (distance === 0) return 32;
        if (distance === 1) return 26;
        if (distance === 2) return 23;
        return 20;
    };

    const getTranslateY = (index) => {
        if (hoveredIndex === null) return 0;
        const distance = Math.abs(index - hoveredIndex);
        if (distance === 0) return -24; // Hovered item lifts up
        if (distance === 1) return -12; // Adjacent items lift slightly
        if (distance === 2) return -6; // Next adjacent lift a bit
        return 0;
    };
    
    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 hidden md:block">
            <nav className="bg-secondary/60 backdrop-blur-xl border border-white/10 rounded-2xl px-6 shadow-2xl transition-all duration-3000 py-1.5">
                <ul 
                    className="flex items-center gap-4 h-12"
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    {navItems.map((item, index) => {
                        const isActive = pathname === item.path;
                        const Icon = item.icon;
                        const size = getSize(index);
                        const iconSize = getIconSize(index);
                        const translateY = getTranslateY(index);
                        const isHovered = hoveredIndex === index;
                        
                        return (
                            <li 
                                key={index} 
                                className="relative flex items-end transition-all duration-300 ease-out"
                                onMouseEnter={() => setHoveredIndex(index)}
                                style={{
                                    transform: `translateY(${translateY}px)`,
                                }}
                            >
                                <Link 
                                    href={item.path}
                                    className={`
                                        flex items-center justify-center
                                        rounded-full
                                        transition-all duration-500
                                        ${isActive 
                                            ? 'bg-accent text-secondary shadow-[0_0_20px_rgba(64,196,184,0.6)]' 
                                            : 'bg-white/5 text-white hover:bg-white/10'
                                        }
                                    `}
                                    style={{
                                        width: `${size}px`,
                                        height: `${size}px`,
                                    }}
                                >
                                    <Icon 
                                        className="transition-all duration-500 pointer-events-none"
                                        style={{
                                            fontSize: `${iconSize}px`,
                                        }}
                                    />
                                </Link>
                                
                                {/* Tooltip */}
                                <div 
                                    className="absolute left-1/2 pointer-events-none transition-all duration-500"
                                    style={{
                                        bottom: `${size + 8}px`,
                                        opacity: isHovered ? 1 : 0,
                                        transform: `translateX(-50%) translateY(${isHovered ? '0' : '8px'})`,
                                    }}
                                >
                                    <div className="bg-secondary/95 backdrop-blur-sm border border-white/20 text-white px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap shadow-xl">
                                        {item.name}
                                    </div>
                                    {/* Arrow */}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                                        <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-white/20"></div>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default FloatingDock
