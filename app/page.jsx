"use client"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaTelegramPlane,
  FaEnvelope
} from "react-icons/fa";
import DateTime from "@/components/DateTime";
import { useI18n } from "@/components/LanguageProvider";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Harry1720",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/harrydevbaohuynh/",
    icon: FaLinkedinIn,
  },
  {
    name: "Mail",
    href: "mailto:baohuynh4107@gmail.com",
    icon: FaEnvelope,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/harry4717/",
    icon: FaFacebookF,
  },
  // {
  //   name: "Instagram",
  //   href: "https://instagram.com/your-profile",
  //   icon: FaInstagram,
  // },
  {
    name: "Telegram",
    href: "https://t.me/Harry1724",
    icon: FaTelegramPlane,
  },
];

const AnimatedStatValue = ({ finalValue, generateRandom, trigger, duration = 2000, intervalMs = 80, startDelay = 1500 }) => {
  const [value, setValue] = useState(finalValue);

  useEffect(() => {
    let interval;
    let timeout;

    const delayTimer = setTimeout(() => {
      setValue(generateRandom());

      interval = setInterval(() => {
        setValue(generateRandom());
      }, intervalMs);

      timeout = setTimeout(() => {
        clearInterval(interval);
        setValue(finalValue);
      }, duration);
    }, startDelay);

    return () => {
      clearTimeout(delayTimer);
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [duration, finalValue, generateRandom, intervalMs, startDelay, trigger]);

  return <span className="block w-[4ch] mx-auto xl:ml-auto xl:mr-0 text-center xl:text-right tabular-nums">{value}</span>;
};

const Home = () => {
  const [statsTrigger, setStatsTrigger] = useState(1);
  const { t, locale } = useI18n();

  useEffect(() => {
    document.title = `${t.page.titleHome} | Harry's Portfolio`;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute("content", t.page.descriptionHome);
    }
  }, [t.page.descriptionHome, t.page.titleHome]);

  useEffect(() => {
    const handleRouteChange = (event) => {
      if (event.detail?.pathname === "/") {
        setStatsTrigger((prev) => prev + 1);
      }
    };

    window.addEventListener("app-route-change", handleRouteChange);

    return () => {
      window.removeEventListener("app-route-change", handleRouteChange);
    };
  }, []);

  return (
    <>
      <DateTime />
      <motion.section
        initial={{opacity:0}}
        animate={{
          opacity:1,
          transition:{delay:1, duration:0.4, ease:"easeIn"}
        }}
      >
      {/* Background Image - Full Page */}
        <div className="fixed inset-0 z-0">
          <Image 
            src="/image/homeBg.png"
            alt="Background"
            fill
            sizes="100vw"
            className="object-cover opacity-35"
            priority
            quality={[100,75]}
          />
        </div>
      </motion.section>

      <motion.section
        initial={{opacity:0}}
        animate={{
          opacity:1,
          transition:{delay:1, duration:0.4, ease:"easeIn"}
        }}
        className="flex flex-col relative xl:mt-29 md:mt-25 mt-12 overflow-hidden 2xl:mx-15"
      >
        {/* Main Content */}
        <div className="flex-1 flex flex-col xl:flex-row items-center xl:items-start gap-18">
          {/* Left Side - Name and Title */}
          <div className=" w-full">
            <h1 className="text-5xl md:text-8xl xl:text-[120px] font-bold mb-6 font-mono">
              <span className="text-white/40">{t.home.introPrefix} </span>
              <span className="text-white">{t.home.introPostfix}</span>
            </h1>
            
            <h2 className="text-2xl md:text-5xl 2xl:text-[85px] min-[1250px]:text-[70px] font-bold text-white/60 mb-6 h-8 md:h-12 xl:h-[4.5rem]">
              <TypeAnimation 
                key={locale}
                sequence={[`${t.home.role1}`, 2000, `${t.home.role2}`, 2000]}
                wrapper="span"
                speed={40}
                className="text-accent"
                repeat={Infinity}
                cursor={false}
              />
            </h2>

            <p className="text-base md:text-lg text-white/80 max-w-4xl mb-8 xl:mb-12">
              {t.home.description}
            </p>

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex flex-col sm:flex-row gap-6 xl:mt-3">
                <Link 
                  href="/"
                  className="px-8 py-4 bg-white text-secondary font-semibold rounded-lg hover:bg-accent transition-all text-center"
                >
                  {t.home.viewResume}
                </Link>
                <Link 
                  href="/work"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:text-accent hover:border-accent transition-all text-center"
                >
                  {t.home.viewWork}
                </Link>
              </div>

              <div className="flex items-center justify-center gap-2 sm:justify-start sm:pl-4 xl:mt-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.name}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-black/55"
                    >
                      <Icon className="text-lg" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Stats */}
          <div className="flex xl:flex-col gap-8 xl:gap-21 justify-center xl:justify-start xl:ml-0">
            <div className="text-center xl:text-right">
              <div className="text-4xl md:text-5xl xl:text-6xl font-bold text-accent mb-2">
                <AnimatedStatValue
                  finalValue="100%"
                  generateRandom={() => `${Math.floor(Math.random() * 100)}%`}
                  trigger={statsTrigger}
                />
              </div>
              <div className="text-sm md:text-base text-white/60">{t.home.stats.ready}</div>
            </div>
            
            <div className="text-center xl:text-right">
              <div className="text-4xl md:text-5xl xl:text-6xl font-bold text-accent mb-2">
                <AnimatedStatValue
                  finalValue="7+"
                  generateRandom={() => `${Math.floor(Math.random() * 9) + 1}+`}
                  trigger={statsTrigger}
                />
              </div>
              <div className="text-sm md:text-base text-white/60">{t.home.stats.projects}</div>
            </div>
            
            <div className="text-center xl:text-right">
              <div className="text-4xl md:text-5xl xl:text-6xl font-bold text-accent mb-2">
                <AnimatedStatValue
                  finalValue="300+"
                  generateRandom={() => `${Math.floor(Math.random() * 1000) + 2}+`}
                  trigger={statsTrigger}
                />
              </div>
              <div className="text-sm md:text-base text-white/60">{t.home.stats.github}</div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default Home