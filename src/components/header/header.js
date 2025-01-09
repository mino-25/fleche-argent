import "./header.css";
import { useState } from 'react';
import Logo from "../assets/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="myheader">
      <header>
        <img src={Logo} alt="Logo" />

        {/* Menu pour PC */}
        <nav className="pc-nav">
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="chambre">Chambre</Link></li>
            <li><Link to="resto">Restaurant</Link></li>
            <li><Link to="spa">Salon de massage</Link></li>
            <li><Link to="reservation">Réservation</Link></li>
            <li><Link to="contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Bouton Hamburger pour mobile */}
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Menu Responsive Mobile */}
        <nav className={`responsive-menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={toggleMenu}>Accueil</Link></li>
            <li><Link to="/chambre" onClick={toggleMenu}>Nos Chambres</Link></li>
            <li><Link to="/resto" onClick={toggleMenu}>Notre Restaurant</Link></li>
            <li><Link to="/spa" onClick={toggleMenu}>Nos Massages</Link></li>
            <li><Link to="/reservation" onClick={toggleMenu}>Réservation</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </nav>

        {/* Lien Login */}
        <Link to="/auth">
          <div className="logo">
            <FontAwesomeIcon icon={faUserTie} size="2xl" style={{ color: "#ffffff" }} />
            <h3>Login</h3>
          </div>
        </Link>
      </header>
      <Outlet />
    </div>
  );
}

export default Header;
