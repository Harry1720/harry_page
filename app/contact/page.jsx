"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiTelegram,
} from "react-icons/si";
import DateTime from "@/components/DateTime";
import BackToTop from "@/components/BackToTop";
import DesignCredit from "@/components/DesignCredit";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/",
    icon: SiGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/",
    icon: SiLinkedin,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/",
    icon: SiFacebook,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/",
    icon: SiInstagram,
  },
  {
    name: "Telegram",
    href: "https://t.me/",
    icon: SiTelegram,
  },
];

const ContactPage = () => {
  return (
    <>
      <DateTime />
      <BackToTop />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
        }}
        className="relative z-10 min-h-screen py-12 2xl:py-24"
      >
        <div className="container mx-auto">
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
                    Contact with Harry
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
            <div className="w-full h-[1px] bg-white/40 mb-20" />
          </div>

          <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm ">
            <div className="relative border-b border-white/10 bg-black/20 px-4 py-3 sm:px-5">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500 shadow-sm shadow-red-500/40" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400 shadow-sm shadow-yellow-400/40" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/40" />
                    </div>
                    <div className="flex-1 text-center font-mono text-[11px] uppercase tracking-[0.28em] text-white/45 sm:text-xs">
                    harry@dev: ~/contact
                    </div>
                </div>
            </div>

            <div className="p-5 md:p-8 lg:p-10">
                <div className=" space-y-3 mb-15">
                <h1 className="h1">Get in Touch</h1>
                <p className="text-lg text-white/70">
                    Have a question or want to work together? Give me a connection and your feelings. I&apos;d love to hear from you.
                </p>
                </div>

                <div className="grid grid-cols-1 gap-7 xl:grid-cols-[1fr_1.28fr]">
                <div className="space-y-5">
                    <h3 className="mb-4 text-2xl font-semibold text-white">Contact Information</h3>
                    <div className="rounded-2xl border border-accent/10 bg-secondary/65 p-6 md:p-7">
                    <p className="mb-8 text-lg text-white/65">Fill up the form and I&apos;ll get back to you as soon as possible.</p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                        <span className="mt-1 text-accent">
                            <Mail size={26} />
                        </span>
                        <div>
                            <p className="font-semibold text-white">Email</p>
                            <p className="text-white/70">baohuynh4107@gmail.com</p>
                        </div>
                        </div>

                        <div className="flex items-start gap-4">
                        <span className="mt-1 text-accent">
                            <Phone size={26} />
                        </span>
                        <div>
                            <p className="font-semibold text-white">Phone</p>
                            <p className="text-white/70">+84 349 869 243</p>
                        </div>
                        </div>

                        <div className="flex items-start gap-4">
                        <span className="mt-1 text-accent">
                            <MapPin size={26} />
                        </span>
                        <div>
                            <p className="font-semibold text-white">Location</p>
                            <p className="text-white/70">An Hội Đông Ward, Hồ Chí Minh City</p>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div>
                    <h4 className="mb-4 text-2xl font-semibold text-white">Connect with me</h4>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-3 2xl:grid-cols-5">
                        {socialLinks.map((item) => {
                        const Icon = item.icon;

                        return (
                            <Link
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="group rounded-2xl border border-white/10 bg-secondary/65 px-4 py-5 text-center transition-all hover:-translate-y-1 hover:border-accent/60"
                            >
                            <Icon className="mx-auto mb-2 text-2xl text-accent transition-transform group-hover:scale-110" />
                            <span className="text-sm font-medium text-white/80">{item.name}</span>
                            </Link>
                        );
                        })}
                    </div>
                    </div>
                </div>

                <div className="rounded-2xl border border-accent/10 bg-secondary/65 p-6 md:p-8">
                    <form className="space-y-6">
                    <div>
                        <label className="mb-2 block font-semibold text-white" htmlFor="name">
                        Name
                        </label>
                        <input
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/45 outline-none transition-colors focus:border-accent/80"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-semibold text-white" htmlFor="email">
                        Email
                        </label>
                        <input
                        id="email"
                        type="email"
                        placeholder="Your Email"
                        className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/45 outline-none transition-colors focus:border-accent/80"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-semibold text-white" htmlFor="message">
                        Message
                        </label>
                        <textarea
                        id="message"
                        rows={6}
                        placeholder="Your Message"
                        className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/45 outline-none transition-colors focus:border-accent/80"
                        />
                    </div>

                    <button
                        type="submit"
                        className="flex w-full items-center justify-center gap-3 rounded-xl bg-accent px-5 py-3 text-lg font-semibold text-primary transition-all hover:bg-white  hover:-translate-y-2 duration-200"
                    >
                        <Send size={18} />
                        Send Message
                    </button>
                    </form>
                </div>
                </div>
            </div>
          </div>
        </div>
      </motion.section>
      <DesignCredit />
    </>
  );
};

export default ContactPage;
