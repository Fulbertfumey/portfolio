import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Gestion du changement de style au scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "#hero" },
    { name: "Compétences", href: "#competences" },
    { name: "Projets", href: "#projects" },
    { name: "À propos", href: "#apropos" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? "bg-slate-950/80 backdrop-blur-xl py-3 border-b border-white/5 shadow-2xl" 
          : "bg-transparent py-6"
      }`}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo / Nom Stylisé */}
        <motion.a
          href="#hero"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="site-logo flex flex-col no-underline"
        >
          <span className="text-2xl md:text-xl font-black tracking-tighter text-white leading-none">
            FULBERT <span className="text-teal-400">FUMEY.</span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-teal-300/80 font-semibold">
           referent digital /developpeur web junior
          </span>
        </motion.a>
        
        {/* Menu Desktop */}
        <ul className="hidden md:flex items-center space-x-10">
          {navLinks.map((link, index) => (
            <motion.li 
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={link.href}
                className="nav-link text-sm font-medium text-slate-300 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </motion.li>
          ))}
          
          {/* Bouton CTA - Call to action */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="nav-cta px-5 py-2 bg-white text-slate-950 text-xs font-bold rounded-full hover:bg-teal-400 transition-colors uppercase tracking-widest"
          >
            Parlons-en
          </motion.a>
        </ul>

        {/* Hamburger Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-white p-2 focus:outline-none"
            aria-label="Ouvrir le menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-white transition-all transform ${open ? "rotate-45 translate-y-2.5" : ""}`} />
              <span className={`h-0.5 w-3/4 bg-teal-400 ml-auto transition-all ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-full bg-white transition-all transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Menu Mobile avec Framer Motion */}
      <AnimatePresence>
          {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden header-menu bg-slate-950/95 border-t border-white/5 overflow-hidden"
          >
            <ul className="flex flex-col items-center justify-center h-full space-y-8 animate-in fade-in zoom-in duration-300">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={() => setOpen(false)} 
                    className="text-3xl font-bold text-white hover:text-teal-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;