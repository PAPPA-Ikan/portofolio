"use client"

import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-24 text-center scroll-mt-24 text-light"
    >

      {/* TITLE */}
      <h2 className="text-4xl font-bold mb-6">
        Get In <span className="text-primary">Touch</span>
      </h2>

      <p className="text-light/70 mb-12">
        Interested in working together? Feel free to reach out.
      </p>

      {/* INFO */}
      <div className="flex flex-col items-center gap-4 text-light/80 mb-12">

        <div className="flex items-center gap-3">
          <FaEnvelope className="text-primary" />
          <span>panduadiwijayakusumawardana@gmail.com</span>
        </div>

        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-primary" />
          <span>Surakarta, Indonesia</span>
        </div>

      </div>

      {/* SOCIAL */}
      <div className="flex justify-center gap-6 mb-12">

        <a
          href="https://github.com/PAPPA-Ikan"
          target="_blank"
          className="p-4 bg-card/70 backdrop-blur-lg border border-white/10 rounded-xl hover:border-primary/40 hover:scale-110 transition hover:shadow-lg hover:shadow-white/20">
          <FaGithub size={22} className="text-light" />
        </a>

        <a
          href="https://www.linkedin.com/in/pandu-adi-wijaya-kusuma-wardana"
          target="_blank"
          className="p-4 bg-card/70 backdrop-blur-lg border border-white/10 rounded-xl hover:border-primary/40 hover:scale-110 transition hover:shadow-lg hover:shadow-white/20">
          <FaLinkedin size={22} className="text-light" />
        </a>

      </div>

      {/* BUTTON */}
      <a
        href="https://www.linkedin.com/in/pandu-adi-wijaya-kusuma-wardana"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-primary rounded-xl hover:bg-secondary transition hover:shadow-lg hover:shadow-primary/30"
      >
        Get In Touch
      </a>

    </section>
  )
}