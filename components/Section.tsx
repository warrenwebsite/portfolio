
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-20 sm:py-24">
      <h2 className="text-3xl font-bold text-center text-white mb-4">
        {title}
      </h2>
      <div className="w-20 h-1 bg-purple-500 mx-auto mb-12 rounded"></div>
      {children}
    </section>
  );
};

export default Section;
