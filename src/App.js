
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';
import BlogPage from './components/BlogPage';
import Resume from './components/Resume';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import deathStar from './components/assets/deathStar.JPG'
function App() {
  return (

    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog1" element={<BlogPage />} />
        <Route path="/blog/deathstar" element={<BlogPage picture={deathStar} title='Death Star' body='The Quick Brown fox jumped over the lazy dog'  />} />
      </Routes>
    </Router>
  );
}

export default App;
