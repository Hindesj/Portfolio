
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';
import { BrowserRouter, Route} from "react-router-dom";
import { withRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
            <div>
                <NavBar/>
                <Route path="/" exact component={About} />
                <Route path="/skills" component={Skills} />
                <Route path="/work" component={}/>
                <Route path="/contact" component={Contact} />
                <Route path="/blog" component={Blog} />
            </div>  
      </BrowserRouter>
    </div>
  );
}

export default App;
