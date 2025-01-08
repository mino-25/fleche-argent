import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Accueil from './components/accueil/accueil';
import Inscription from './components/inscription/inscription';
import Chambre from './components/chambre/chambre';
import Resto from './components/resto/resto';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* Placer le Header ici pour qu'il soit visible sur toutes les pages */}
      <Header />
      
      {/* Routes pour la navigation */}
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/chambre" element={<Chambre />} />
        <Route path="/resto" element={<Resto />} />
        <Route path="*" element={<h1>Page non trouvée</h1>} />
      </Routes>
      
      {/* Placer le Footer ici pour qu'il soit visible sur toutes les pages */}
      <Footer />
    </div>
  );
}

export default App;
