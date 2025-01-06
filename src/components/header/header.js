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
            <Link to="restaurent">Restaurent</Link>
            <Link to="massage">Salon de massage</Link>
            <Link to="reservation">Reservation</Link>
            <Link to="contact">Contact</Link>
          </ul>
        </nav>
        <div className="logo">
          <img src="" alt="Login" />
          <h2>Login</h2>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
export default Header;
