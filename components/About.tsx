
import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="a-propos" title="À Propos de moi">
      <div className="max-w-4xl mx-auto text-center leading-relaxed text-slate-300 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left space-y-4">
            <p>
                Actuellement en première année de <span className="text-purple-400 font-semibold">BTS SIO (Services Informatiques aux Organisations)</span> option <span className="text-purple-400 font-semibold">SISR</span> au lycée Charles Foucauld (Paris 18ème).
            </p>
            <p>
                J'ai obtenu mon <span className="font-semibold text-white">Baccalauréat Général</span> au Lycée George Sand à Domont (2021-2024), avec les spécialités <span className="font-semibold text-white">Numérique et Science Informatique (NSI)</span> et Anglais Monde Contemporain. Ce parcours m'a permis d'acquérir des bases solides en programmation et une bonne maîtrise de l'anglais technique.
            </p>
             <p>
                Mes centres d'intérêt incluent la pratique du sport, les jeux vidéo, et la pâtisserie (hobby personnel). Curieux et rigoureux, je m'intéresse particulièrement à la maintenance des infrastructures et à la sensibilisation à la cybersécurité.
            </p>
        </div>
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-purple-800/50">
            <ul className="space-y-3 text-left">
                <li><strong className="text-purple-400 w-24 inline-block">Nom:</strong> Warren DOPPIA</li>
                <li><strong className="text-purple-400 w-24 inline-block">Formation:</strong> BTS SIO - SISR</li>
                <li><strong className="text-purple-400 w-24 inline-block">École:</strong> Lycée Charles Foucauld</li>
                <li><strong className="text-purple-400 w-24 inline-block">Ville:</strong> Domont (95330)</li>
                <li><strong className="text-purple-400 w-24 inline-block">Langues:</strong> Anglais (B2+)</li>
            </ul>
        </div>
      </div>
    </Section>
  );
};

export default About;
