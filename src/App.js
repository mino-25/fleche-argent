import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Accueil from './components/accueil/accueil';
import Inscription from './components/inscription/inscription';
import Chambre from './components/chambre/chambre';
import Resto from './components/resto/resto';
import { Routes, Route } from 'react-router-dom';
import Auth from './components/auth/Auth';

function App() {
  return (
    <div className="App">

      
      {/* Routes pour la navigation */}
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path='/' element={<Footer />}>
            <Route index element={<Accueil />} />
            <Route path='/inscription' element={<Inscription/>}/>
            <Route path='/auth' element={<Auth/>}/>
          
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
