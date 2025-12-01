"use client"
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";
import { useState } from "react";
import { X, ArrowRight, ArrowLeft } from "lucide-react";

// Data cho Skills
const skills = [
  { name: "HTML", icon: "/image/html.svg" },
  { name: "CSS", icon: "/image/css.svg" },
  { name: "JavaScript", icon: "/image/js.svg" },
  { name: "React", icon: "/image/React.svg" },
  { name: "Next.js", icon: "/image/nextjs.svg" },
  { name: "Python", icon: "/image/Python.svg" },
  { name: "Tailwind CSS", icon: "/image/Tailwind.svg"},
  { name: "Vite", icon: "/image/Vite.svg"},
  { name: "Git", icon: "/image/Git.svg" },
  { name: "SQL", icon: "/image/sql.svg" },
  // { name: "AI", icon: "/image/ai.png" },
];

// Data cho Experience
const experiences = [
  {
    title: "Scientific Research",
    company: "Ho Chi Minh City University of Transport",
    period: "2025 - Present",
    description: "A study on neural network models for modeling lane-changing behavior and providing decision-making support for drivers.",
    image: "/image/nn.jpg"
  },
  {
    title: "Top 20 Idea Round of the GDSC Vietnam Hackathon",
    company: "Google Developer Student Clubs HCMC",
    period: "2023",
    description: "A donated-book library for children in remote mountainous areas.",
    image: "/image/gdsc.jpg"
  },
];

// Data cho Education
const education = [
  {
    school: "Chi Lang Primary School",
    period: "2010 - 2015",
    degree: "Where I began my learning journey...",
    image: "/image/clang.jpg"
  },
  {
    school: "Quang Trung Secondary School",
    degree: "The place where my passion was born...",
    period: "2015 - 2019",
    image: "/image/qt.jpg"
  },
  {
    school: "Phu Nhuan High School",
    period: "2019 - 2022",
    degree: "The place where I dreamed and experienced many joy and sadness...",
    image: "/image/pn.jpg"
  },
  {
    school: "Ho Chi Minh City University of Transport",
    degree: "Study for future...",
    period: "2022 - 2026",
    image: "/image/uth.png"
  },
];

// Data cho Fun Facts
const funFacts = [
  {
    description: "I regularly create lecture notes for my subjects and share them both with my classmates and on my GitHub repository named 'Course Materials'.",
    image: "/image/courses_material.png"
  },
  {
    description: "I ranked first in my class in the grade 10 entrance exam, and scored 9/10 in Physics in the national high school graduation exam.",
    image: "/image/DDDH.jpg"
  },
  {
    description: "Listening to heartfelt sad songs when studying and coding.",
    image: "/image/sad_song.jpg"
  },
  {
    description: "Love watching old TV programs, for instance: The Price Is Right, Wheel of Fortune, Road to mount Olympia..., especially national versions, and I also have done the homemade wheel of TPIR and WOF too.",
    image: "/image/wheel.jpg"
  },
  {
    description: "I enjoy gazing at the city lights at night and often collect photos of it taken from different locations.",
    image: "/image/dark_city.jpg"
  },
];

// Component Modal xem ảnh
const ImageModal = ({ src, alt, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-[101]"
      >
        <X size={32} />
      </button>
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="relative max-w-[90vw] max-h-[90vh] w-full h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
        />
      </motion.div>
    </motion.div>
  );
};

// Component điều hướng giữa các tabs
const TabNavigation = ({ currentTab, onTabChange }) => {
  const tabs = [
    { value: "skills", label: "Skills" },
    { value: "experience", label: "Experiences" },
    { value: "education", label: "Education" },
    { value: "funfacts", label: "Fun Facts" }
  ];

  const currentIndex = tabs.findIndex(tab => tab.value === currentTab);
  const prevTab = currentIndex > 0 ? tabs[currentIndex - 1] : null;
  const nextTab = currentIndex < tabs.length - 1 ? tabs[currentIndex + 1] : null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="flex justify-between items-center mt-12 pt-8 border-t border-accent/20"
    >
      {/* Previous Tab */}
      <div className="flex-1">
        {prevTab && (
          <button
            onClick={() => onTabChange(prevTab.value)}
            className="group flex items-center gap-3 text-white/70 hover:text-accent transition-all"
          >
            <div className="w-10 h-10 rounded-full bg-secondary border border-accent/30 flex items-center justify-center group-hover:bg-accent/20 transition-all group-hover:scale-110">
              <ArrowLeft size={20} />
            </div>
            <div className="text-left">
              <p className="text-xs text-white/50 uppercase tracking-wider">Previous</p>
              <p className="font-semibold">{prevTab.label}</p>
            </div>
          </button>
        )}
      </div>

      {/* Current position indicator */}
      <div className="flex gap-2">
        {tabs.map((tab, index) => (
          <div
            key={tab.value}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'w-8 bg-accent' 
                : 'w-2 bg-white/20'
            }`}
          />
        ))}
      </div>

      {/* Next Tab */}
      <div className="flex-1 flex justify-end">
        {nextTab && (
          <button
            onClick={() => onTabChange(nextTab.value)}
            className="group flex items-center gap-3 text-white/70 hover:text-accent transition-all"
          >
            <div className="text-right">
              <p className="text-xs text-white/50 uppercase tracking-wider">Next</p>
              <p className="font-semibold">{nextTab.label}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-secondary border border-accent/30 flex items-center justify-center group-hover:bg-accent/20 transition-all group-hover:scale-110">
              <ArrowRight size={20} />
            </div>
          </button>
        )}
      </div>
    </motion.div>
  );
};

const AboutPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <motion.section
      initial={{opacity:0}}
      animate={{
        opacity:1,
        transition:{delay:1.5, duration:0.4, ease:"easeIn"}
      }}
      className="min-h-screen py-12 2xl:py-24"
    >
      <div className="container mx-auto">
        {/* Hero Section - About Me */}
        <motion.div 
          initial={{y: -20, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{delay: 0.2}}
          className="mb-16 rounded-3xl overflow-hidden border border-accent/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Left Side - Gradient Background */}
            <div className="bg-gradient-to-br from-secondary/80 to-tertiary/60 backdrop-blur-sm p-8 md:p-12 flex flex-col justify-center">
              <h2 className="h2 mb-6">
                About <span className="text-accent">Me</span>
              </h2>
              <div className="space-y-4 text-white/80">
                <p className="text-lg">
                  I'm a passionate <span className="text-accent font-semibold">Frontend Developer</span> who loves crafting beautiful and intuitive user interfaces.
                </p>
                <div className="space-y-3 pl-4">
                  <div className="flex items-start gap-3">
                    <span className="text-accent mt-1 text-xl">▹</span>
                    <span>Building responsive & accessible web applications</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent mt-1 text-xl">▹</span>
                    <span>Transforming designs into pixel-perfect code</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent mt-1 text-xl">▹</span>
                    <span>Creating smooth animations and interactions</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Key Info Cards */}
            <div className="bg-secondary/50 backdrop-blur-sm p-8 md:p-12 flex flex-col justify-center gap-6">
              <div className="space-y-2">
                <p className="text-white/60 uppercase text-sm font-semibold tracking-wider">Currently Learning</p>
                <p className="text-lg text-accent font-semibold">Advanced React Patterns, TypeScript, Web Performance Optimization & Modern CSS</p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <p className="text-white/80 italic leading-relaxed">
                  <span className="text-accent font-semibold">"First, solve the problem. Then, write the code."</span>
                  <span className="block text-sm text-white/60 mt-2">— John Johnson</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tabs Section */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full 2xl:w-auto bg-secondary/60 backdrop-blur-sm mb-12 h-auto p-2 flex-wrap gap-2 rounded-2xl">
            <TabsTrigger value="skills" className="data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:font-bold rounded-xl transition-all">
              Skills
            </TabsTrigger>
            <TabsTrigger value="experience" className="data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:font-bold rounded-xl transition-all">
              Experiences
            </TabsTrigger>
            <TabsTrigger value="education" className="data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:font-bold rounded-xl transition-all">
              Education
            </TabsTrigger>
            <TabsTrigger value="funfacts" className="data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:font-bold rounded-xl transition-all">
              Fun Facts
            </TabsTrigger>
          </TabsList>

          {/* Skills Tab */}
          <TabsContent value="skills">
            <motion.div 
              initial={{y: 20, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              className="bg-secondary/40 backdrop-blur-sm rounded-2xl p-8"
            >
              <h3 className="h3 mb-8 text-center">My Toolbox</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{scale:0.5, opacity:0}}
                    animate={{scale:1, opacity:1}}
                    transition={{delay:index * 0.1, duration:0.3}}
                    className="bg-tertiary hover:bg-tertiary-hover rounded-xl p-6 flex flex-col items-center justify-center gap-4 transition-all group cursor-default"
                  >
                    <div className="w-16 h-16 relative flex items-center justify-center group-hover:scale-110 transition-transform bg-white/40 rounded-4xl">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={64}
                        height={64}
                        className="object-contain rounded-4xl"
                      />
                    </div>
                    <p className="font-medium text-center">{skill.name}</p>
                  </motion.div>
                ))}
              </div>

              {/* Navigation */}
              <TabNavigation currentTab="skills" onTabChange={setActiveTab} />
            </motion.div>
          </TabsContent>

          {/* Experience Tab */}
          <TabsContent value="experience">
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{x: -50, opacity:0}}
                  animate={{x:0, opacity:1}}
                  transition={{delay:index * 0.2, duration:0.5}}
                  whileHover={{x: 8}}
                  className="bg-gradient-to-r from-secondary/60 to-secondary/30 backdrop-blur-sm rounded-2xl overflow-hidden hover:from-secondary/80 transition-all group border border-accent/10"
                >
                  <div className="flex flex-col lg:flex-row gap-0">
                    {/* Image */}
                    <div 
                      className="lg:w-2/5 h-64 lg:h-auto relative bg-tertiary cursor-pointer overflow-hidden flex-shrink-0"
                      onClick={() => setSelectedImage({ src: exp.image, alt: exp.title })}
                    >
                      <Image
                        src={exp.image || "/placeholder.svg"}
                        alt={exp.title}
                        fill
                        className="object-cover group-hover:scale-125 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent group-hover:from-black/10 transition-all" />
                    </div>
                    
                    {/* Content */}
                    <div className="lg:w-3/5 p-8 lg:p-10 flex flex-col justify-center relative">
                      <div className="absolute top-0 right-0 w-1 h-16 bg-gradient-to-b from-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 gap-2">
                        <h3 className="h4 text-accent group-hover:translate-x-2 transition-transform">{exp.title}</h3>
                        <span className="text-white/50 text-sm font-mono">{exp.period}</span>
                      </div>
                      <p className="text-accent/80 font-semibold mb-2">{exp.company}</p>
                      <p className="text-white/70 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Navigation */}
              <TabNavigation currentTab="experience" onTabChange={setActiveTab} />
            </div>
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education">
            <div className="bg-secondary/40 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="h3 mb-8 text-center">Education Journey</h3>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-accent/30 2xl:left-1/2 2xl:-translate-x-1/2"></div>
                
                <div className="space-y-12">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{x: index % 2 === 0 ? -50 : 50, opacity:0}}
                      animate={{x:0, opacity:1}}
                      transition={{delay:index * 0.3, duration:0.5}}
                      className={`flex gap-6 items-center relative ${
                        index % 2 === 0 ? '2xl:flex-row' : '2xl:flex-row-reverse'
                      } flex-col`}
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-6 w-4 h-4 bg-accent rounded-full border-4 border-primary 2xl:left-1/2 2xl:-translate-x-1/2 z-10"></div>
                      
                      {/* Content */}
                      <div className={`w-full 2xl:w-[calc(50%-2rem)] ml-16 2xl:ml-0 ${
                        index % 2 === 0 ? '2xl:text-right 2xl:pr-12' : '2xl:pl-12'
                      }`}>
                        <div className="bg-tertiary rounded-xl p-6 hover:bg-tertiary-hover transition-all bg-gradient-to-b from-accent/20 to-transparent">
                          <h4 className="font-bold text-xl text-accent mb-2">{edu.school}</h4>
                          <p className="text-white/80 mb-1">{edu.degree}</p>
                          <p className="text-white/60 text-sm">{edu.period}</p>
                        </div>
                      </div>
                      
                      {/* Image */}
                      <div className={`w-full 2xl:w-[calc(50%-2rem)] ml-16 2xl:ml-0 ${
                        index % 2 === 0 ? '2xl:pl-12' : '2xl:pr-12'
                      }`}>
                        <div 
                          className="bg-tertiary rounded-xl overflow-hidden h-48 relative cursor-pointer group"
                          onClick={() => setSelectedImage({ src: edu.image, alt: edu.school })}
                        >
                          <Image
                            src={edu.image}
                            alt={edu.school}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <TabNavigation currentTab="education" onTabChange={setActiveTab} />
            </div>
          </TabsContent>

          {/* Fun Facts Tab */}
          <TabsContent value="funfacts">
            <div className="bg-secondary/40 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="h3 mb-8 text-center">Things you don't know about me</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
                {funFacts.map((fact, index) => (
                  <motion.div
                    key={index}
                    initial={{scale:0.8, opacity:0}}
                    animate={{scale:1, opacity:1}}
                    transition={{delay:index * 0.12, duration:0.4, type: "spring"}}
                    className={`bg-gradient-to-br from-tertiary to-tertiary/60 rounded-2xl overflow-hidden group cursor-pointer transition-all border border-accent/10`}
                  >
                    <div className="flex flex-col h-full">
                      {/* Image */}
                      <div 
                        className="relative h-40 overflow-hidden flex-shrink-0"
                        onClick={() => setSelectedImage({ src: fact.image, alt: fact.description })}
                      >
                        <Image
                          src={fact.image || "/placeholder.svg"}
                          alt={fact.description}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all" />
                      </div>
                      
                      {/* Content */}
                      <div className="p-6 flex-1 flex items-center">
                        <p className="text-white/85 leading-relaxed text-sm">{fact.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* Navigation */}
              <TabNavigation currentTab="funfacts" onTabChange={setActiveTab} />
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          src={selectedImage.src}
          alt={selectedImage.alt}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </motion.section>
  )
}

export default AboutPage