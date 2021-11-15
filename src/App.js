import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home.js';
import Resume from './components/Resume.js';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/nt" element={<Home/>} />
        <Route path="" element={<Home/>} />
        <Route path="/resume" element={<Resume/>} />
      </Routes>
    </Router>
  );
}

export default App;
