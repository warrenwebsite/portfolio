
import React, { useState } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; isActive: boolean; onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void; }> = ({ href, children, isActive, onClick }) => (
  <a href={href} onClick={onClick} className={`transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-purple-400' : 'text-slate-300 hover:text-purple-400'}`} aria-current={isActive ? 'page' : undefined}>
    {children}
  </a>
);

const MobileNavLink: React.FC<{ href: string; children: React.ReactNode; onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void; isActive: boolean }> = ({ href, children, onClick, isActive }) => (
    <a href={href} onClick={onClick} className={`block transition-colors duration-300 px-3 py-2 rounded-md text-base font-medium ${isActive ? 'text-purple-400 bg-slate-700' : 'text-slate-300 hover:text-purple-400 hover:bg-slate-700'}`} aria-current={isActive ? 'page' : undefined}>
      {children}
    </a>
);

interface HeaderProps {
    currentPage: string;
    onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#accueil', label: 'Accueil', id: 'accueil' },
    { href: '#a-propos', label: 'À Propos', id: 'a-propos' },
    { href: '#competences', label: 'Compétences', id: 'competences' },
    { href: '#formation', label: 'Formation', id: 'formation' },
    { href: '#e5', label: 'Épreuve E5', id: 'e5' },
    { href: '#projets', label: 'Projets', id: 'projets' },
    { href: '#experiences', label: 'Expériences', id: 'experiences' },
    { href: '#veille', label: 'Veille', id: 'veille' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, pageId: string) => {
    e.preventDefault();
    onNavigate(pageId);
  };

  const handleMobileNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, pageId: string) => {
    handleNavLinkClick(e, pageId);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-lg shadow-lg shadow-purple-900/10">
      <nav className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#accueil" onClick={(e) => handleNavLinkClick(e, 'accueil')} className="text-white font-bold text-xl font-mono cursor-pointer">
              W<span className="text-purple-400">.</span>DOPPIA
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map(link => <NavLink key={link.href} href={link.href} isActive={currentPage === link.id} onClick={(e) => handleNavLinkClick(e, link.id)}>{link.label}</NavLink>)}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Ouvrir le menu principal</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => <MobileNavLink key={link.href} href={link.href} onClick={(e) => handleMobileNavLinkClick(e, link.id)} isActive={currentPage === link.id}>{link.label}</MobileNavLink>)}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
