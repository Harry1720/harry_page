"use client";

import { useI18n } from "@/components/LanguageProvider";
import Image from "next/image";

const LanguageSwitcher = () => {
  const { locale, setLocale, t } = useI18n();

  return (
    <div className="fixed top-3 right-4 z-[60] md:top-8 md:right-[50%] md:translate-x-1/2">
      <div className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/40 p-1 backdrop-blur-sm">
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