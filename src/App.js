import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Accueil from './components/accueil/accueil';
import Chambre from './components/chambre/chambre';
import Resto from './components/resto/resto';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path='/' element={<Footer />}>
            <Route index element={<Accueil />} />
            <Route path="/chambre" element={<Chambre />} />
            <Route path="/resto" element={<Resto />} />
            <Route path="*" element={<h1>Page non trouvée</h1>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;