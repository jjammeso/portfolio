
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

import Head from 'next/head';
import PitchVideo from '@/components/Pitch';
import Experience from '@/components/Experience';

const Home = () => {
  return (
    <>
      <Head>
        <title>Sonam's Portfolio</title>
        <meta name="description" content="Sonam's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
        <PitchVideo/>
        <About />
        <Skills />
        <Education />
        <Experience/>
        <Contact />
      </div>
    </>
  );
};

export default Home;