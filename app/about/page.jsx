"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useMemo, useRef } from "react";
import { X } from "lucide-react";
import { VscVscode } from "react-icons/vsc";
import {
  SiBootstrap,
  SiCss3,
  SiCplusplus,
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiOpenai,
  SiPostman,
  SiPython,
  SiReact,
  SiSwagger,
  SiTailwindcss,
  SiVercel,
  SiVite,
} from "react-icons/si";
import DateTime from "@/components/DateTime";
import BackToTop from "@/components/BackToTop";

// Data cho Skills
const skills = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Python", icon: SiPython },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Vite", icon: SiVite },
  { name: "Git", icon: SiGit },
  { name: "SQL", icon: SiMysql },
  { name: "C/C++", icon: SiCplusplus },
  { name: "VS Code", icon: VscVscode },
  { name: "GitHub", icon: SiGithub },
  { name: "Netlify", icon: SiNetlify },
  { name: "Vercel", icon: SiVercel },
  { name: "MongoDB", icon: SiMongodb },
  { name: "AI Tools", icon: SiOpenai },
  { name: "Swagger", icon: SiSwagger },
  { name: "Postman", icon: SiPostman },
  { name: "Framer Motion", icon: SiFramer },
  { name: "Bootstrap", icon: SiBootstrap },
];

const skillRows = [
  skills.slice(0, 7),
  skills.slice(7, 14),
  skills.slice(14),
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
  {
    title: "Physics Teaching Assistant (Grade 11–12)",
    period: "2022-2024",
    description: "Assisted the teacher in explaining physics concepts and guiding Grade 11–12 students through problem-solving.",
    image: "/image/PhysicsAssist.png"
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
    image: "/image/UTH2.jpg"
  },
];

// Data cho Fun Facts
const funFacts = [
    {
    title: "Night City Images Collector",
    description: "I enjoy gazing at the city lights at night and often collect photos of it taken from different locations.",
    image: "/image/dark_city.jpg"
  },
  {
    title: "Academic Milestones",
    description: "I ranked first in my class in the grade 10 entrance exam, and scored 9/10 in Physics in the national high school graduation exam.",
    image: "/image/ts10.png"
  },
  {
    title: "Coding Muzik",
    description: "Listening to heartfelt sad songs when studying and coding.",
    image: "/image/sadsong.png"
  },
  {
    title: "TV Show Lover",
    description: "Love watching old TV programs, for instance: The Price Is Right, Wheel of Fortune, Road to mount Olympia..., especially national versions, and I also have done the homemade wheel of TPIR and WOF too.",
    image: "/image/wheel.png"
  },
  {
    title: "Course Materials",
    description: "I regularly create lecture notes for my subjects and share them both with my classmates and on my GitHub repository named 'Course Materials'.",
    image: "/image/courses_material.png"
  },
  {
    title: "Good Handwriting",
    description: "I enjoy gazing at the city lights at night and often collect photos of it taken from different locations.",
    image: "/image/dark_city.jpg"
  },  
];


const wordCloudItems = [
  { text: "HCM At Night", factIndex: 0, size: "text-lg", tone: "text-violet-200", weight: "font-semibold" },
  { text: "Course Materials", factIndex: 4, size: "text-3xl", tone: "text-accent", weight: "font-extrabold" },
  { text: "Open Sharing", factIndex: 4, size: "text-lg", tone: "text-white/80", weight: "font-medium" },
  { text: "Physics 9/10", factIndex: 1, size: "text-xl", tone: "text-amber-200", weight: "font-semibold" },
  { text: "Exam Spirit", factIndex: 1, size: "text-base", tone: "text-white/70", weight: "font-medium" },
  { text: "Sad Songs", factIndex: 2, size: "text-2xl", tone: "text-fuchsia-200", weight: "font-bold" },
  { text: "Focus Mode", factIndex: 2, size: "text-lg", tone: "text-cyan-200", weight: "font-semibold" },
  { text: "Homemade Wheel", factIndex: 3, size: "text-base", tone: "text-white/75", weight: "font-medium" },
  { text: "Late-night Coding", factIndex: 2, size: "text-base", tone: "text-white/70", weight: "font-medium" },
  { text: "Study Notes", factIndex: 4, size: "text-xl", tone: "text-emerald-200", weight: "font-semibold" },
  { text: "Gameshow Fan", factIndex: 3, size: "text-2xl", tone: "text-orange-200", weight: "font-bold" },
  { text: "Top Rank", factIndex: 1, size: "text-2xl", tone: "text-sky-200", weight: "font-bold" },
  { text: "City Lights", factIndex: 0, size: "text-3xl", tone: "text-teal-200", weight: "font-extrabold" },
  { text: "Urban Frames", factIndex: 0, size: "text-base", tone: "text-white/75", weight: "font-medium" },
];

// Component Modal xem ảnh
const ImageModal = ({ src, alt, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

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
        aria-label="Close modal"
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

// Sections data for Table of Contents
const sections = [
  { id: "skills", label: "Tech Stack And Tools" },
  { id: "activities", label: "My Activities" },
  { id: "education", label: "Education Journey" },
  { id: "funfacts", label: "Fun Facts" }
];

// Component Table of Contents
const TableOfContents = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="hidden xl:block fixed right-8 top-1/2 -translate-y-1/2 z-30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative transition-all duration-300 ${
        isHovered ? 'bg-secondary/50  rounded-xl border border-accent/50 px-6 py-4 shadow-lg' : ''
      }`}>
        {isHovered && (
          <motion.p 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-white text-xl mb-4 font-bold"
          >
            Contents
          </motion.p>
        )}
        <nav className="space-y-3">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group flex items-center gap-3 w-full transition-all"
            >
              {/* Dash/Line indicator */}
              <div className="flex items-center">
                <motion.div
                  initial={false}
                  animate={{
                    width: activeSection === section.id ? '24px' : '15px',
                    backgroundColor: activeSection === section.id ? '#40c4b8' : 'rgba(255, 255, 255, 0.4)'
                  }}
                  transition={{ duration: 0.1 }}
                  className={`h-[2px] rounded-full`}
                />
              </div>
              
              {/* Text label - shows on hover */}
              {isHovered && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`text-sm whitespace-nowrap transition-colors ${
                    activeSection === section.id
                      ? "text-accent font-semibold"
                      : "text-white/70 group-hover:text-white"
                  }`}
                >
                  {section.label}
                </motion.span>
              )}
            </button>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

const SkillMarqueeRow = ({ items, reverse = false, baseDuration = 20 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const duplicatedItems = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <motion.div
        animate={{ x: reverse ? [-1000, 0] : [0, -1000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: isHovered ? baseDuration * 30 : baseDuration,
          },
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="flex w-max gap-5 py-3"
      >
        {duplicatedItems.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div
              key={`${skill.name}-${index}`}
              className="flex items-center gap-5 rounded-full bg-tertiary px-4 py-2"
            >
              <Icon className="text-2xl text-white" />
              <span className="text-[20px] font-medium text-white/90">{skill.name}</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

const AboutPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFactIndex, setActiveFactIndex] = useState(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isFunFactsInView, setIsFunFactsInView] = useState(false);
  const funFactsRef = useRef(null);

  const cloudLayout = useMemo(() => {
    const basePositions = [
      { x: 20, y: 14 },
      { x: 46, y: 10 },
      { x: 71, y: 14 },
      { x: 31, y: 30 },
      { x: 58, y: 28 },
      { x: 83, y: 34 },
      { x: 18, y: 43 },
      { x: 46, y: 48 },
      { x: 70, y: 45 },
      { x: 28, y: 62 },
      { x: 55, y: 64 },
      { x: 80, y: 62 },
      { x: 22, y: 80 },
      { x: 48, y: 84 },
      { x: 73, y: 80 },
    ];

    return wordCloudItems.map((item, index) => {
      const base = basePositions[index % basePositions.length];
      const jitterX = ((index * 17) % 9) - 4;
      const jitterY = ((index * 23) % 11) - 5;
      const rotation = ((index * 13) % 13) - 6;

      return {
        ...item,
        style: {
          left: `${base.x + jitterX}%`,
          top: `${base.y + jitterY}%`,
          transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
        },
      };
    });
  }, []);

  useEffect(() => {
    const query = window.matchMedia("(hover: none), (pointer: coarse)");
    const updateInteractionMode = () => setIsTouchDevice(query.matches);

    updateInteractionMode();

    if (query.addEventListener) {
      query.addEventListener("change", updateInteractionMode);
    } else {
      query.addListener(updateInteractionMode);
    }

    return () => {
      if (query.removeEventListener) {
        query.removeEventListener("change", updateInteractionMode);
      } else {
        query.removeListener(updateInteractionMode);
      }
    };
  }, []);

  useEffect(() => {
    const target = funFactsRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFunFactsInView(entry.isIntersecting);
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
      observer.disconnect();
    };
  }, []);

  const activeFact = funFacts[activeFactIndex];

  const handleWordHover = (factIndex) => {
    if (!isTouchDevice) {
      setActiveFactIndex(factIndex);
    }
  };

  const handleWordSelect = (factIndex) => {
    setActiveFactIndex(factIndex);
  };

  const showFunFactsBackground = isFunFactsInView && Boolean(activeFact?.image);

  return (
    <>
      <DateTime />
      <BackToTop />
      <TableOfContents />

      <div
        aria-hidden="true"
        className={`pointer-events-none fixed inset-0 z-0 transition-opacity duration-500 ${showFunFactsBackground ? "opacity-100" : "opacity-0"}`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${activeFact.image})` }}
        />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      <motion.section
        initial={{opacity:0}}
        animate={{
          opacity:1,
          transition:{delay:1.5, duration:0.4, ease:"easeIn"}
        }}
        className="relative z-10 min-h-screen py-12 2xl:py-24 overflow-hidden"
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
                    I&apos;m a passionate <span className="text-accent font-semibold">Frontend Developer</span> who loves crafting beautiful and intuitive user interfaces.
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
                    <span className="text-accent font-semibold">&quot;First, solve the problem. Then, write the code.&quot;</span>
                    <span className="block text-sm text-white/60 mt-2">— John Johnson</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Section - Marquee Rows */}
          <motion.div 
            id="skills"
            initial={{y: 20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative left-1/2 right-1/2 -mx-[50vw] w-screen mb-16 backdrop-blur-sm rounded-2xl p-6 md:p-8"
          >
            <h3 className="h1 mb-8 text-center">Tech Stack And Tools</h3>
            <div className="space-y-3 w-full px-2 md:px-6">
              {skillRows.map((row, index) => (
                <SkillMarqueeRow
                  key={index}
                  items={row}
                  reverse={index % 2 === 1}
                  baseDuration={10 + index * 3}
                />
              ))}
            </div>
          </motion.div>


          {/* Education Section - Horizontal Timeline with Hover */}
          <motion.div 
            id="education"
            initial={{y: 20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 mt-32 bg-secondary/40 backdrop-blur-sm rounded-2xl p-8"
          >
            <h3 className="h1 mb-12 text-center">Education Journey</h3>
            <div className="relative px-4">
              {/* Horizontal Timeline Line - Hidden on mobile */}
              <div className="hidden lg:block absolute top-1.5 left-0 right-0 h-[2px] bg-accent/30"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{y: 30, opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    viewport={{ once: true }}
                    transition={{delay:index * 0.2, duration:0.5}}
                    className="relative group"
                  >
                    {/* Timeline Dot - Hidden on mobile */}
                    <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-primary z-20 group-hover:scale-150 transition-transform"></div>
                    
                    {/* Image Card with Text Overlay */}
                    <div className="lg:pt-8">
                      <div 
                        className="relative h-64 lg:h-56 rounded-xl overflow-hidden cursor-pointer border border-accent/20 hover:border-accent transition-all"
                        onClick={() => setSelectedImage({ src: edu.image, alt: edu.school })}
                      >
                        {/* Background Image */}
                        <Image
                          src={edu.image}
                          alt={edu.school}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        
                        {/* Text Overlay - Always visible on mobile, hover on desktop */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 lg:p-5">
                          <h4 className="font-bold text-base lg:text-lg text-white mb-2">{edu.school}</h4>
                          <p className="text-accent text-xs lg:text-sm font-mono mb-2">{edu.period}</p>
                          <p className="text-white/90 text-sm leading-relaxed">{edu.degree}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Experience Section */}
          <motion.div 
            id="activities"
            initial={{y: 20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 mt-40"
          >
            <h3 className="h1 mb-8 text-center">My Activities</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{x: -50, opacity:0}}
                  whileInView={{x:0, opacity:1}}
                  viewport={{ once: true }}
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
            </div>
          </motion.div>


          {/* Fun Facts Section */}
          <motion.div 
            id="funfacts"
            ref={funFactsRef}
            initial={{y: 20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-40 xl:-mb-35"
          >
            <div className="p-2 sm:p-4">
              <h3 className="h1 mb-2 text-center">Facts about me</h3>
              <p className="text-center text-white/65 text-sm mb-8">
                {isTouchDevice ? "Tap a word to reveal its story" : "Hover a word to reveal its story"}
              </p>

              <div className="grid grid-cols-1 xl:grid-cols-[1.45fr_1fr] gap-6 lg:gap-8 items-stretch">
                <div className="relative min-h-[420px] lg:min-h-[520px] rounded-2xl  bg-gradient-to-br from-tertiary/65 via-primary/35 to-secondary/65 overflow-hidden">
                  <div className="absolute -top-16 -left-12 w-56 h-56 bg-accent/15 blur-3xl rounded-full" />
                  <div className="absolute bottom-8 right-8 w-52 h-52 bg-cyan-300/10 blur-3xl rounded-full" />
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,.45) 1px, transparent 0)", backgroundSize: "18px 18px" }} />

                  <div className="absolute inset-0 p-4 sm:p-6">
                    {cloudLayout.map((item, index) => {
                      const isActive = item.factIndex === activeFactIndex;

                      return (
                        <button
                          key={`${item.text}-${index}`}
                          type="button"
                          onMouseEnter={() => handleWordHover(item.factIndex)}
                          onFocus={() => handleWordHover(item.factIndex)}
                          onClick={() => handleWordSelect(item.factIndex)}
                          className={`absolute whitespace-nowrap rounded-full px-3 py-1 transition-all duration-200 ${item.size} ${item.tone} ${item.weight} ${isActive ? "bg-accent/25 ring-1 ring-accent/70 shadow-lg shadow-accent/20" : "bg-black/20 hover:bg-black/35"}`}
                          style={item.style}
                          aria-label={`Show fact: ${item.text}`}
                        >
                          {item.text}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <motion.div
                  key={activeFact.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="rounded-2xl border border-accent/20 bg-gradient-to-b from-secondary/70 to-tertiary/70 overflow-hidden h-full"
                >
                  <div
                    className="relative h-64 md:h-72 cursor-pointer"
                    onClick={() => setSelectedImage({ src: activeFact.image, alt: activeFact.title })}
                  >
                    <Image
                      src={activeFact.image}
                      alt={activeFact.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      {/* <p className="text-xs uppercase tracking-wider text-white/70 mb-1">Current Highlight</p> */}
                      <h4 className="text-white text-2xl font-bold leading-tight">{activeFact.title}</h4>
                    </div>
                  </div>

                  <div className="p-6 md:p-7">
                    <p className="text-white/85 leading-relaxed text-[15px]">{activeFact.description}</p>
                    <button
                      type="button"
                      onClick={() => setSelectedImage({ src: activeFact.image, alt: activeFact.title })}
                      className="mt-5 text-sm text-accent font-semibold hover:text-white transition-colors"
                    >
                      View full image
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
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
    </>
  )
}

export default AboutPage