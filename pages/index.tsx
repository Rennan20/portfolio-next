import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/solid";
import Head from "next/head";
import Templates from "@/components/Templates";

const inter = Inter({ subsets: ["latin"] });
type Props = {};
const Home = ({}: Props) => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0
    overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#1f4b99]/80
    "
    >
      <Head>
        <title>Rennan&apos;s Portfolio</title>
      </Head>
      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Templates */}
      <section id="templates" className="snap-start">
        <Templates />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <Link href="#hero" passHref>
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <HomeIcon className="h-5 w-5 animate-pulse" />
          </div>
        </footer>
      </Link>
    </div>
  );
};
export default Home;
