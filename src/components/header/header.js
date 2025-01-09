import "./header.css";
import Logo from "../assets/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet } from "react-router-dom";

function Header() {
  // Récupérer les informations utilisateur depuis le localStorage
  const utilisateur = JSON.parse(localStorage.getItem("utilisateur"));

  return (
    <div className="myheader">
      <header>
        <img src={Logo} alt="Logo" />
        <nav>
          <ul>
            <Link to="/">Accueil</Link>
            <Link to="chambre">Chambre</Link>
            <Link to="resto">Restaurant</Link>
            <Link to="spa">Salon de massage</Link>
            <Link to="reservation">Reservation</Link>
            <Link to="contact">Contact</Link>
            
            {/* Afficher le lien Admin uniquement si l'utilisateur est admin */}
            {utilisateur && utilisateur.pseudo === "admin" && (
              <Link to="admin">Admin</Link>
            )}
          </ul>
        </nav>

        {/* Si l'utilisateur est connecté, afficher une icône de déconnexion et le pseudo */}
        {utilisateur ? (
          <Link to="/mon-espace">
          <div className="logo">
            <FontAwesomeIcon icon={faUserTie} size="2xl" style={{ color: "#ffffff" }} />
            <span>{utilisateur.pseudo}</span>
          </div>
          </Link>
        ) : (
          <Link to="/auth">
            <div className="logo">
              <FontAwesomeIcon icon={faUserTie} size="2xl" style={{ color: "#ffffff" }} />
              <h3>Login</h3>
            </div>
          </Link>
        )}
      </header>
      <Outlet />
    </div>
  );
}

export default Header;
