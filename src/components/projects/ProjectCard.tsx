"use client"

import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"
import { Project } from "@/src/data/projects"

interface Props {
  project: Project
  setActive: (project: Project) => void
}

export default function ProjectCard({ project, setActive }: Props) {

  return (

    <motion.div
      layoutId={`card-${project.id}`}
      onClick={() => setActive(project)}
      className="group relative cursor-pointer"
    >

      {/* GRADIENT GLOW */}
      <div
        className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary via-purple-300 to-purple-500 animate-gradient-border opacity-0 blur-sm transition duration-300 group-hover:opacity-100"/>

      {/* CARD */}
      <div className=" relative bg-card border border-white/10 rounded-2xl overflow-hidden transition duration-300 group-hover:border-primary/40 flex flex-col h-full">

        {/* IMAGE */}
        <div className="h-48 bg-dark flex items-center justify-center text-light/40">

          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <span>Gambar Project</span>
          )}

        </div>

        {/* CONTENT */}
        <div className="p-6 flex flex-col gap-4 flex-1">

          <h3 className="text-xl font-semibold text-light">
            {project.title}
          </h3>

          <p className="text-light/70 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
          <span className="text-primary text-sm font-medium">
            Read more →
          </span>

          <div className="flex flex-wrap gap-2 pt-2">

            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tech}
              </span>
            ))}

          </div>

          <div className="border-t border-white/10 mt-auto pt-4">

            <a
              href={project.github}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-light/70 hover:text-primary text-sm transition"
            >
              <FaGithub size={16} />
              Source Code
            </a>

          </div>

        </div>

      </div>

    </motion.div>
  )
}