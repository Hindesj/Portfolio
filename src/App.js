
import './App.css';
//import MediaCard from './components/MediaCard';
//import Navbutton from './components/NavButton';
import NavBar from './components/NavBar';
import About from './components/About';
import logo from './logo512.png';

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
        <About/>





      {/*
        <div className='mediaLayout'>
          <MediaCard/>
          <MediaCard/>
        </div>
        <div className='mediaLayout'>
          <MediaCard/>
          <MediaCard/>
        </div>
      */}
      </div>
      
    </div>
  );
}

export default App;
