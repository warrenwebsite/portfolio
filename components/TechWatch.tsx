
import React from 'react';
import Section from './Section';

const TechWatch: React.FC = () => {
  return (
    <Section id="veille" title="Veille Technologique">
      <div className="max-w-5xl mx-auto space-y-8 text-left">
        
        {/* I. Introduction et Justification */}
        <div className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700">
          <h3 className="text-xl font-bold text-purple-400 mb-4 border-b border-slate-700 pb-2">I. Introduction et Justification</h3>
          <div className="space-y-3 text-slate-300">
            <p><strong className="text-white">Thème :</strong> Les Tests d’intrusion (Audit et Pentesting)</p>
            <p><strong className="text-white">Objectif de la Veille :</strong> Anticiper les évolutions et les innovations en matière de cybersécurité pour mieux préparer les infrastructures contre les menaces.</p>
            <p><strong className="text-white">Intérêt SISR :</strong> Ce sujet est fondamental pour l’option SISR, car il couvre la sécurité proactive. La connaissance des techniques d'attaque permet de concevoir et de maintenir des Systèmes d'Information (SI) résilients.</p>
            <div>
               <strong className="text-white block mb-1">Enjeux :</strong>
               <ul className="list-disc list-inside pl-4 space-y-1">
                 <li>Se tenir au courant des nouvelles vulnérabilités et des patchs de sécurité associés (0-Day, CVE).</li>
                 <li>Comprendre les tendances d'attaques des cybercriminels (ex : évolution des ransomwares, ciblage des chaînes d'approvisionnement).</li>
               </ul>
            </div>
          </div>
        </div>

        {/* II. Méthodologie et Outils de Veille */}
        <div className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700">
           <h3 className="text-xl font-bold text-purple-400 mb-4 border-b border-slate-700 pb-2">II. Méthodologie et Outils de Veille</h3>
           <p className="text-slate-300 mb-6">Ma veille est structurée autour de deux approches pour assurer une couverture exhaustive de l'actualité :</p>
           <div className="grid md:grid-cols-2 gap-6">
             <div className="bg-slate-700/30 p-5 rounded-lg border border-slate-600 hover:border-purple-500/50 transition-colors">
               <h4 className="font-bold text-white mb-3 flex items-center">
                 <span className="bg-purple-600 text-xs px-2 py-1 rounded mr-3 uppercase tracking-wider">PUSH</span> 
                 L'information vient à moi
               </h4>
               <p className="text-sm text-slate-300 mb-3">Automatisation des alertes pour les mots-clés spécifiques : Pentesting, Vulnérabilité, Metasploit, Ransomware, NIS 2.</p>
               <div className="mt-4 pt-4 border-t border-slate-600/50">
                <p className="text-sm font-semibold text-purple-300 mb-2">Outils :</p>
                <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
                    <li>Google Alertes (Mots-clés ciblés)</li>
                    <li>LinkedIn (Abonnements aux experts et éditeurs)</li>
                </ul>
               </div>
             </div>
             <div className="bg-slate-700/30 p-5 rounded-lg border border-slate-600 hover:border-purple-500/50 transition-colors">
               <h4 className="font-bold text-white mb-3 flex items-center">
                 <span className="bg-purple-600 text-xs px-2 py-1 rounded mr-3 uppercase tracking-wider">PULL</span> 
                 Je vais chercher l'information
               </h4>
               <p className="text-sm text-slate-300 mb-3">Recherche active sur des sites de référence pour l'analyse des menaces et l'application des lois.</p>
               <div className="mt-4 pt-4 border-t border-slate-600/50">
                <p className="text-sm font-semibold text-purple-300 mb-2">Sources Clés :</p>
                <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
                    <li>Sites d’État : ANSSI (CERT-FR), CNIL, CISA</li>
                    <li>Blogs Éditeurs : Talos (Cisco), Naked Security (Sophos)</li>
                </ul>
               </div>
             </div>
           </div>
        </div>

        {/* III. Aspects Techniques du Pentesting */}
        <div className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700">
           <h3 className="text-xl font-bold text-purple-400 mb-4 border-b border-slate-700 pb-2">III. Aspects Techniques du Pentesting</h3>
           <p className="text-slate-300 mb-6">L'audit de sécurité vise à identifier et évaluer les risques. Il est essentiel de maîtriser les différents niveaux d'approche.</p>
           
           <h4 className="text-lg font-semibold text-white mb-4 pl-3 border-l-4 border-purple-500">A. Les Types de Tests d'Intrusion</h4>
           <div className="overflow-x-auto mb-8 rounded-lg border border-slate-600">
             <table className="w-full text-left text-sm text-slate-300">
               <thead className="bg-slate-900 text-purple-400 uppercase font-bold text-xs tracking-wider">
                 <tr>
                   <th className="px-4 py-4 border-b border-slate-600">Type de Test</th>
                   <th className="px-4 py-4 border-b border-slate-600">Niveau de Connaissance Cible</th>
                   <th className="px-4 py-4 border-b border-slate-600">Objectif et Réalisme</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-slate-600 bg-slate-800/50">
                 <tr className="hover:bg-slate-700/30 transition-colors">
                   <td className="px-4 py-3 font-semibold text-white whitespace-nowrap">Black Box (Boîte Noire)</td>
                   <td className="px-4 py-3">Aucune information, aucun accès.</td>
                   <td className="px-4 py-3">Simule l’attaque d’un pirate externe non informé. Le moins réaliste.</td>
                 </tr>
                 <tr className="hover:bg-slate-700/30 transition-colors">
                   <td className="px-4 py-3 font-semibold text-white whitespace-nowrap">Grey Box (Boîte Grise)</td>
                   <td className="px-4 py-3">Accès et informations limitées (ex: un compte utilisateur standard).</td>
                   <td className="px-4 py-3">Le plus réaliste ; simule une compromission interne ou une attaque après vol de crédentiels (ex: ransomware).</td>
                 </tr>
                 <tr className="hover:bg-slate-700/30 transition-colors">
                   <td className="px-4 py-3 font-semibold text-white whitespace-nowrap">White Box (Boîte Blanche)</td>
                   <td className="px-4 py-3">Accès et documentation complets.</td>
                   <td className="px-4 py-3">Ciblage précis des failles ; vise l'audit du code source et des configurations en profondeur.</td>
                 </tr>
               </tbody>
             </table>
           </div>

           <h4 className="text-lg font-semibold text-white mb-4 pl-3 border-l-4 border-purple-500">B. Les Outils et Autres Types d'Audits</h4>
           <ul className="space-y-4 text-slate-300">
             <li className="flex items-start bg-slate-700/20 p-3 rounded">
               <span className="text-purple-400 mr-3 mt-1 text-xl">•</span>
               <div>
                 <strong className="text-white block mb-1">Scanners de Vulnérabilités</strong> 
                 Utilisation d'outils comme <span className="text-purple-300 font-mono text-xs bg-slate-900 px-1 py-0.5 rounded">Nmap</span> (découverte de ports/services) et <span className="text-purple-300 font-mono text-xs bg-slate-900 px-1 py-0.5 rounded">OpenVAS</span> (scan de vulnérabilités connues) pour cartographier la surface d'attaque.
               </div>
             </li>
             <li className="flex items-start bg-slate-700/20 p-3 rounded">
               <span className="text-purple-400 mr-3 mt-1 text-xl">•</span>
               <div>
                 <strong className="text-white block mb-1">Systèmes d'exploitation</strong> 
                 Maîtrise de <span className="text-purple-300 font-mono text-xs bg-slate-900 px-1 py-0.5 rounded">Kali Linux</span> pour l'exécution des tests. Je suis l'évolution vers Kali Purple (OS axé sur la défense) qui est pertinent pour les Blue Teams.
               </div>
             </li>
             <li className="flex items-start bg-slate-700/20 p-3 rounded">
               <span className="text-purple-400 mr-3 mt-1 text-xl">•</span>
               <div className="w-full">
                 <strong className="text-white block mb-1">Tests Comportementaux</strong>
                 <ul className="grid sm:grid-cols-2 gap-3 mt-2">
                    <li className="bg-slate-900/50 p-2 rounded border border-slate-700/50">
                        <strong className="text-purple-300 block text-sm mb-1">Ingénierie Sociale / Phishing</strong>
                        <span className="text-sm text-slate-400">Évaluation du "facteur humain", souvent la faille la plus critique.</span>
                    </li>
                    <li className="bg-slate-900/50 p-2 rounded border border-slate-700/50">
                        <strong className="text-purple-300 block text-sm mb-1">Red Team</strong>
                        <span className="text-sm text-slate-400">Simulation d'attaque réelle et prolongée pour tester l'efficacité de la défense (Blue Team).</span>
                    </li>
                 </ul>
               </div>
             </li>
           </ul>
        </div>

        {/* IV. Conclusion et Application au Domaine SISR */}
        <div className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700">
           <h3 className="text-xl font-bold text-purple-400 mb-4 border-b border-slate-700 pb-2">IV. Conclusion et Application au Domaine SISR</h3>
           <div className="grid gap-4 md:grid-cols-3">
             <div className="bg-slate-700/20 p-4 rounded border border-slate-700">
                <strong className="text-white block mb-2 border-b border-purple-500/30 pb-2">Objectif Final</strong>
                <p className="text-sm text-slate-300">Fournir des recommandations concrètes et un plan de sécurisation (installation d’IDS, configuration de pare-feu, mises à jour des patchs).</p>
             </div>
             <div className="bg-slate-700/20 p-4 rounded border border-slate-700">
                <strong className="text-white block mb-2 border-b border-purple-500/30 pb-2">Apport Professionnel</strong>
                <p className="text-sm text-slate-300">Cette veille me prépare à adopter une posture de défense en profondeur. En connaissant les faiblesses d’un SI, je suis capable d’appliquer la "Security by Design".</p>
             </div>
             <div className="bg-slate-700/20 p-4 rounded border border-slate-700">
                <strong className="text-white block mb-2 border-b border-purple-500/30 pb-2">Prochaine Étape</strong>
                <p className="text-sm text-slate-300">Appliquer ces connaissances techniques pour réaliser un mini-audit sur une infrastructure simulée, en utilisant la méthodologie Grey Box.</p>
             </div>
           </div>
        </div>

      </div>
    </Section>
  );
};

export default TechWatch;
