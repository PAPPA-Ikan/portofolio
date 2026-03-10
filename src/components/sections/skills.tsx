// "use client"

// import { motion, useMotionValue, useTransform } from "framer-motion"
// import {
//   FaReact,
//   FaLaravel,
//   FaNodeJs,
//   FaDocker,
//   FaGitAlt,
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaBootstrap,
//   FaPhp,
//   FaJava,
//   FaPython,
//   FaUnity
// } from "react-icons/fa"

// import {
//   SiAstro,
//   SiNextdotjs,
//   SiMysql,
//   SiBlender,
//   SiKrita
// } from "react-icons/si"

// const icons = [
//   FaReact,
//   SiNextdotjs,
//   SiAstro,
//   FaLaravel,
//   FaPhp,
//   FaJs,
//   FaHtml5,
//   FaCss3Alt,
//   FaBootstrap,
//   SiMysql,
//   FaPython,
//   FaJava,
//   FaUnity,
//   FaDocker,
//   FaGitAlt,
// ]

// export default function TechStackOrbit() {

//   const radius = 140

//   const rotate = useMotionValue(0)

//   const counterRotate = useTransform(rotate, r => -r)

//   return (
//     <section
//       id=""
//       className="relative w-96 h-96 mx-auto scroll-mt-24"
//     >

//       {/* ORBIT RING */}
//       <div className="absolute inset-0 border border-primary/20 rounded-full" />

//       {/* CENTER */}
//       <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-light text-xl font-semibold bg-card/60 backdrop-blur-lg border border-white/10 px-6 py-3 rounded-xl shadow-lg">
//         Tech Stack
//       </div>

//       {/* ORBIT CONTAINER */}
//       <motion.div
//         className="absolute inset-0"
//         style={{ rotate }}
//         animate={{ rotate: 360 }}
//         transition={{
//           repeat: Infinity,
//           duration: 25,
//           ease: "linear"
//         }}
//       >
//         {icons.map((Icon, i) => {

//           const angle = (i / icons.length) * Math.PI * 2
//           const x = Math.cos(angle) * radius
//           const y = Math.sin(angle) * radius

//           return (
//             <div
//               key={i}
//               style={{
//                 transform: `translate(${x}px, ${y}px)`
//               }}
//               className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
//             >

//               <motion.div style={{ rotate: counterRotate }}>
//                 <div className="bg-card/70 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-lg hover:scale-110 hover:border-primary/40 transition">
//                   <Icon size={28} className="text-primary" />
//                 </div>
//               </motion.div>

//             </div>
//           )
//         })}
//       </motion.div>

//     </section>
//   )
// }