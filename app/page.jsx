"use client"
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric' 
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <>
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
            className="object-cover opacity-60"
            priority
            quality={[100,75]}
          />
        </div>
      </motion.section>
      {/* Date and Time - Fixed at top corners - Hidden on mobile */}
      <div className="hidden md:block fixed top-8 left-8 text-white text-lg z-40">
        {formatDate(currentTime)}
      </div>
      <div className="hidden md:block fixed top-8 right-8 text-white text-lg font-mono z-40">
        {formatTime(currentTime)}
      </div>

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
            
            <h2 className="text-2xl md:text-5xl xl:text-7xl font-bold text-white/60 mb-6">
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

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
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
          </div>

          {/* Right Side - Stats */}
          <div className="flex xl:flex-col gap-8 xl:gap-12 justify-center xl:justify-start xl:pt-8 xl:ml-0">
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