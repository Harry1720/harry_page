"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/components/LanguageProvider";
import Image from "next/image";

const LanguageSwitcher = () => {
  const [scrolled, setScrolled] = useState(false);
  const { locale, setLocale, t } = useI18n();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgClass = scrolled
    ? " backdrop-blur-md py-0.5 px-0.5 rounded-full transition-all duration-300"
    : "transition-all duration-300";

  return (
    <div className={`hidden md:block fixed top-8 right-62 z-40 ${bgClass}`}>
      <div className="inline-flex items-center gap-1 rounded-full border border-white/20 p-1">
        <span className="sr-only">{t.languageSwitcher.label}</span>
        <button
          type="button"
          onClick={() => setLocale("vi")}
          className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
            locale === "vi" ? "bg-accent text-primary" : "text-white/75 hover:text-white"
          }`}
          aria-pressed={locale === "vi"}
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
    </div>
  );
};

export default LanguageSwitcher;