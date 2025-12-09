
import React from 'react';
import { GithubIcon, LinkedinIcon, DownloadIcon } from './Icons';

const Hero: React.FC = () => {
  // REMPLACEZ L'URL CI-DESSOUS PAR LE LIEN VERS VOTRE CV (Google Drive, Dropbox, etc.)
  const cvLink = "https://www.canva.com/design/DAGQ_jJNA24/JtaZfjCU79w6eOqdgbHH2w/view?utm_content=DAGQ_jJNA24&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h6e77ebb506";

  return (
    <section id="accueil" className="flex-grow flex items-center justify-center py-20 sm:py-24">
      <div className="text-center">
        <div className="relative w-40 h-40 mx-auto mb-6">
          <img 
            className="rounded-full w-full h-full object-cover border-4 border-purple-500 shadow-lg" 
            src="https://picsum.photos/seed/warren-doppia/200/200"
            alt="Portrait de Warren DOPPIA" 
          />
          <div className="absolute top-0 right-0 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900 animate-pulse" title="Disponible pour des opportunités"></div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Warren <span className="text-purple-400">DOPPIA</span>
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-slate-300 font-mono">
          &gt; Étudiant en BTS SIO Spécialité SISR
        </p>
        <p className="mt-2 text-md text-slate-400 max-w-2xl mx-auto">
          Solutions d’Infrastructure, Systèmes et Réseaux au Lycée Charles Foucauld.
          <br/>
          Passionné par la cybersécurité et l'administration système.
        </p>
        <div className="mt-8 flex justify-center items-center space-x-6">
          <a 
            href={cvLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
          >
            <DownloadIcon className="w-5 h-5 mr-2" />
            Télécharger mon CV
          </a>
          <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-transform transform hover:scale-110 duration-300">
                <GithubIcon className="w-8 h-8" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-transform transform hover:scale-110 duration-300">
                <LinkedinIcon className="w-8 h-8" />
              </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
