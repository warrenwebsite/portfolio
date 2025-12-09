
import React from 'react';
import Section from './Section';
import { CodeIcon, DatabaseIcon, ServerIcon, NetworkIcon, ToolIcon, SecurityIcon } from './Icons';

interface Skill {
  name: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
  icon: React.ReactElement;
}

const skillsData: SkillCategory[] = [
  {
    title: "Programmation",
    skills: [{ name: "HTML / CSS" }, { name: "PHP" }, { name: "Python" }, { name: "C" }],
    icon: <CodeIcon className="w-8 h-8" />
  },
  {
    title: "Systèmes & Serveurs",
    skills: [{ name: "Windows Client/Serveur" }, { name: "Linux Client/Serveur" }, { name: "Active Directory" }, { name: "DNS / DHCP" }],
    icon: <ServerIcon className="w-8 h-8" />
  },
  {
    title: "Réseaux",
    skills: [{ name: "TCP-IP, Modèle OSI" }, { name: "Commutateurs & Routeurs" }, { name: "VLAN" }, { name: "HTTP / DHCP" }],
    icon: <NetworkIcon className="w-8 h-8" />
  },
  {
    title: "Outils & Virtualisation",
    skills: [{ name: "VirtualBox" }, { name: "Packet Tracer" }, { name: "Gestion d'Incidents" }, { name: "Maquettage infrastructure" }],
    icon: <ToolIcon className="w-8 h-8" />
  },
  {
    title: "Bases de Données",
    skills: [{ name: "MySQL" }, { name: "SQL" }],
    icon: <DatabaseIcon className="w-8 h-8" />
  },
  {
    title: "Cybersécurité & Droit",
    skills: [{ name: "RGPD & CNIL" }, { name: "12 règles sécurité PME" }, { name: "Sensibilisation utilisateurs" }],
    icon: <SecurityIcon className="w-8 h-8" />
  },
];

const SkillCard: React.FC<{ category: SkillCategory }> = ({ category }) => (
    <div className="bg-slate-800 rounded-lg p-6 shadow-lg hover:shadow-purple-500/20 border border-slate-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center mb-4 text-purple-400">
            {category.icon}
            <h3 className="text-xl font-bold ml-4 text-white">{category.title}</h3>
        </div>
        <ul className="space-y-2">
            {category.skills.map((skill, index) => (
                <li key={index} className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="text-slate-300">{skill.name}</span>
                </li>
            ))}
        </ul>
    </div>
);


const Skills: React.FC = () => {
  return (
    <Section id="competences" title="Compétences Techniques">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((category, index) => (
          <SkillCard key={index} category={category} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
