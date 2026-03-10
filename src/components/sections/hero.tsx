"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaLaravel,
  FaGitAlt
} from "react-icons/fa"

const icons = [FaReact, FaNodeJs, FaDocker, FaLaravel, FaGitAlt]

function random(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export default function Hero() {

  const [positions, setPositions] = useState<
    { x: number; y: number; size: number }[]
  >([])

  useEffect(() => {
    const generated = icons.map(() => ({
      x: random(5, 90),
      y: random(5, 90),
      size: random(50, 90)
    }))

    setPositions(generated)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-dark">

      {/* FLOATING BLOB */}
      <motion.div
        animate={{
          x: [0, 150, -150, 0],
          y: [0, -100, 100, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute w-150 h-125 rounded-full bg-primary blur-[150px] opacity-30 -z-10"
      />

      {/* FLOATING ICONS */}
      {positions.map((pos, i) => {

        const Icon = icons[i]

        return (
          <motion.div
            key={i}
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`
            }}
            animate={{
              x: [0, random(-100, 100), random(-100, 100), 0],
              y: [0, random(-100, 100), random(-100, 100), 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: random(20, 40),
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute text-primary/40 z-0"
          >
            <Icon size={pos.size} />
          </motion.div>
        )
      })}

      <div className="absolute inset-0 bg-dark/60 -z-10" />

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h1 className="text-5xl md:text-7xl font-bold leading-tight z-40">
            Hi, I'm <span className="text-primary z-1">Pandu</span>
          </h1>

          <p className="mt-6 text-light/70 max-w-xl z-40">
            Software Engineer passionate about building scalable,
            high-performance web applications with modern technologies.
          </p>

          <div className="mt-8 flex gap-4">

            <a
              href="#projects"
              className="inline-block px-6 py-3 bg-primary rounded-xl hover:bg-secondary transition hover:shadow-lg hover:shadow-primary/30 z-1">
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-light/30 rounded-lg hover:border-white transition hover:shadow-lg hover:shadow-white/20 z-1">
              Contact Me
            </a>

          </div>

        </motion.div>

        <div className="w-70 mx-auto backdrop-blur border-b-4 border-light/90 rounded-2xl shadow-[0_10px_40px_rgba(225,74,90,0.25)] shadow-primary/300">

          <div className="relative w-full h-90 overflow-hidden rounded-xl">

            <Image
              src="/bg.png"
              alt="Project"
              fill
              className="object-scale-down"
            />

          </div>

        </div>

      </div>

    </section>
  )
}