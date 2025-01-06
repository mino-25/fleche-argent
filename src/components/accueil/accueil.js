import './accueil.css';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserTie} from '@fortawesome/free-solid-svg-icons';
import Cover from '../assets/hotel.jpg'
function Accueil(){
    return(
        <div className="accueil">
            <img src={Cover} alt="Cover" />
            <h2>FLÈCHE ARGENTÉ</h2>
            <h3>Bordeaux dans toute sa luxure...</h3>
        </div>
    )
}
export default Accueil