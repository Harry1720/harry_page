'use client'
import React, { useState } from 'react'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { RiMenu3Fill } from "react-icons/ri"
import { IoClose } from "react-icons/io5"
import Logo from './Logo'

const navItems = [
    { name: "About", path: "/about" },
    { name: "Collection", path: "/services" },
    { name: "Projects", path: "/work" },
    { name: "Approach", path: "/" },
    { name: "Contact", path: "/contact" },
]

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <div className="md:hidden">
            {/* Header with Logo and Hamburger */}
            <header className="fixed top-0 left-0 right-0 z-40 bg-secondary/95 backdrop-blur-sm border-b border-white/10">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between py-4">
                        <Logo />
                        <button 
                            onClick={toggleMenu}
                            className="text-white text-3xl hover:text-accent transition-colors"
                            aria-label="Toggle menu"
                        >
                            <RiMenu3Fill />
                        </button>
                    </div>
                </div>
            </header>

            {/* Overlay Menu */}
            <div 
                className={`
                    fixed inset-0 bg-secondary/98 backdrop-blur-lg z-50
                    transition-all duration-500 ease-in-out
                    ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
                `}
            >
                <div className="container mx-auto px-6 h-full flex flex-col">
                    {/* Close Button */}
                    <div className="flex justify-end pt-6">
                        <button 
                            onClick={closeMenu}
                            className="text-white text-4xl hover:text-accent transition-colors"
                            aria-label="Close menu"
                        >
                            <IoClose />
                        </button>
                    </div>

                    {/* Menu Items */}
                    <div className="flex-1 flex items-center justify-center">
                        <nav>
                            <div className="mb-8">
                                <span className="text-white/40 text-sm tracking-[0.2em] uppercase">Menu</span>
                            </div>
                            <ul className="space-y-4">
                                {navItems.map((item, index) => {
                                    const isActive = pathname === item.path;
                                    return (
                                        <li 
                                            key={index}
                                            style={{
                                                transitionDelay: `${index * 50}ms`
                                            }}
                                            className={`
                                                transform transition-all duration-500
                                                ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}
                                            `}
                                        >
                                            <Link 
                                                href={item.path}
                                                onClick={closeMenu}
                                                className={`
                                                    block text-4xl md:text-5xl font-light
                                                    transition-all duration-300
                                                    hover:text-accent hover:translate-x-2
                                                    ${isActive ? 'text-accent font-medium' : 'text-white'}
                                                `}
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>

                    {/* Footer Info */}
                    {/* <div className="pb-8 grid grid-cols-2 gap-8 text-white/60 text-sm">
                        <div>
                            <p className="mb-2 text-white/40 uppercase text-xs">News</p>
                            <p>Showroom</p>
                        </div>
                        <div>
                            <p className="mb-2 text-white/40 uppercase text-xs">Contact</p>
                            <p>020 8156 7290</p>
                            <p>sales@fluid.glass</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default MobileNav
