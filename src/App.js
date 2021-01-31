import logo from './logo.svg';
import './App.css';
import SiderDemo from './pages/layout/Layout.js';
import LandingPage from './pages/LandingPage/Landing.js';//bayan


function App() {
  return (
    <div className="App">
        <SiderDemo/>
        <LandingPage/> //bayan
    </div>
    
  );
}

export default App;

//<img src={logo} className="App-logo" alt="logo" />