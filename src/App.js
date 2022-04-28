
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import logo from './logo512.png';
import Blog from './components/Blog';
import Contact from './components/Contact';
import { BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <div className='sidenav'>
        <div className='logo'>
          <img src={logo} alt="Girl in a jacket" width="100" height="100"/>
        </div>
        <div>
          <NavBar/>
        </div>
        
      </div>
      <div className='main'>
        <BrowserRouter>
          <Route path="/" exact component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/skills" component={Skills} />
        </BrowserRouter>





      </div>
      
    </div>
  );
}

export default App;
