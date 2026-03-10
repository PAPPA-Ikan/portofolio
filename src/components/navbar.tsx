"use client";

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const tabs = [
  { id: "home", label: "Home"},
  { id: "about", label: "About"},
  // { id: "tech", label: "Tech"},
  { id: "projects", label: "Projects"},
  { id: "contact", label: "Contact"},
]

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = tabs
      .map((tab) => document.getElementById(tab.id))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <header className="fixed top-0 w-full backdrop-blur border-b border-zinc-500 z-50">
      {/* <nav className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between"> */}
      <nav className=" px-6 py-4 flex justify-center">

        <div className="relative flex items-center space-x-2 bg-zinc-900 p-1 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActive(tab.id);
                document.getElementById(tab.id)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start"
                })
              }}
              className="relative px-4 py-2 text-sm rounded-full transition-colors">
                {active === tab.id && (
                  <motion.div 
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white rounded-lg "
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}

                <span className={`relative z-10 ${active === tab.id ? "text-black" : "text-zinc-400 hover:text-white"}`}>
                  {tab.label}
                </span>
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}