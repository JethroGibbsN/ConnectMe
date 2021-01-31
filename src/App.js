import logo from './logo.svg';
import './App.css';
import SiderDemo from './pages/layout/Layout.js';
import react,{Component}from "react"

class App extends Component{
  render(){
  return (
    <div className="App">
        <SiderDemo/>
    </div>
  );
}}

export default App;

//<img src={logo} className="App-logo" alt="logo" />