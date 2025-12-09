
import React from 'react';
import Section from './Section';
import { ServerIcon, CodeIcon } from './Icons';

const Education: React.FC = () => {
  return (
    <Section id="formation" title="La Formation BTS SIO">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Intro BTS SIO */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-lg text-slate-300">
            Le <strong className="text-purple-400">BTS SIO</strong> (Services Informatiques aux Organisations) est un diplôme d'État de niveau Bac+2 qui forme des professionnels de l'informatique capables de répondre aux besoins numériques des entreprises. Il se divise en deux spécialités distinctes.
          </p>
        </div>

        {/* Comparaison SISR vs SLAM */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* SISR Card */}
          <div className="bg-slate-800 p-8 rounded-lg shadow-lg border border-slate-700 hover:border-purple-500 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-purple-900/30 rounded-lg mr-4">
                <ServerIcon className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Option SISR</h3>
            </div>
            <p className="text-sm font-mono text-purple-300 mb-4">Solutions d’Infrastructure, Systèmes et Réseaux</p>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Cette option forme des spécialistes capables de gérer, administrer et sécuriser les infrastructures informatiques (serveurs, réseaux, postes clients).
            </p>
            <h4 className="font-semibold text-white mb-3">Au programme :</h4>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start"><span className="text-purple-500 mr-2">➜</span> Administration des systèmes (Windows, Linux)</li>
              <li className="flex items-start"><span className="text-purple-500 mr-2">➜</span> Configuration des réseaux (VLAN, Routage)</li>
              <li className="flex items-start"><span className="text-purple-500 mr-2">➜</span> Cybersécurité et supervision</li>
              <li className="flex items-start"><span className="text-purple-500 mr-2">➜</span> Virtualisation et Cloud Computing</li>
            </ul>
          </div>

          {/* SLAM Card */}
          <div className="bg-slate-800 p-8 rounded-lg shadow-lg border border-slate-700 hover:border-blue-500 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-900/30 rounded-lg mr-4">
                <CodeIcon className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Option SLAM</h3>
            </div>
            <p className="text-sm font-mono text-blue-300 mb-4">Solutions Logicielles et Applications Métiers</p>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Cette option est orientée vers le développement. Elle forme des professionnels capables de concevoir, développer et maintenir des applications logicielles.
            </p>
            <h4 className="font-semibold text-white mb-3">Au programme :</h4>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start"><span className="text-blue-500 mr-2">➜</span> Développement Web (Front & Back)</li>
              <li className="flex items-start"><span className="text-blue-500 mr-2">➜</span> Développement Mobile</li>
              <li className="flex items-start"><span className="text-blue-500 mr-2">➜</span> Gestion de Bases de Données (SQL)</li>
              <li className="flex items-start"><span className="text-blue-500 mr-2">➜</span> Cybersécurité des applications</li>
            </ul>
          </div>
        </div>

        {/* Débouchés et Métiers */}
        <div className="mt-16 pt-12 border-t border-slate-700">
            <h3 className="text-2xl font-bold text-center text-white mb-8">Les Métiers après le BTS</h3>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h4 className="text-xl font-semibold text-purple-400 mb-4 text-center md:text-left">Métiers SISR</h4>
                    <ul className="bg-slate-800/50 rounded-lg p-6 space-y-3">
                        <li className="text-slate-300">Administrateur Systèmes et Réseaux</li>
                        <li className="text-slate-300">Technicien Support / Helpdesk</li>
                        <li className="text-slate-300">Technicien d'Infrastructure</li>
                        <li className="text-slate-300">Pilote d'exploitation</li>
                        <li className="text-slate-300">Analyste Cybersécurité (Junior)</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xl font-semibold text-blue-400 mb-4 text-center md:text-left">Métiers SLAM</h4>
                    <ul className="bg-slate-800/50 rounded-lg p-6 space-y-3">
                        <li className="text-slate-300">Développeur Web (Fullstack, Front, Back)</li>
                        <li className="text-slate-300">Développeur d'Applications Mobiles</li>
                        <li className="text-slate-300">Analyste Programmeur</li>
                        <li className="text-slate-300">Technicien de maintenance applicative</li>
                        <li className="text-slate-300">Intégrateur Web</li>
                    </ul>
                </div>
            </div>
            <div className="text-center mt-8">
                 <p className="text-slate-500 italic">
                    Après le BTS, il est également possible de poursuivre ses études en Licence Professionnelle, en Bachelor ou en École d'Ingénieurs.
                 </p>
            </div>
        </div>

      </div>
    </Section>
  );
};

export default Education;
