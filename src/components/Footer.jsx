export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">

        <div className="footer-brand">
          <h3>Fulbert Fumey</h3>
          <p>Développeur Web Full Stack & Référent Digital</p>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#APropos">À propos</a></li>
            <li><a href="#competences">Compétences</a></li>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#experience">Expérience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Réseaux</h4>
          <ul>
            <li>
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
             <a
              href="https://wa.me/22899333454?text=Bonjour%20Fulbert,%20je%20souhaite%20discuter%20d'un%20projet"
              target="_blank"
              rel="noopener noreferrer"
             
            >
                 WhatsApp
            </a>

            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Fulbert Fumey. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
