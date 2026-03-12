"use client"
import { motion } from "framer-motion";
import DateTime from "@/components/DateTime";
import BackToTop from "@/components/BackToTop";

const ContactPage = () => {
  return (
    <>
      <DateTime />
      <BackToTop />
      <motion.section
        initial={{opacity:0}}
        animate={{
          opacity:1,
          transition:{delay:1.5, duration:0.4, ease:"easeIn"}
        }}
      >
        contact
      </motion.section>
    </>
  )
}

export default ContactPage