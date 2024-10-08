import Link from 'next/link';

import { Header } from '@/components/Header';
import { About } from '@/templates/About';
import Contact from '@/templates/Contact';
import { Hero } from '@/templates/Hero';
import { Projects } from '@/templates/Projects';
import { Skills } from '@/templates/Skills';
import { Templates } from '@/templates/Templates';
import { HomeIcon } from '@heroicons/react/24/solid';

export default function Home() {
  return (
    <div
      className='scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#1f4b99]/80 z-0 h-screen snap-y snap-mandatory
    overflow-x-hidden overflow-y-scroll bg-[rgb(36,36,36)] text-white
    '
    >
      <Header />

      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>
      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>
      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      {/* Templates */}
      <section id='templates' className='snap-start'>
        <Templates />
      </section>

      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects />
      </section>
      {/* Contact Me */}
      <section id='contact' className='snap-start'>
        <Contact />
      </section>

      <Link href='#hero' passHref>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <HomeIcon className='h-5 w-5 animate-pulse' />
          </div>
        </footer>
      </Link>
    </div>
  );
}
