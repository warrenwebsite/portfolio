
import React from 'react';
import Section from './Section';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Stage chez Nintendo",
      company: "Nintendo",
      period: "Mai 2025",
      description: "Aide à la maintenance informatique, support aux utilisateurs, sauvegarde des serveurs et sensibilisation des utilisateurs à la cybersécurité.",
      tags: ["Maintenance", "Support", "Sauvegarde", "Cybersécurité"]
    },
    {
      title: "Stage de découverte (3ème)",
      company: "2DK",
      period: "Décembre 2020",
      description: "Préparation design covering sur ordinateur, impression puis pose sur véhicule.",
      tags: ["Design", "Impression", "Covering"]
    }
  ];

  return (
    <Section id="experiences" title="Expériences Professionnelles">
      <div className="max-w-4xl mx-auto">
        <div className="relative border-l border-purple-500/30 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              {/* Dot on timeline */}
              <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-purple-500 group-hover:bg-purple-400 group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-purple-500/50 transition-all duration-300 shadow-lg group-hover:shadow-purple-500/10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">{exp.title}</h3>
                    <p className="text-purple-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm font-mono text-slate-400 mt-2 sm:mt-0 bg-slate-900 px-3 py-1 rounded-full border border-slate-700">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs font-medium px-2.5 py-0.5 rounded bg-purple-900/30 text-purple-300 border border-purple-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
