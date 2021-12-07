import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home.js';
import Resume from './components/Resume.js';
import TestPage from './components/TestPage.js';
import ProjectTimeline from './components/ProjectTimeline';

function App() {
  return (
    
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="testpage" element={<TestPage/>} />
        <Route path="projecttimeline" element={<ProjectTimeline/>} />
      </Routes>
  );
}

export default App;
