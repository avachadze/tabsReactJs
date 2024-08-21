import './App.css';
import Home from './componentes/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="selection:bg-orange-300 dark:selection:bg-cyan-400">
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
