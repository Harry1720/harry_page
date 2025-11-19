"use client"
import { motion } from "framer-motion";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

// data
const projects=[
  {
    id:1,
    title: "Mobile Book App",
    description: "React Native",
    image: "/",
    github:"",
    link:'/',
    tech:["React", "TailwindCSS", "Framer Motion"],
  },
  {
    id:2,
    title: "Mobile Book App",
    description: "React Native",
    image: "/",
    github:"",
    link:'/',
    tech:["React", "TailwindCSS", "Framer Motion"],
  },
  {
    id:3,
    title: "Mobile Book App",
    description: "React Native",
    image: "/",
    github:"",
    link:'/',
    tech:["React", "TailwindCSS", "Framer Motion"],
  },

]

const WorkPage = () => {
  return (
    <motion.section
      initial={{opacity:0}}
      animate={{
        opacity:1,
        transition:{delay:1, duration:0.4, ease:"easeIn"}
      }}
      className="min-h-screen flex items-center py-24 xl:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col justify-center">
        {/* heading */}
        <h2 className="h2 mb-6 xl:mb-12 max-w-[600px]">
          My Latest <span className="text-accent">Work</span>
        </h2>

        {/* projects */}
        <div>
          <Swiper
            modules={[Pagination]}
            pagination={{clickable:true, dynamicBullets:true}}
            className="h-max xl:h-[460px]"
          >
            {projects.map((project)=>{
              return (
                <SwiperSlide key={project.id} className="h-full">
                  <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
                    {/* project information */}
                    <div className="w-full max-w-[380px] flex flex-col gap-6 xl:gap-8 xl:pt-6 order-2 xl:order-0">
                      <h3 className="h3">{project.title}</h3>
                      {/* technologies */}
                      <div className="xl:mb-4 max-w-[300px] min-h-[130px]">
                        <p className="mb-4">Technologies Used</p>
                        <ul className="flex flex-wrap gap-4">
                          {project.tech.map((item, index)=>{
                            return(
                              <li
                                key={index}
                                className="flex items-center gap-4 bg-[#a883ff]/13 h-[28px] px-[14px] rounded-full"
                              >
                                {item}
                              </li>
                            );
                          })}
                          <li></li>
                        </ul>
                      </div>
                      {/* buttons */}
                      <div className="flex flex-col sm:flex-row gap-4 items-start">
                        <Link href={project.link}>
                          <button className="btn btn-sm btn-accent flex gap-2">
                            <MdArrowOutward className="text-xl" />
                            <span>Live Project</span>
                          </button>
                        </Link>
                        <Link href={project.github}>
                          <button className="btn btn-sm btn-white flex gap-2">
                            <FaGithub className="text-xl" />
                            <span>Live Project</span>
                          </button>
                        </Link>
                      </div>
                    </div>
                    {/* project image */}
                    <div className="w-full h-[200px] md:h-[300px] xl:h-[400px] relative bg-pink-50/10 order-1 xl:order-0 rounded-lg overflow-hidden">
                      <Image src={project.image} alt={project.image} fill className="object-cover"/>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </motion.section>
  )
}

export default WorkPage