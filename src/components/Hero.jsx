// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion"; // Pour animations pro

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center items-center h-screen bg-gradient-to-br from-white to-gray-100 text-gray-900 px-6"
    >
      {/* Salutation animée */}
      <motion.p
        className="text-lg md:text-xl mb-4 text-blue-600 font-medium"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Bienvenue sur mon portfolio !
      </motion.p>

      {/* Nom et rôle */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Fulbert Fumey
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl text-gray-700 mb-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Développeur Web & Référent Digital <br />
        React | Laravel | WordPress | Intégration Digitale
      </motion.p>

      {/* Description personnelle */}
      <motion.p
        className="text-gray-600 mb-8 max-w-xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.7 }}
      >
        Déterminé et passionné, je mets toute mon énergie dans la réalisation de projets web innovants, efficaces et esthétiques, en respectant les bonnes pratiques du développement.
      </motion.p>

      {/* Boutons CTA */}
      <motion.div
        className="flex flex-col md:flex-row gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <a
          href="/cv.pdf"
          className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
        >
          Voir mon CV
        </a>
        <a
          href="#contact"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Me contacter
        </a>
      </motion.div>

      {/* Animation subtile “scroll down” */}
      <motion.div
        className="absolute bottom-10"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="block w-1 h-8 mx-auto bg-blue-600 rounded-full"></span>
      </motion.div>
    </section>
  );
};

export default Hero;
