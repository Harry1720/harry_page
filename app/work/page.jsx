"use client"
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import DateTime from "@/components/DateTime";
import BackToTop from "@/components/BackToTop";
import DesignCredit from "@/components/DesignCredit";
import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { X, ExternalLink } from "lucide-react";

const moreProjects = "https://github.com/Harry1720?tab=repositories";

// data
const projects = [
  {
    id: 1,
    code: "01",
    title: "Car Sales & Management Web",
    // year: "2025",
    // summary: "Accessible Travel for people with special needs",
    description:
      "This is a web-based car management system for VinFast dealerships, providing functionality for car browsing, deposits, and administration.",
    image: "/image/car_management.png",
    github: "https://github.com/Harry1720/Car-Management",
    link: "https://carharrycoder.netlify.app/",
    teamSize: 5,
    tech: ["React.js", "CSS", "Vite", "Cloudinary"],
  },
  {
    id: 2,
    code: "02",
    title: "VietNam Travel Guide",
    // year: "2025",
    // summary: "Website Design for a premium safety wear brand",
    description:
      "A comprehensive Vietnam travel guide website designed to be a trusted companion for travelers, enabling them to easily discover destinations and share their experiences through blogs while exploring and enjoying journeys across the country.",
    image: "/image/travel.png",
    github: "https://github.com/Harry1720/Vietnam-Travel-Guide",
    link: "/",
    teamSize: 5,
    tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "PHP", "MySQL", "Cloudinary"],
  },
  {
    id: 3,
    code: "03",
    title: "Disaster Warning",
    // year: "2024",
    // summary: "Factory Management System",
    description:
      "A comprehensive Disaster Warning System designed to predict, manage, and alert users about natural hazards, consisting of three main components—AI, Backend, and Frontend—with real-time user tracking and map-based location visualization.",
    image: "/image/disaster.png",
    github: "https://github.com/Harry1720/DisasterWarning",
    link: "/",
    teamSize: 6,
    tech: ["React", "TypeScript", "Vite", "Leaflet", "MUI", "Ant Design", "Chart.js", "Java Spring Boot", "ModelMapper", "Mail Service", "Python", "Cloudinary", "Swagger"],
  },
  {
    id: 4,
    code: "04",
    title: "Auto-reply Email With LLM & RAG",
    // year: "2024",
    // summary: "Re-design for the AGODA Website",
    description:
      "Developed a smart email assistant system utilizing Large Language Models and Retrieval-Augmented Generation to automatically generate personalized reply drafts by analyzing and learning writing styles from the user's sent email history.",
    image: "/image/mail_LLM.png",
    github: "https://github.com/Harry1720/AppLLM_AutoReplyEmail_FE",
    link: "/",
    teamSize: 2,
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Python", "FastAPI", "Swagger", "Uvicorn", "Supabase", "pgvector", "Llama 3.3 70B", "Groq API", "HuggingFace", "LangChain", "LangGraph", "Gmail API", "Google OAuth 2.0", "JWT",],
  },
];

const WorkPage = () => {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    if (!activeProject) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, [activeProject]);

  return (
    <>
      <DateTime />
      <BackToTop />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.8, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-screen py-24"
      >
        <div className="container mx-auto w-full">
          <div className="relative overflow-hidden -mt-20">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{ x: [0, -1920] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...Array(8)].map((_, i) => (
                <div key={i} className="flex items-center shrink-0">
                  <h2
                    className="text-[66px] sm:text-[96px] md:text-[132px] lg:text-[180px] font-extrabold uppercase text-amber-50/50 select-none pr-8"
                    style={{ WebkitTextStroke: "2px rgba(255,255,255,0.6)" }}
                  >
                    PROJECTS
                  </h2>
                  <span className="text-[66px] sm:text-[96px] md:text-[132px] lg:text-[180px] font-extrabold uppercase text-amber-50/30 select-none pr-8 shrink-0">
                    .
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className=" space-y-3">
            <p className="font-mono text-[13px] text-white/70 uppercase tracking-[0.1em]">
              A curated collection of my works
            </p>
            <div className="w-full h-[1px] bg-white/40 mb-10" />
          </div>

          <div className="mb-10 flex justify-end relative z-40 pointer-events-auto">
            <a
              href={moreProjects}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-fit items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-4 font-mono text-xs text-accent transition-colors hover:bg-accent hover:text-primary sm:h-11 sm:text-sm"
            >
              View all projects
              <ExternalLink size={14} />
            </a>            
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 clear-both">
            {projects.map((project) => (
              <button
                key={project.id}
                type="button"
                onClick={() => setActiveProject(project)}
                className='group relative text-left rounded-2xl overflow-hidden min-h-[480px] sm:min-h-[520px] border border-accent/20 bg-gradient-to-b from-accent/30 to-white/60'
              >
                <div className="relative h-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-[1.05] group-hover:opacity-60"
                  />
                </div>

                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/20" />

                <div className="absolute left-3 right-3 bottom-2 z-10">
                  <p className="text-white/95 text-[120px] md:text-[136px] font-extrabold leading-[1.0] tracking-[-0.06em]">
                    {project.id}
                  </p>
                  <div className="-mt-2">
                    <h3 className="text-white text-[13px] font-semibold uppercase tracking-[0.06em]">
                      {project.title}
                    </h3>
                    {/* <p className="text-white text-[14px] leading-snug">{project.summary}</p> */}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-70 bg-black/70 backdrop-blur-[2px] px-4 py-8"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.24 }}
              onClick={(event) => event.stopPropagation()}
              className="mx-auto relative w-full max-w-6xl h-[86vh] rounded-2xl border border-white/15 overflow-hidden"
            >
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/62" />

              <button
                type="button"
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full border border-white/25 bg-black/45 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                onClick={() => setActiveProject(null)}
                aria-label="Close project modal"
              >
                <X size={18} />
              </button>

              <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-8 lg:p-10">
                <div className="max-w-4xl text-white">
                  <h3 className="text-[34px] md:text-[48px] font-extrabold leading-[1.02] mb-2">
                    {activeProject.title}
                  </h3>
                  <div className="flex items-center gap-6 mb-4">
                    {/* <p className="text-white/80 text-[22px]">{activeProject.year}</p> */}
                    <p className="text-white/80 text-[22px]">
                      Team size: {activeProject.teamSize}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {activeProject.link !== "/" && (
                      <Link
                        className="btn btn-sm btn-accent gap-2 h-[50px]! transition-all hover:-translate-y-1"
                        href={activeProject.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <MdArrowOutward className="text-xl" />
                        <span>Live Project</span>
                      </Link>
                    )}

                    {activeProject.github && (
                      <Link
                        className="btn btn-sm btn-white gap-2 h-[50px]! transition-all hover:-translate-y-1"
                        href={activeProject.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaGithub className="text-xl" />
                        <span>GitHub Link</span>
                      </Link>
                    )}
                  </div>

                  <p className="text-[17px] md:text-[20px] text-white/92 leading-relaxed mb-6 max-w-4xl">
                    {activeProject.description}
                  </p>

                  <p className="text-white/90 text-[20px] font-semibold mb-3">Tech Stack:</p>
                  <ul className="flex flex-wrap gap-3">
                    {activeProject.tech.map((item) => (
                      <li
                        key={item}
                        className="h-10 px-5 rounded-full border border-white/35 bg-black/35 text-white flex items-center transition-all hover:-translate-y-1"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <DesignCredit />
    </>
  );
};

export default WorkPage