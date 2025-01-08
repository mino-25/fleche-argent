import "./footer.css";
import { Link, Outlet } from "react-router-dom";
import Logo from "../assets/Logo.png"
function Footer() {
  return (
    <div className="myfooter">
        <Outlet />
      <footer>
        <div className="footer-link">
          <Link to="/">Accueil</Link>
          <Link to="/chambre">Chambre</Link>
          <Link to="/resto">Restaurant</Link>
          <Link to="/spa">Massage</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/mentions">Mentions Légales</Link>
          <Link to="/conditions">Conditions de Vente</Link>
        </div>
        <div className="footer-logo">
            <img src={Logo} alt="Logo" />
        </div>
        <div className="footer-info">
            <h3>Adresse : 12 Avenue de la Soie, Bordeaux 30072</h3>
            <h3>Numéro : +33 6 35 28 12 02</h3>
            <h3>Mail : fleche.argent@luxury.com</h3>

        </div>
      </footer>
    </div>
  );
}
export default Footer;
