
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-center py-8">
      <div className="container mx-auto px-6 md:px-12">
        <p className="text-slate-500 italic mb-4">
          "The computer was born to solve problems that did not exist before." - Bill Gates
        </p>
        <p className="text-slate-400 text-sm">
          &copy; {currentYear} Warren DOPPIA. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
