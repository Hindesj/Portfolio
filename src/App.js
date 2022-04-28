
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import logo from './logo512.png';
import Blog from './components/Blog';
import Contact from './components/Contact';
import { BrowserRouter, Route} from "react-router-dom";
import { withRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
          
              <NavBar/>
              <Route path="/" exact component={withRouter(About)} />
              <Route path="/skills" component={withRouter(Skills)} />
            
    </BrowserRouter>
  );
}

export default App;
