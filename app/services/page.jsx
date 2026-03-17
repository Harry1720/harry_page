"use client"
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import DateTime from "@/components/DateTime";
import BackToTop from "@/components/BackToTop";
import DesignCredit from "@/components/DesignCredit";
import { ArrowUpRight, X, ExternalLink, FileText } from "lucide-react";

const categories = ["All", "IT Subjects", "Other Subjects", "Supplementary"];
const fullMaterialsUrl = "https://github.com/Harry1720/Courses_Material";

// ─── Course Data ───────────────────────────────────────────────────────────────
// Replace driveId with the real Google Drive file ID from your share link.
// Share link:  https://drive.google.com/file/d/DRIVE_FILE_ID/view?usp=sharing
// Embed link:  https://drive.google.com/file/d/DRIVE_FILE_ID/preview  (auto-generated)
const courses = [
  {
    id: 1,
    code: "01",
    title: "Data Structures & Algorithms - Visual Recap",
    category: "IT Subjects",
    format: "Slides",
    pages: 28,
    tags: ["DSA", "Semester 3"],
    year: "2024",
    driveId: "YOUR_DRIVE_FILE_ID",
  },
  {
    id: 2,
    code: "02",
    title: "Database Systems - SQL Queries & Indexing",
    category: "IT Subjects",
    format: "Written Notes",
    pages: 16,
    tags: ["DBMS", "Lab"],
    year: "2024",
    driveId: "YOUR_DRIVE_FILE_ID",
  },
  {
    id: 3,
    code: "03",
    title: "Operating Systems - Process & Memory Summary",
    category: "IT Subjects",
    format: "Cheat Sheet",
    pages: 9,
    tags: ["OS", "Final Review"],
    year: "2024",
    driveId: "YOUR_DRIVE_FILE_ID",
  },
  {
    id: 4,
    code: "04",
    title: "Linear Algebra - Matrix Operations & Eigenvalues",
    category: "Other Subjects",
    format: "Cheat Sheet",
    pages: 6,
    tags: ["Math", "Core"],
    year: "2023",
    driveId: "YOUR_DRIVE_FILE_ID",
  },
  {
    id: 5,
    code: "05",
    title: "Physics Mechanics - Core Formulas & Derivations",
    category: "Other Subjects",
    format: "Written Notes",
    pages: 12,
    tags: ["Physics", "Chapter 1-4"],
    year: "2023",
    driveId: "YOUR_DRIVE_FILE_ID",
  },
  {
    id: 6,
    code: "06",
    title: "English Academic Writing - Essay Structure Guide",
    category: "Supplementary",
    format: "Written Notes",
    pages: 8,
    tags: ["English", "Assignment"],
    year: "2023",
    driveId: "YOUR_DRIVE_FILE_ID",
  },
];

// ─── Row item ──────────────────────────────────────────────────────────────────
const CourseRow = ({ course, index, onOpen }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.28, delay: index * 0.04, ease: "easeOut" }}
    whileHover={{ x: 8 }}
    onClick={() => onOpen(course)}
    className="group relative flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 py-5 sm:py-6 px-4 sm:px-6 transition-colors hover:bg-white/5 cursor-pointer"
  >
    {/* Left cluster */}
    <div className="flex items-center gap-5 sm:gap-8 min-w-0">
      <span className="font-mono text-accent/50 text-sm shrink-0 hidden md:inline-block">
        {(index + 1).toString().padStart(2, "0")}
      </span>
      <div className="min-w-0">
        <h3 className="text-lg sm:text-2xl md:text-[28px] font-bold text-white/85 group-hover:text-accent transition-colors duration-300">
          {course.title}
        </h3>
        <div className="flex items-center gap-3 mt-2 text-xs sm:text-sm text-white/50 font-mono">
          <span className="flex items-center gap-1.5">
            <FileText size={14} />
            {course.format}
          </span>
          <span aria-hidden="true">•</span>
          <span>{course.pages} Pages</span>
        </div>
      </div>
    </div>

    {/* Right cluster */}
    <div className="flex items-center gap-3 sm:gap-5 mt-4 md:mt-0 ml-0 md:ml-4 shrink-0">
      <span className="hidden lg:inline-block px-3 py-1 rounded-full border border-white/20 text-xs text-white/60 font-mono">
        {course.category}
      </span>
      <div className="hidden md:flex items-center gap-2">
        {course.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-md border border-transparent text-xs font-mono text-white/55 bg-white/5 group-hover:border-accent/30 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
      <span className="hidden xl:inline-block font-mono text-sm text-white/35">
        {course.year}
      </span>
      {/* Arrow – reveals on hover */}
      <div className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden md:block">
        <ArrowUpRight className="text-accent" size={22} />
      </div>
    </div>
  </motion.div>
);

// ─── Page ──────────────────────────────────────────────────────────────────────
const CoursesPage = () => {
  const [activeDoc, setActiveDoc] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleOpen = (doc) => {
    if (isMobile) {
      window.open(
        `https://drive.google.com/file/d/${doc.driveId}/view?usp=sharing`,
        "_blank",
        "noreferrer"
      );
    } else {
      setActiveDoc(doc);
    }
  };

  const filteredCourses = courses.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

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
          {/* ── Scrolling marquee header ── */}
          <div className="relative overflow-hidden -mt-20 pointer-events-none select-none">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{ x: [0, -1920] }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            >
              {[...Array(8)].map((_, i) => (
                <div key={i} className="flex items-center shrink-0">
                  <h2
                    className="text-[66px] sm:text-[96px] md:text-[132px] lg:text-[180px] font-extrabold uppercase text-amber-50/50 select-none pr-8"
                    style={{ WebkitTextStroke: "2px rgba(255,255,255,0.6)" }}
                  >
                    STUDY NOTES & MATERIALS
                  </h2>
                  <span className="text-[66px] sm:text-[96px] md:text-[132px] lg:text-[180px] font-extrabold uppercase text-amber-50/30 select-none pr-8 shrink-0">
                    .
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Sub-heading ── */}
          <div className="space-y-3">
            <p className="font-mono text-[13px] text-white/70 uppercase tracking-widest">
              A personal archive of course materials & notes
            </p>
            <div className="w-full h-px bg-white/40 mb-8" />
          </div>

          {/* ── Controls / Filter tabs ── */}
          <div className="relative z-20 mb-10 ">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {categories.map((category) => {
                  const isActive = activeCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`px-4 sm:px-6 py-2 rounded-full font-mono text-xs sm:text-sm transition-all duration-300 ${
                        isActive
                          ? "bg-accent text-primary font-bold shadow-[0_0_15px_rgba(64,196,184,0.3)]"
                          : "border border-white/20 text-white/60 hover:border-accent hover:text-white"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>

              <a
                href={fullMaterialsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-4 py-2 font-mono text-xs text-accent transition-colors hover:bg-accent hover:text-primary sm:text-sm"
              >
                View full materials
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* ── Archive list ── */}
          <div className="w-full border-t border-white/10">
            <AnimatePresence mode="popLayout">
              {filteredCourses.map((course, i) => (
                <CourseRow
                  key={course.id}
                  course={course}
                  index={i}
                  onOpen={handleOpen}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.section>

      {/* ── Document modal (desktop only) ── */}
      <AnimatePresence>
        {activeDoc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-70 bg-black/75 backdrop-blur-sm px-4 py-6 flex items-center justify-center"
            onClick={() => setActiveDoc(null)}
          >
            <motion.div
              initial={{ y: 24, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 24, opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.24 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-[88vh] rounded-2xl border border-white/15 overflow-hidden bg-secondary flex flex-col"
            >
              {/* Modal header bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 shrink-0">
                <div>
                  <p className="font-mono text-accent/70 text-xs">{activeDoc.category}</p>
                  <h3 className="text-white font-semibold text-base leading-snug">{activeDoc.title}</h3>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={`https://drive.google.com/file/d/${activeDoc.driveId}/view?usp=sharing`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/20 text-white/70 hover:text-accent hover:border-accent/50 transition-colors text-sm font-mono"
                    title="Open in Google Drive"
                  >
                    <ExternalLink size={14} />
                    <span className="hidden sm:inline">Open in Drive</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setActiveDoc(null)}
                    className="w-9 h-9 rounded-full border border-white/20 bg-white/5 text-white flex items-center justify-center hover:bg-white/15 transition-colors"
                    aria-label="Close document viewer"
                  >
                    <X size={17} />
                  </button>
                </div>
              </div>

              {/* Iframe viewer */}
              <iframe
                src={`https://drive.google.com/file/d/${activeDoc.driveId}/preview`}
                className="w-full flex-1"
                allow="autoplay"
                title={activeDoc.title}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <DesignCredit />
    </>
  );
};

export default CoursesPage;