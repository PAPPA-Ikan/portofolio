"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Project } from "@/src/data/projects"

interface Props {
  active: Project | null
  setActive: (project: Project | null) => void
}

export default function ProjectModal({ active, setActive }: Props) {

  if (!active) return null

  return (
    <>
      {/* BACKDROP */}
      <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setActive(null)}
      />

      {/* MODAL */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-6">

        <motion.div
          layoutId={`card-${active.id}`}
          className="w-full max-w-3xl bg-zinc-900 rounded-2xl overflow-hidden"
        >

          <motion.div layoutId={`image-${active.id}`}>
            <Image
              src={active.image}
              alt={active.title}
              width={1200}
              height={600}
              className="w-full h-75 object-cover object-top"
            />
          </motion.div>

          <div className="p-8">

            <motion.h3
              layoutId={`title-${active.id}`}
              className="text-3xl font-bold"
            >
              {active.title}
            </motion.h3>

            <p className="text-zinc-400 mt-4 leading-relaxed">
              {active.description}
            </p>

            <button
              onClick={() => setActive(null)}
              className="mt-6 px-5 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition"
            >
              Close
            </button>

          </div>

        </motion.div>
      </div>
    </>
  )
}