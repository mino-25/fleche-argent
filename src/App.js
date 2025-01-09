import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Accueil from './components/accueil/accueil';
import Inscription from './components/inscription/inscription';
import Chambre from './components/chambre/chambre';
import Resto from './components/resto/resto';
import Contact from './components/contact/contact';
import { Routes, Route } from 'react-router-dom';
import Auth from './components/auth/Auth';

function App() {
  return (
    <div className="App">
      {/* Affichage global */}
      <Header />
      
      <Routes>
        {/* Route principale */}
        <Route path="/" element={<Accueil />} />
        
        {/* Route vers Auth (Connexion/Inscription) */}
        <Route path="/auth" element={<Auth />} />

        {/* Route vers l'inscription */}
        <Route path="/inscription" element={<Inscription />} />

        {/* Route vers Chambre */}
        <Route path="/chambre" element={<Chambre />} />

        {/* Route vers Restaurant */}
        <Route path="/resto" element={<Resto />} />

        {/* Route vers Contact */}
        <Route path="/contact" element={<Contact />} />

        {/* Page non trouvée */}
        <Route path="*" element={<h1>Page non trouvée</h1>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
