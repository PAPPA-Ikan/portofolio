import Navbar from "@/src/components/navbar";
import Footer from "@/src/components/footer";
import Hero from "@/src/components/sections/hero";
import About from "@/src/components/sections/about";
// import Skills from "@/src/components/sections/skills";
import Projects from "@/src/components/sections/projects";
import Contact from "@/src/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="space-y-32 pb-32">
        <Hero />
        <About />
        {/* <Skills /> */}
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}