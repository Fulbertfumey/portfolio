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
            <li><a href="#about">À propos</a></li>
            <li><a href="#skills">Compétences</a></li>
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
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Fulbert Fumey. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
