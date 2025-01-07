import './accueil.css';  
import Cover from '../assets/hotel.jpg';
import Room from "../assets/room.jpg";
import Restaurant from "../assets/restaurent.jpg";
import Massage from "../assets/massage.jpg";
function Accueil(){
    return(
        <div className="accueil">
            <div className="cover">
                <img src={Cover} alt="Cover" />
            </div>
            <div className="cover-text">
                <h2>FLÈCHE ARGENTÉ</h2>
                <h3>Bordeaux dans toute sa luxure...</h3>
            </div>
            <div className="presentation chambre">
                <img src={Room} alt="Room" />
                <div className="presentation-text">
                    <h2>Nos Chambres</h2>
                    <h3>
                        Découvrez nos chambres luxueuse qui vous permettrons de profitez un maximum de votre séjour. Notre panels de chambres
                        offre une personnalisation en fonction de vos envies de votre nuits.
                    </h3>
                </div>
            </div>
            <div className="presentation restaurant">
                <div className="presentation-text">
                    <h2>Notre Restaurant</h2>
                    <h3>
                        Notre restaurent 5 étoiles offre une experience unique basée sur la cuisine de Bordeaux. Nos chefs bordelais mettent 
                        mettent en place différentes préstation pour nos clients d'aborder les plats dans les meilleures condition. 
                    </h3>
                </div>
                
                <img src={Restaurant} alt="Restaurant" />
            </div>
            <div className="presentation massage">
                <img src={Massage} alt="Massage" />
                <div className="presentation-text">
                    <h2>Nos Massages</h2>
                    <h3>
                        Le séjour vous donne accès au service massage thérapeutique élaborer par des kinésithérapeutes qui vous fait voyager
                        dans les profondeurs du calme et de la sérénité.
                    </h3>
                </div>
            </div>
        </div>
    )
}
export default Accueil