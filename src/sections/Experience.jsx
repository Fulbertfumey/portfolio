import { experiences } from "../data/experience";
import { motion } from "framer-motion";
// J'ai intégré les styles pro directement via Tailwind pour plus de contrôle
// mais tu peux garder ton import CSS si tu y as des styles spécifiques.
import "../styles/experience.css";

export default function Experience() {
  // Variantes pour l'animation de la ligne de timeline
  const lineVariants = {
    hidden: { height: 0 },
    visible: { height: "100%", transition: { duration: 1.5, ease: "easeInOut" } }
  };

  return (
    <section id="experience" className="relative py-24 bg-[#030712] overflow-hidden">
      {/* Effet de lueur d'arrière-plan */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Titre avec soulignement dégradé */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white tracking-tighter"
          >
            Expérience <span className="text-blue-500 italic">Professionnelle</span>
          </motion.h2>
          <div className="h-1 w-20 bg-blue-600 mt-4 rounded-full" />
        </div>

        <div className="relative">
          {/* La Ligne de la Timeline animée */}
          <motion.div 
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 top-0 w-[2px] bg-gradient-to-b from-blue-600 via-blue-400/20 to-transparent"
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`relative flex flex-col md:flex-row items-center justify-between group`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* 1. Bloc Période (Côté gauche sur Desktop) */}
                <div className="hidden md:flex w-5/12 justify-end pr-12 text-right">
                  <span className="text-blue-400 font-mono text-sm font-bold tracking-widest bg-blue-500/5 px-4 py-1 rounded-full border border-blue-500/20">
                    {exp.period}
                  </span>
                </div>

                {/* 2. Le Point central (Glow effect) */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-20">
                  <div className="w-6 h-6 rounded-full bg-slate-950 border-2 border-blue-500 group-hover:bg-blue-500 transition-colors duration-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                </div>

                {/* 3. Carte de contenu (Côté droit sur Desktop) */}
                <div className="w-full md:w-5/12 pl-12 md:pl-12">
                  <div className="relative p-8 rounded-[2rem] bg-slate-900/40 border border-white/5 backdrop-blur-md hover:border-blue-500/30 transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                    
                    {/* Badge période pour mobile uniquement */}
                    <span className="md:hidden inline-block mb-4 text-blue-400 text-xs font-bold tracking-widest uppercase">
                      {exp.period}
                    </span>

                    <h3 className="text-xl font-black text-white mb-1 group-hover:text-blue-400 transition-colors">
                      {exp.role}
                    </h3>
                    
                    <h4 className="text-blue-500/80 font-medium mb-4 text-sm uppercase tracking-widest">
                      {exp.company}
                    </h4>
                    
                    <p className="text-slate-400 text-sm leading-relaxed font-light">
                      {exp.description}
                    </p>

                    {/* Petite flèche décorative (Desktop) */}
                    <div className="hidden md:block absolute top-8 -left-2 w-4 h-4 bg-slate-900 border-l border-b border-white/5 rotate-45" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}