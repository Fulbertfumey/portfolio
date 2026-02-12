import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Veuillez remplir tous les champs.");
      return;
    }

    // Simulation d’envoi
    setStatus("Message envoyé avec succès.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        
        <div className="contact-info">
          <h2 className="section-title">Contact</h2>

          <p>
            Disponible pour des projets freelance, collaborations techniques
            ou missions digitales. N’hésitez pas à me contacter pour discuter
            de votre projet.
          </p>

          <div className="contact-details">
            <p><strong>Email :</strong> tonemail@example.com</p>
            <p><strong>Spécialité :</strong> Développement Web Full Stack</p>
            <p><strong>Disponibilité :</strong> Ouvert aux opportunités</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nom complet"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Adresse email"
            value={formData.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Décrivez votre projet..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit">Envoyer le message</button>

          {status && <p className="form-status">{status}</p>}
        </form>

      </div>
    </section>
  );
}
