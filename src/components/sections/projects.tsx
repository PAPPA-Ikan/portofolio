"use client"

import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { projects, Project } from "@/src/data/projects"
import ProjectCard from "@/src/components/projects/ProjectCard"
import ProjectModal from "@/src/components/projects/ProjectModal"

export default function Projects() {

  const [active, setActive] = useState<Project | null>(null)

  return (
    <section
      id="projects"
      className="relative max-w-6xl mx-auto px-6 scroll-mt-24 text-light">
        
      <div  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl w-full h-125 bg-primary opacity-40 -z-10"/>

      {/* TITLE */}
      <h2 className="text-4xl font-bold mb-3">
        My <span className="text-primary">Projects</span>
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8">

        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            setActive={setActive}
          />
        ))}

      </div>

      <div className="flex justify-center mt-5">
        <a
            href="https://github.com/PAPPA-Ikan"
            target="_blank"
            className=" px-6 py-3 border border-white/10 rounded-full text-light/70 hover:text-primary hover:border-primary/700 transition hover:shadow-lg hover:shadow-br/70">
            Lihat Project Lainnya di GitHub →
        </a>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {active && (
          <ProjectModal
            active={active}
            setActive={setActive}
          />
        )}
      </AnimatePresence>

    </section>
  )
}