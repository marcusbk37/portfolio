import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './components/Home';
import Gymnastics from './components/Gymnastics';
import Computer_Science from './components/Computer_Science';
import Education from './components/Education';
import Projects from './components/Projects';

function App() {
  return (
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/gymnastics" element={<Gymnastics />} />
          <Route path="/computer-science" element={<Computer_Science />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
  );
}

export default App;
