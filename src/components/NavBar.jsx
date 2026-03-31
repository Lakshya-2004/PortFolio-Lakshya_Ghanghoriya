import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">
          Lakshya 💼
        </NavLink>

        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink 
              to="/projects" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Projects
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink 
              to="/resume" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Resume
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;