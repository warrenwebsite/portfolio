
import React from 'react';
import Section from './Section';
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons';

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Me Contacter">
      <div className="max-w-4xl mx-auto text-center">
        <p className="mb-8 text-slate-400">
          Basé à Domont (95330). N'hésitez pas à me contacter pour toute opportunité.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
           <a href="mailto:warren.doppia@gmail.com" className="inline-flex items-center text-lg text-purple-400 hover:text-purple-300 transition-colors">
              <MailIcon className="w-6 h-6 mr-3" />
              warren.doppia@gmail.com
            </a>
            <div className="flex space-x-6">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-transform transform hover:scale-110 duration-300">
                    <GithubIcon className="w-8 h-8" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-transform transform hover:scale-110 duration-300">
                    <LinkedinIcon className="w-8 h-8" />
                </a>
            </div>
        </div>

        <div className="w-full max-w-lg mx-auto bg-slate-800 p-8 rounded-lg shadow-lg border border-slate-700">
          <form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-left text-sm font-medium text-slate-300 mb-2">Nom</label>
              <input type="text" id="name" className="block w-full px-4 py-3 rounded-md bg-slate-900 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white" placeholder="Votre nom" required />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-left text-sm font-medium text-slate-300 mb-2">Email</label>
              <input type="email" id="email" className="block w-full px-4 py-3 rounded-md bg-slate-900 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white" placeholder="Votre email" required />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-left text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea id="message" rows={4} className="block w-full px-4 py-3 rounded-md bg-slate-900 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white" placeholder="Votre message" required></textarea>
            </div>
            <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-purple-500">
              Envoyer le Message
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
