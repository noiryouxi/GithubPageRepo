import React from 'react';
import Introduction from '../components/Introduction';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import NotFound from './not-found';

const Home: React.FC = () => {
  return (
    <section>
      <Introduction />
      <Skills />
      <Projects />
      <NotFound />
    </section>
  );
};

export default Home;