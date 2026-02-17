// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Logique TYPEWRITER conservée à 100% - Style "Pro Console" ajouté
function TypewriterText({ text, speed = 50 }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let mounted = true;
    let idx = 0;
    setDisplayed("");

    const tick = () => {
      if (!mounted) return;
      setDisplayed((prev) => text.slice(0, idx + 1));
      idx += 1;
      if (idx < text.length) {
        setTimeout(tick, speed);
      }
    };

    tick();
    return () => {
      mounted = false;
    };
  }, [text, speed]);

  return (
    <motion.p
      className="text-2xl md:text-4xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-bold text-center tracking-tight"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {displayed}<span className="text-blue-500 animate-pulse">|</span>
    </motion.p>
  );
}

const Hero = () => {
  // Courbe d'animation "Cinématique"
  const easing = [0.16, 1, 0.3, 1];

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center items-center h-screen bg-[#020617] text-white px-6 overflow-hidden"
    >
      {/* EFFETS DE FOND : Grille et Lueurs (Design Pro) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />

      {/* 1. Salutation (Style Badge) */}
    <motion.p
  className="relative z-10 px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] md:text-sm font-bold tracking-wider md:tracking-[0.2em] uppercase mb-6 md:mb-8 text-center max-w-fit mx-auto"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: easing }}
>
  Bienvenue sur mon portfolio !
</motion.p>

      {/* 2. Nom (Typography Focus) */}
      <motion.h1
        className="relative z-10 text-6xl md:text-8xl font-black text-white mb-4 tracking-tighter text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: easing }}
      >
        Fulbert <span className="bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">Fumey</span>
      </motion.h1>

      {/* 3. Role & Stack (Typewriter inclus) */}
      <div className="relative z-10">
        <TypewriterText text="Développeur Web & Référent Digital" />
      </div>

      <motion.p
        className="relative z-10 text-lg md:text-xl text-slate-400 mb-8 text-center font-medium tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        REACT <span className="text-blue-500 mx-2">•</span> 
        LARAVEL <span className="text-blue-500 mx-2">•</span> 
        WORDPRESS <span className="text-blue-500 mx-2">•</span> 
        INTÉGRATION
      </motion.p>

      {/* 4. Description personnelle (Optimisée pour la lecture) */}
      <motion.p
        className="relative z-10 text-slate-500 mb-10 max-w-2xl text-center leading-relaxed text-base md:text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        Déterminé et passionné, je transforme vos idées en solutions numériques 
        <span className="text-white font-medium"> innovantes, efficaces et esthétiques</span>, 
        en respectant les bonnes pratiques du développement.
      </motion.p>

      {/* 5. Boutons CTA (Style Pill Moderne) */}
      <motion.div
        className="relative z-10 flex flex-col md:flex-row gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: easing }}
      >
        <a
          href="/cvfumey.pdf"
                target="_blank"
                rel="noopener noreferrer"
  
          className="px-8 py-4 border border-slate-700 text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
        >
          Voir mon CV
        </a>
        <a
          href="#contact"
          className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-300"
        >
          Me contacter
        </a>
      </motion.div>

      {/* 6. Scroll Indicator (Minimalist) */}
      <motion.div
        className="absolute bottom-10 flex flex-col items-center gap-3"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-600 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;