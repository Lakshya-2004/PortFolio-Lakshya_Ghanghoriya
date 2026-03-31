import { profileData } from '../data/portfolioData';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{profileData.name}</h3>
            <p>{profileData.title}</p>
            
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#resume">Resume</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Social</h4>
            <div className="footer-social">
              <a href={profileData.social.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={profileData.social.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} {profileData.name}. All rights reserved.</p>
          <p>Built with React & Vite</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
