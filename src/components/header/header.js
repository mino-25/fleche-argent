import { useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Logo from "../assets/Logo.png";
import "./header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // État pour suivre si le menu est ouvert ou fermé

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Change l'état actuel du menu (ouvre ou ferme)
  };

  return (
    <div className="myheader">
      <header>
        <img src={Logo} alt="Logo" className="logo-pc" />

        {/* Menu classique pour PC */}
        <nav className="pc-nav">
          <ul>
           <Link to="/">Accueil</Link>
           <Link to="chambre">Chambre</Link>
           <Link to="resto">Restaurant</Link>
           <Link to="spa">Salon de massage</Link>
           <Link to="reservation">Réservation</Link>
           <Link to="contact">Contact</Link>
          </ul>
        </nav>

        {/* Icône du menu hamburger pour mobile */}
        <button className="menu-toggle" onClick={toggleMenu}> 
          {/* Bouton toggle pour ouvrir/fermer le menu */}
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="2x" /> 
          {/* Change l'icône entre "faBars" (menu ouvert) et "faTimes" (menu fermé) */}
        </button>

        {/* Menu responsive mobile */}
        <nav className={`responsive-menu ${menuOpen ? 'open' : ''}`}> 
          {/* Classe conditionnelle : 'open' est ajoutée si menuOpen est true */}
          <ul>
            <li><Link to="/" onClick={toggleMenu}>Accueil</Link></li> 
            {/* Appel toggleMenu pour fermer le menu après avoir cliqué sur un lien */}
            <li><Link to="chambre" onClick={toggleMenu}>Nos Chambres</Link></li>
            <li><Link to="resto" onClick={toggleMenu}>Notre Restaurant</Link></li>
            <li><Link to="spa" onClick={toggleMenu}>Nos Massages</Link></li>
            <li><Link to="reservation" onClick={toggleMenu}>Réservation</Link></li>
            <li><Link to="contact" onClick={toggleMenu}>Contact</Link></li>
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
