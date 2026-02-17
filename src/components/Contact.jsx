import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Veuillez remplir tous les champs.");
      return;
    }
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message envoyé avec succès !");
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.error(error);
          setStatus("Une erreur est survenue. Réessayez.");
          setLoading(false);
        }
      );
  };

  return (
    // CHANGEMENT : py-24 -> py-16 pour réduire la hauteur
    <section id="contact" className="relative py-16 bg-[#020617] overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          // CHANGEMENT : mb-16 -> mb-10
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-3 tracking-tighter">
            Travaillons <span className="text-blue-500 italic">Ensemble</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto opacity-80">
            Une idée de projet ? Contactez-moi pour en discuter.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          // CHANGEMENT : p-12 -> p-6 md:p-8 et arrondi légèrement réduit
          className="bg-slate-900/40 border border-white/5 backdrop-blur-xl rounded-[1.5rem] p-6 md:p-10 shadow-xl"
        >
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-blue-500 ml-1">Nom</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  // CHANGEMENT : py-4 -> py-3
                  className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-5 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-all text-sm"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-blue-500 ml-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="email@exemple.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-5 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-all text-sm"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-blue-500 ml-1">Message</label>
              <textarea
                name="message"
                placeholder="Votre message..."
                // CHANGEMENT : rows 5 -> 3 pour compacter la hauteur
                rows="3"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-5 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-all resize-none text-sm"
                required
              />
            </div>

            <div className="flex flex-col items-center gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                // CHANGEMENT : py-4 -> py-3.5
                className={`w-full md:w-auto px-10 py-3.5 rounded-full font-bold text-white text-sm transition-all duration-300 ${
                  loading 
                  ? "bg-slate-700 cursor-not-allowed" 
                  : "bg-blue-600 hover:bg-blue-500"
                }`}
              >
                {loading ? "Envoi..." : "Envoyer le message"}
              </motion.button>

              <AnimatePresence>
                {status && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-xs font-medium text-slate-400"
                  >
                    {status}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}