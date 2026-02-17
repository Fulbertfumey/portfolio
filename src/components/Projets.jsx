import { projects } from "../data/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion"; // Pour l'animation pro
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-[#020617] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header de section animé */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">
            Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Réalisations</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed">
            Une sélection de réalisations démontrant expertise technique,
            rigueur et capacité à livrer des solutions performantes.
          </p>
        </motion.div>

        <Swiper
          className="projects-swiper !pb-14" // Espace pour la pagination
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="h-full">
              <motion.div 
                whileHover={{ y: -10 }}
                className="group h-full flex flex-col bg-slate-900/40 border border-white/5 rounded-[2rem] overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-blue-500/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
              >
                {/* Image avec Overlay au Hover */}
                <div className="relative overflow-hidden h-56">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent opacity-60" />
                </div>

                {/* Contenu de la Carte */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {project.description}
                  </p>

                  {/* Badges de Tech */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Liens Stylisés */}
                  <div className="flex items-center gap-6">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-white text-sm font-bold flex items-center gap-2 hover:text-blue-400 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      Repo Code
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noreferrer"
                      className="px-5 py-2 bg-blue-600 text-white text-xs font-bold rounded-xl hover:bg-blue-500 transition-all shadow-[0_4px_15px_rgba(37,99,235,0.2)]"
                    >
                      Live Démo
                    </a>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Styles Custom pour Swiper (à mettre dans ton CSS global de préférence) */}
      <style>{`
        .swiper-pagination-bullet {
          background: #334155 !important;
          opacity: 1 !important;
        }
        .swiper-pagination-bullet-active {
          background: #3b82f6 !important;
          width: 24px !important;
          border-radius: 4px !important;
          transition: all 0.3s !important;
        }
        .swiper-button-next, .swiper-button-prev {
          color: #3b82f6 !important;
          transform: scale(0.7);
          transition: all 0.3s;
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
          color: #fff !important;
        }
      `}</style>
    </section>
  );
}