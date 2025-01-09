import './accueil.css';  
import { Link } from 'react-router-dom'; // Import du Link pour la navigation
import Cover from '../assets/hotel.jpg';
import Room from "../assets/room.jpg";
import Restaurant from "../assets/restaurent.jpg";
import Massage from "../assets/massage.jpg";

function Accueil() {
    return (
        <div className="accueil">
            {/* Navigation de la version PC */}
            <div className="pc-nav">
                <Link to="/">ACCUEIL</Link>
                <Link to="/chambres">CHAMBRE</Link>
                <Link to="/restaurant">RESTAURANT</Link>
                <Link to="/login">LOGIN</Link>
            </div>

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
