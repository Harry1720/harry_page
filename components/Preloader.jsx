'use client'
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setTimeout(() => {
            onComplete();
          }, 800);
          return 100;
        }
        return prev + Math.random() * 8;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  const displayProgress = Math.min(Math.floor(progress), 100);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-100 bg-white/90 flex flex-col items-center justify-center"
    >
      {/* Logo */}
      <div className="absolute top-8 left-8">
        <Link href="/" className="text-[28px] font-bold text-secondary">
          Harry
        </Link>
      </div>

      {/* Main Text Animation */}
      {/* <div className="overflow-hidden mb-16">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-secondary leading-tight">
            <div className="mb-2">HARRY PAGE</div>
            <div className="text-secondary/40">WEB DEVELOPER</div>
          </h1>
        </motion.div>
      </div> */}

      {/* Loading Bar */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="relative"
      >
        <div className="bg-secondary rounded-full px-8 py-4 flex items-center gap-4 shadow-2xl">
          <span className="text-white font-medium text-sm uppercase tracking-wider">
            Loading
          </span>
          <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-accent rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${displayProgress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
          <span className="text-white font-bold text-sm min-w-12 text-right">
            {displayProgress}%
          </span>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-8 right-8 flex gap-2">
        <motion.div
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.2 }}
          className="w-1 h-8 bg-secondary"
        />
        <motion.div
          animate={{ scaleY: [1, 0.7, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.1, delay: 0.1 }}
          className="w-1 h-8 bg-secondary"
        />
        <motion.div
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.3, delay: 0.2 }}
          className="w-1 h-8 bg-secondary"
        />
        <motion.div
          animate={{ scaleY: [1, 0.6, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: 0.3 }}
          className="w-1 h-8 bg-secondary"
        />
      </div>
    </motion.div>
  );
};

export default Preloader;
