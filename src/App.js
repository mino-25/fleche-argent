import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Accueil from './components/accueil/accueil';
import Inscription from './components/inscription/inscription';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path='/' element={<Footer />}>
            <Route index element={<Accueil />} />
            <Route path='/inscription' element={<Inscription/>}/>
          
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;