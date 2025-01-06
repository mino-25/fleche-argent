import './App.css';
import Header from './components/header/header';
import Accueil from './components/accueil/accueil';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Accueil />} />
          <Route path="*" element={<h1>Page non trouvée</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;