"use client"
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
import DateTime from "@/components/DateTime";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/your-username",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/your-profile",
    icon: FaLinkedinIn,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/your-profile",
    icon: FaFacebookF,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/your-profile",
    icon: FaInstagram,
  },
  {
    name: "Telegram",
    href: "https://t.me/your-username",
    icon: FaTelegramPlane,
  },
];

const Home = () => {
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
        className="flex flex-col relative xl:mt-29 md: mt-10 overflow-hidden"
      >
        {/* Main Content */}
        <div className="flex-1 flex flex-col xl:flex-row items-center xl:items-start gap-18">
          {/* Left Side - Name and Title */}
          <div className=" w-full">
            <h1 className="text-5xl md:text-8xl xl:text-[150px] font-bold mb-6">
              <span className="text-white/40">I&apos;M </span>
              <span className="text-white">HARRY</span>
            </h1>
            
            <h2 className="text-2xl md:text-5xl xl:text-7xl font-bold text-white/60 mb-6 h-8 md:h-12 xl:h-[4.5rem]">
              <TypeAnimation 
                sequence={["WEB DEVELOPER", 2000, "FRONT-END DEVELOPER", 2000]}
                wrapper="span"
                speed={40}
                className="text-accent"
                repeat={Infinity}
                cursor={false}
              />
            </h2>

            <p className="text-base md:text-lg text-white/80 max-w-3xl mb-8 xl:mb-12">
              I create functional, scalable, and user-friendly applications to solve real problems
            </p>

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="flex flex-col sm:flex-row gap-4 xl:mt-3">
                <Link 
                  href="/about"
                  className="px-8 py-4 bg-white text-secondary font-semibold rounded-lg hover:bg-accent transition-all text-center"
                >
                  View My Resume
                </Link>
                <Link 
                  href="/work"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:text-accent hover:border-accent transition-all text-center"

                >
                  View My Work
                </Link>
              </div>

              <div className="flex items-center justify-center gap-4 sm:ml-10 lg:ml-16 xl:ml-24 sm:justify-start sm:pl-4 xl:mt-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.name}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white text-black transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-secondary"
                    >
                      <Icon className="text-lg" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Stats */}
          <div className="flex xl:flex-col gap-8 xl:gap-16 justify-center xl:justify-start xl:ml-0">
            <div className="text-center xl:text-right">
              <div className="text-4xl md:text-5xl xl:text-6xl font-bold text-accent mb-2">3+</div>
              <div className="text-sm md:text-base text-white/60">Years of Experience</div>
            </div>
            
            <div className="text-center xl:text-right">
              <div className="text-4xl md:text-5xl xl:text-6xl font-bold text-accent mb-2">7+</div>
              <div className="text-sm md:text-base text-white/60">Completed Projects</div>
            </div>
            
            <div className="text-center xl:text-right">
              <div className="text-4xl md:text-5xl xl:text-6xl font-bold text-accent mb-2">10K+</div>
              <div className="text-sm md:text-base text-white/60">Hours Worked</div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default Home