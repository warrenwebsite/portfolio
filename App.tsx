
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import E5 from './components/E5';
import Projects from './components/Projects';
import Experience from './components/Experience';
import TechWatch from './components/TechWatch';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('accueil');

  const renderPage = () => {
    switch (currentPage) {
      case 'accueil':
        return <Hero />;
      case 'a-propos':
        return <About />;
      case 'competences':
        return <Skills />;
      case 'formation':
        return <Education />;
      case 'e5':
        return <E5 />;
      case 'projets':
        return <Projects />;
      case 'experiences':
        return <Experience />;
      case 'veille':
        return <TechWatch />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="container mx-auto px-6 md:px-12 flex-grow flex flex-col">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
