import './App.css';
import Home from './componentes/Home';

import Inicio from './componentes/Descripcion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/inicio" element={<Home />} />
       
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
