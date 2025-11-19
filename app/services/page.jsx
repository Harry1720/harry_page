"use client"
import { motion } from "framer-motion";

const ServicePage = () => {
  return (
    <motion.section
      initial={{opacity:0}}
      animate={{
        opacity:1,
        transition:{delay:1.5, duration:0.4, ease:"easeIn"}
      }}
    >
      service
    </motion.section>
  )
}

export default ServicePage