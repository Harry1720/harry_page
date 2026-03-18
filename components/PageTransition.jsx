'use client'

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const PageTransition = ({children}) => {
    const pathname=usePathname();

    useEffect(() => {
        const timer = setTimeout(() => {
            window.dispatchEvent(
                new CustomEvent("app-route-change", {
                    detail: { pathname },
                })
            );
        }, 0);

        return () => clearTimeout(timer);
    }, [pathname]);

  return (
    <AnimatePresence>
        <div key={pathname}>
            <motion.div
                initial={{opacity:1}}
                animate={{
                    opacity:0,
                    transition:{delay:0.1, duration:0.8, ease: "easeInOut"}
                }}
                className="min-h-screen w-screen fixed top-0 pointer-events-none"
            />
            {children}
        </div>
    </AnimatePresence>
  )
}

export default PageTransition
