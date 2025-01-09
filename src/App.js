import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Accueil from './components/accueil/accueil';
import Inscription from './components/inscription/inscription';
import Chambre from './components/chambre/chambre';
import Resto from './components/resto/resto';
import Spa from './components/spa/spa';
import ReservationForm from './components/reservation/reservation';
import { Routes, Route } from 'react-router-dom';
import Auth from './components/auth/Auth';
import Admin from './components/admin/admin';
import MonEspace from './components/mon-espace/monEspace';

function App() {
  return (
    <div className="App">

      
      {/* Routes pour la navigation */}
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path='/' element={<Footer />}>
            <Route index element={<Accueil />} />
            <Route path="/chambre" element={<Chambre />} />
            <Route path="/resto" element={<Resto />} />
            <Route path="/spa" element={<Spa />} />
            <Route path="*" element={<h1>Page non trouvée</h1>} />
            <Route path='/inscription' element={<Inscription/>}/>
            <Route path='/auth' element={<Auth/>}/>
            <Route path='/reservation' element={<ReservationForm/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path="/mon-espace" element={<MonEspace />} />
          
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
