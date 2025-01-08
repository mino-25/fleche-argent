import React, { useState } from 'react';
import './test.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
     
      <div className="header-content">
        <div className="logo" onClick={toggleMenu}>
          <img src="/logo.png" alt="Logo" />
        </div>
        <h1 className="hotel-name">Fleche Argent</h1>
      </div>

      <nav className={menuOpen ? 'open' : ''}>
        <ul>
          <li><a href="#accueil">Accueil</a></li>
          <li><a href="#chambres">Chambres</a></li>
          <li><a href="#restaurant">Restaurant</a></li>
          <li><a href="#massage">Salon de Massage</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="close-menu" onClick={toggleMenu}>X</button>
      </nav>
    </header>
  );
}

export default Header;
