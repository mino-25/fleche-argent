
import './accueil.css';  
import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import du Link pour la navigation
import Cover from '../assets/hotel.jpg';
import Room from "../assets/room.jpg";
import Restaurant from "../assets/restaurent.jpg";
import Massage from "../assets/massage.jpg";

function Accueil() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="accueil">
            {/* Bouton Hamburger */}
            <button className="menu-toggle" onClick={toggleMenu}>
                {menuOpen ? "✖" : "☰"}
            </button>

            {/* Navigation de la version PC */}
            <div className="pc-nav">
                <Link to="/">ACCUEIL</Link>
                <Link to="/chambres">CHAMBRE</Link>
                <Link to="/restaurant">RESTAURANT</Link>
                <Link to="/login">LOGIN</Link>
            </div>

            {/* Menu Responsive */}
            <nav className={`responsive-menu ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/" onClick={toggleMenu}>Accueil</Link></li>
                    <li><Link to="/chambres" onClick={toggleMenu}>Nos Chambres</Link></li>
                    <li><Link to="/restaurant" onClick={toggleMenu}>Notre Restaurant</Link></li>
                    <li><Link to="/massage" onClick={toggleMenu}>Nos Massages</Link></li>
                    <li><Link to="/reservation" onClick={toggleMenu}>Réservation</Link></li>
                    <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
                </ul>
            </nav>

            {/* Contenu principal */}
            <div className="cover">
                <img src={Cover} alt="Cover" />
            </div>
            <div className="cover-text">
                <h2>FLÈCHE ARGENTÉ</h2>
                <h3>Bordeaux dans toute sa luxure...</h3>
            </div>
            <div id="chambres" className="presentation chambre">
                <img src={Room} alt="Room" />
                <div className="presentation-text">
                    <h2>Nos Chambres</h2>
                    <h3>
                        Découvrez nos chambres luxueuse qui vous permettront de profiter au maximum de votre séjour.
                    </h3>
                </div>
            </div>
            <div id="restaurant" className="presentation restaurant">
                <div className="presentation-text">
                    <h2>Notre Restaurant</h2>
                    <h3>
                        Notre restaurant 5 étoiles offre une expérience unique basée sur la cuisine bordelaise.
                    </h3>
                </div>
                <img src={Restaurant} alt="Restaurent" />
            </div>
            <div id="massage" className="presentation massage">
                <img src={Massage} alt="Massage" />
                <div className="presentation-text">
                    <h2>Nos Massages</h2>
                    <h3>
                        Profitez de massages thérapeutiques réalisés par des kinésithérapeutes pour une sérénité absolue.
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default Accueil;
