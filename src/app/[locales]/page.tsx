import Link from 'next/link';

import { Header } from '@/components/Header';
import LanguageChanger from '@/components/LanguageChanger';
import TranslationsProvider from '@/providers/translation';
import { About } from '@/templates/About';
import { Contact } from '@/templates/Contact';
import { Hero } from '@/templates/Hero';
import { Projects } from '@/templates/Projects';
import { Skills } from '@/templates/Skills';
import { Templates } from '@/templates/Templates';
import { HomeIcon } from '@heroicons/react/24/solid';

interface Props {
  params: {
    locales: string;
  };
}

export default async function Home({ params }: Props) {
  const { locales } = params;
  return (
    <TranslationsProvider locale={locales} namespaces={['translation']}>
      <div
        className='scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#1f4b99]/80 z-0 h-screen snap-y snap-mandatory
      overflow-x-hidden overflow-y-scroll bg-[rgb(36,36,36)] text-white'
      >
        <Header />
        <section id='hero' className='snap-start'>
          <Hero />
        </section>
        <section id='about' className='snap-center'>
          <About />
        </section>
        <section id='skills' className='snap-start'>
          <Skills />
        </section>
        <section id='templates' className='snap-start'>
          <Templates />
        </section>
        <section id='projects' className='snap-start'>
          <Projects />
        </section>
        <section id='contact' className='snap-start'>
          <Contact />
        </section>

        <footer className='sticky bottom-5 w-full'>
          <div className='flex items-center justify-center space-x-6'>
            <Link href='#hero' passHref>
              <HomeIcon className='h-5 w-5 animate-pulse cursor-pointer' />
            </Link>
            <div className='z-50'>
              <LanguageChanger />
            </div>
          </div>
        </footer>
      </div>
    </TranslationsProvider>
  );
}
