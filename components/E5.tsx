
import React from 'react';
import Section from './Section';

const E5: React.FC = () => {
  return (
    <Section id="e5" title="Épreuve E5 - SISR">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Introduction E5 */}
        <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 text-center">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Production et fourniture de services informatiques</h3>
            <p className="text-slate-300 leading-relaxed text-lg">
                L'épreuve E5 (Coefficient 4) est une épreuve technique centrale du BTS SIO option SISR. 
                Elle vise à valider la capacité de l'étudiant à <strong className="text-white">concevoir, déployer, administrer et superviser</strong> des infrastructures systèmes et réseaux pour répondre aux besoins d'une organisation.
            </p>
        </div>

        {/* Compétences clés */}
        <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800 p-6 rounded-lg shadow-md border-t-4 border-purple-500 hover:-translate-y-1 transition-transform duration-300">
                <h4 className="text-lg font-bold text-white mb-3">Conception & Déploiement</h4>
                <p className="text-sm text-slate-400">
                    Participation à l'élaboration de l'architecture, choix des solutions techniques, installation et configuration des équipements (Serveurs, Routeurs, Switchs).
                </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg shadow-md border-t-4 border-purple-500 hover:-translate-y-1 transition-transform duration-300">
                <h4 className="text-lg font-bold text-white mb-3">Administration Système</h4>
                <p className="text-sm text-slate-400">
                    Gestion des utilisateurs, des droits d'accès, des stratégies de groupe (GPO), et des services réseaux essentiels (DNS, DHCP, Web).
                </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg shadow-md border-t-4 border-purple-500 hover:-translate-y-1 transition-transform duration-300">
                <h4 className="text-lg font-bold text-white mb-3">Maintenance & Supervision</h4>
                <p className="text-sm text-slate-400">
                    Maintien en condition opérationnelle, gestion des incidents (tickets), supervision de l'état du parc et sécurisation des accès.
                </p>
            </div>
        </div>

        {/* Situations Professionnelles */}
        <div>
            <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-purple-500 pl-4">Mes Situations Professionnelles</h3>
            <div className="grid gap-8">
                
                {/* Situation 1 */}
                <div className="bg-slate-800 rounded-lg p-6 md:p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 shadow-lg">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                        <div>
                            <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">Situation 1 : Infrastructure Active Directory</h4>
                            <p className="text-slate-400 text-sm mt-1">Contexte : Projet de 1ère année - Gestion centralisée</p>
                        </div>
                        <span className="mt-2 md:mt-0 px-3 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-full border border-purple-500/20 font-mono">Système & Réseau</span>
                    </div>
                    
                    <div className="my-4 space-y-2">
                        <p className="text-slate-300">
                            <strong className="text-purple-400">Objectif :</strong> Mettre en place un contrôleur de domaine pour centraliser la gestion des utilisateurs et sécuriser les postes clients.
                        </p>
                        <p className="text-slate-300">
                            <strong className="text-purple-400">Réalisations :</strong>
                        </p>
                        <ul className="list-disc list-inside text-slate-400 ml-2 space-y-1">
                            <li>Installation de Windows Server 2019 et promotion en Contrôleur de Domaine.</li>
                            <li>Création de l'arborescence Active Directory (OU, Utilisateurs, Groupes).</li>
                            <li>Mise en place des services DNS et DHCP avec redondance.</li>
                            <li>Configuration de GPO (Map lecteur réseau, fond d'écran, sécurité).</li>
                        </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700 mt-4">
                        <span className="px-2 py-1 bg-slate-900 text-slate-400 text-xs rounded font-mono">Windows Server</span>
                        <span className="px-2 py-1 bg-slate-900 text-slate-400 text-xs rounded font-mono">AD DS</span>
                        <span className="px-2 py-1 bg-slate-900 text-slate-400 text-xs rounded font-mono">PowerShell</span>
                    </div>
                </div>

                {/* Situation 2 */}
                <div className="bg-slate-800 rounded-lg p-6 md:p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 shadow-lg">
                     <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                        <div>
                            <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">Situation 2 : Supervision et Gestion de Parc (GLPI)</h4>
                            <p className="text-slate-400 text-sm mt-1">Contexte : Projet de 2ème année - Amélioration du support</p>
                        </div>
                        <span className="mt-2 md:mt-0 px-3 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-full border border-purple-500/20 font-mono">Maintenance & Web</span>
                    </div>
                    
                    <div className="my-4 space-y-2">
                        <p className="text-slate-300">
                            <strong className="text-purple-400">Objectif :</strong> Déployer une solution open-source pour gérer l'inventaire matériel et le suivi des incidents utilisateurs.
                        </p>
                        <p className="text-slate-300">
                            <strong className="text-purple-400">Réalisations :</strong>
                        </p>
                        <ul className="list-disc list-inside text-slate-400 ml-2 space-y-1">
                            <li>Installation d'un serveur LAMP (Linux Apache MySQL PHP) sur Debian.</li>
                            <li>Déploiement et configuration de GLPI.</li>
                            <li>Installation de l'agent OCS Inventory pour la remontée automatique du matériel.</li>
                            <li>Configuration des notifications par mail lors de la création de tickets.</li>
                        </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700 mt-4">
                        <span className="px-2 py-1 bg-slate-900 text-slate-400 text-xs rounded font-mono">Linux Debian</span>
                        <span className="px-2 py-1 bg-slate-900 text-slate-400 text-xs rounded font-mono">GLPI</span>
                        <span className="px-2 py-1 bg-slate-900 text-slate-400 text-xs rounded font-mono">Apache/MariaDB</span>
                    </div>
                </div>

            </div>
        </div>

      </div>
    </Section>
  );
};

export default E5;
