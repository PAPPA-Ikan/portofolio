"use client"

import { motion, useMotionValue, useTransform } from "framer-motion"
import {
  FaReact,
  FaLaravel,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaPhp,
  FaJava,
  FaPython,
  FaUnity
} from "react-icons/fa"

import {
  SiAstro,
  SiNextdotjs,
  SiMysql
} from "react-icons/si"

const icons = [
  FaReact,
  SiNextdotjs,
  SiAstro,
  FaLaravel,
  FaPhp,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  SiMysql,
  FaPython,
  FaJava,
  FaUnity,
  FaDocker,
  FaGitAlt,
]

export default function About() {

  const radius = 140
  const rotate = useMotionValue(0)
  const counterRotate = useTransform(rotate, r => -r)

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex items-center scroll-mt-[90px]"
    >
      <div className="max-w-6xl mx-auto px-6 py-24 text-light w-full">

        <h2 className="text-4xl font-bold mb-12">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <div>
            <p className="text-light/70 leading-relaxed mb-6">
              Saya adalah mahasiswa tingkat akhir Teknik Informatika
              Universitas Muhammadiyah Surakarta dengan fokus pada
              Front-End Development dan UI/UX Design.
            </p>

            <p className="text-light/70 leading-relaxed">
              Saya telah membangun berbagai aplikasi web modern
              menggunakan React, Next.js, dan TypeScript serta
              memiliki minat pada teknologi interaktif seperti
              Augmented Reality dan Artificial Intelligence.
            </p>
          </div>

          {/* ORBIT CONTAINER */}
          <div className="relative w-[360px] h-[360px] mx-auto">

            {/* ORBIT RING */}
            <div className="absolute inset-0 border border-primary/20 rounded-full" />

            {/* CENTER */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-light text-lg font-semibold bg-card/60 backdrop-blur-lg border border-white/10 px-5 py-2 rounded-xl shadow-lg">
              Tech Stack
            </div>

            {/* ORBIT */}
            <motion.div
              className="absolute inset-0"
              style={{ rotate }}
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 25,
                ease: "linear"
              }}
            >
              {icons.map((Icon, i) => {

                const angle = (i / icons.length) * Math.PI * 2
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius

                return (
                  <div
                    key={i}
                    style={{
                      transform: `translate(${x}px, ${y}px)`
                    }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  >

                    <motion.div style={{ rotate: counterRotate }}>
                      <div className="bg-card/70 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-lg hover:scale-110 hover:border-primary/40 transition">
                        <Icon size={26} className="text-primary" />
                      </div>
                    </motion.div>

                  </div>
                )
              })}
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  )
}