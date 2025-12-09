
import React from 'react';
import Section from './Section';

const Projects: React.FC = () => {
  return (
    <Section id="projets" title="Mes Projets">
      <div className="max-w-4xl mx-auto text-center text-slate-400">
        <p>
          Je suis actuellement en train de documenter mes projets scolaires et personnels.
          <br />
          Cette section sera mise à jour prochainement avec des études de cas détaillées.
        </p>
        <div className="mt-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto"></div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
