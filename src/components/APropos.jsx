import React from "react";
import { motion } from "framer-motion";

export default function About() {
  // Variantes pour l'apparition en fondu des éléments
  const fadeIn = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="apropos" className="relative py-24 bg-[#030712] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Texte narratif - Logique 100% conservée */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="lg:w-1/2"
        >
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
              À <span className="text-blue-500 italic font-medium underline decoration-blue-500/30 underline-offset-8">propos</span>
            </h2>
            <div className="h-1.5 w-16 bg-blue-600 rounded-full" />
          </div>

          <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-light">
            <p className="hover:text-slate-200 transition-colors duration-300">
              Développeur web et référent digital, je conçois et développe des
              solutions numériques modernes, performantes et orientées résultats.
              Mon expertise couvre le développement frontend et backend avec une
              approche structurée et professionnelle.
            </p>

            <p className="hover:text-slate-200 transition-colors duration-300 border-l-2 border-blue-500/20 pl-6 italic">
              Polyvalent, j’interviens sur des projets React, Laravel, WordPress
              et Odoo en mettant l’accent sur la qualité du code, la performance
              et l’expérience utilisateur.
            </p>

            <p className="hover:text-slate-200 transition-colors duration-300">
              Chaque projet est développé avec rigueur, méthode et une vision
              stratégique afin de livrer des solutions fiables et évolutives.
            </p>
          </div>
        </motion.div>

        {/* Bloc Info - Cartes Interactives */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
        >
          {/* Carte 1 */}
          <motion.div variants={cardVariant} whileHover={{ y: -5 }} className="group p-6 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-sm transition-all hover:border-blue-500/30">
            <h4 className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-3 group-hover:text-white transition-colors">Spécialité</h4>
            <p className="text-slate-200 font-medium">Développement Web Full Stack</p>
          </motion.div>

          {/* Carte 2 */}
          <motion.div variants={cardVariant} whileHover={{ y: -5 }} className="group p-6 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-sm transition-all hover:border-blue-500/30">
            <h4 className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-3 group-hover:text-white transition-colors">Stack principale</h4>
            <p className="text-slate-200 font-medium whitespace-pre-line">React • Laravel {"\n"} WordPress • SQL</p>
          </motion.div>

          {/* Carte 3 */}
          <motion.div variants={cardVariant} whileHover={{ y: -5 }} className="group p-6 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-sm transition-all hover:border-blue-500/30">
            <h4 className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-3 group-hover:text-white transition-colors">Méthode</h4>
            <p className="text-slate-200 font-medium text-sm leading-snug">Analyse • Conception {"\n"} Développement • Optimisation</p>
          </motion.div>

          {/* Carte 4 */}
          <motion.div variants={cardVariant} whileHover={{ y: -5 }} className="group p-6 rounded-3xl bg-blue-600/10 border border-blue-500/20 backdrop-blur-sm transition-all hover:bg-blue-600 hover:text-white">
            <h4 className="group-hover:text-white text-blue-400 font-bold uppercase tracking-widest text-xs mb-2 transition-colors">Disponibilité</h4>
            <p className="font-medium group-hover:text-white transition-colors">Projets freelance & collaborations</p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}