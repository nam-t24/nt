import './App.css';
import { Routes, Route} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home.js';
import Resume from './components/Resume.js';
import TestPage from './components/TestPage.js';
import ProjectTimeline from './components/ProjectTimeline';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="testpage" element={<TestPage/>} />
        <Route path="projecttimeline" element={<ProjectTimeline/>} />
      </Routes>
      </>
  );
}

export default App;
