import './accueil.css';  
import { useState } from 'react';
import Cover from '../assets/hotel.jpg';
import Room from "../assets/room.jpg";
import Restaurent from "../assets/restaurent.jpg";
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

            {/* Menu Responsive */}
            <nav className={`responsive-menu ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="#chambres">Nos Chambres</a></li>
                    <li><a href="#restaurent">Notre Restaurant</a></li>
                    <li><a href="#massage">Nos Massages</a></li>
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
            <div id="restaurent" className="presentation restaurent">
                <div className="presentation-text">
                    <h2>Notre Restaurant</h2>
                    <h3>
                        Notre restaurant 5 étoiles offre une expérience unique basée sur la cuisine bordelaise.
                    </h3>
                </div>
                <img src={Restaurent} alt="Restaurent" />
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
