import react,{Component}from "react"
import logo from './logo.svg';
import './App.css';
import SiderDemo from './pages/layout/Layout.js';

import LandingPage from './pages/LandingPage/Landing.js';//bayan

class App extends Component{
  render(){
  return (
    <div className="App">
        <SiderDemo/>
        <LandingPage/> //bayan
    </div>
    
  );
}}

export default App;

