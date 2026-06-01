import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import '../styles/NavBar.css';

function NavBar() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo" onClick={closeMenu}>
          Lakshya 💼
        </NavLink>

        <button
          className="nav-toggle-btn"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          type="button"
        >
          <span className="nav-toggle-icon">☰</span>
        </button>

        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <NavLink 
              to="/" 
              onClick={closeMenu}
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink 
              to="/projects" 
              onClick={closeMenu}
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Projects
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink 
              to="/resume" 
              onClick={closeMenu}
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Resume
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink 
              to="/contact" 
              onClick={closeMenu}
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Contact
            </NavLink>
          </li>

          <li className="nav-item theme-toggle-item">
            <button 
              className="theme-toggle-btn"
              onClick={() => {
                toggleTheme();
                closeMenu();
              }}
              aria-label="Toggle dark/light mode"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;