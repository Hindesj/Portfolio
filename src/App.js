
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';
import BlogPage from './components/BlogPage';
import { BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
            <div>
                <NavBar/>
                <Route path="/" exact component={About} />
                <Route path="/skills" component={Skills} />
                <Route path="/work" component={Contact}/>
                <Route path="/contact" component={Contact} />
                <Route path="/blog" component={Blog} />
                <Route path="/blog1" component={BlogPage} />
            </div>  
      </BrowserRouter>
    </div>
  );
}

export default App;
