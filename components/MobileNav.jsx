'use client'
import React, { useState } from 'react'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { RiMenu3Fill } from "react-icons/ri"
import { IoClose } from "react-icons/io5"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import Image from 'next/image'
import Logo from './Logo'
import { useI18n } from './LanguageProvider'

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const { locale, setLocale, t } = useI18n();
    const navItems = [
        { name: t.nav.home, path: "/" },
        { name: t.nav.about, path: "/about" },
        { name: t.nav.projects, path: "/work" },
        { name: t.nav.studyNotes, path: "/materials" },
        { name: t.nav.contact, path: "/contact" },
    ]

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
                    <div className="flex items-center justify-between pt-6">
                        <div className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/40 p-1 backdrop-blur-sm">
                            <span className="sr-only">{t.languageSwitcher.label}</span>
                            <button
                                type="button"
                                onClick={() => setLocale("vi")}
                                className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                                    locale === "vi" ? "bg-accent text-primary" : "text-white/75 hover:text-white"
                                }`}
                                aria-pressed={locale === "vi"}
                                aria-label="Vietnamese"
                            >
                                <Image
                                    src="https://flagcdn.com/w20/vn.png"
                                    alt="VN"
                                    width={20}
                                    height={13}
                                    className="inline-block w-4 rounded-sm"
                                    unoptimized
                                />
                            </button>
                            <button
                                type="button"
                                onClick={() => setLocale("en")}
                                className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                                    locale === "en" ? "bg-accent text-primary" : "text-white/75 hover:text-white"
                                }`}
                                aria-pressed={locale === "en"}
                                aria-label="English"
                            >
                                <Image
                                    src="https://flagcdn.com/w20/gb.png"
                                    alt="EN"
                                    width={20}
                                    height={10}
                                    className="inline-block w-4 rounded-sm"
                                    unoptimized
                                />
                            </button>
                        </div>

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
                    <div className="py-8 border-t border-white/50 px-1">
                        <div className="grid grid-cols-2 gap-1 items-center">
                            {/* Left Column - Brand */}
                            <div>
                                <p className="text-xl font-semibold text-white mb-2">Harry Dev</p>
                                <p className="text-white/60 text-sm">{t.nav.mobileTagline}</p>
                            </div>

                            {/* Right Column - Social Links */}
                            <div className="flex gap-4 justify-end">
                                <a 
                                    href="https://github.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-white/70 hover:text-accent transition-colors text-2xl"
                                    aria-label="GitHub"
                                >
                                    <FaGithub />
                                </a>
                                <a 
                                    href="https://linkedin.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-white/70 hover:text-accent transition-colors text-2xl"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin />
                                </a>
                                <a 
                                    href="mailto:baohuynh4107@gmail.com" 
                                    className="text-white/70 hover:text-accent transition-colors text-2xl"
                                    aria-label="Email"
                                >
                                    <FaEnvelope />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileNav
