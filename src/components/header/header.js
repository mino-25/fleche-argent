import "./header.css";
import Logo from "../assets/Logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserTie} from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet } from "react-router-dom";
function Header() {
  return (
    <div className="myheader">
      <header>
        <img src={Logo} alt="Logo" />
        <nav>
          <ul>
            <Link to="/">Accueil</Link>
            <Link to="chambre">Chambre</Link>
            <Link to="resto">Restaurant</Link>
            <Link to="massage">Salon de massage</Link>
            <Link to="reservation">Reservation</Link>
            <Link to="contact">Contact</Link>
          </ul>
        </nav>
        <Link to="/connexion">
          <div className="logo">
            <FontAwesomeIcon icon={faUserTie} size="2xl" style={{color: "#ffffff",}} />
            <h3>Login</h3>
          </div>
        </Link>
      </header>
      <Outlet />
    </div>
  );
}
export default Header;
