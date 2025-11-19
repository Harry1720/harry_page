"use client"
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <motion.section
      initial={{opacity:0}}
      animate={{
        opacity:1,
        transition:{delay:1.5, duration:0.4, ease:"easeIn"}
      }}
      className="h-screen flex items-center"
    >
      <div className="flex flecx-col xl:flex-row items-center justify-between">
        <div className="w-full xl:w-[600px]">
          <h1 className="h1">Hi! I'm Harry, <br />
            <TypeAnimation 
              sequence={["Web Developer", 2000, "Front-end Developer",2000]}
              wrapper="span"
              speed={40}
              className="text-accent"
              repeat={Infinity}
              cursor={false}
            />
          </h1>
        </div>
      </div>
    </motion.section>
  )
}

export default Home