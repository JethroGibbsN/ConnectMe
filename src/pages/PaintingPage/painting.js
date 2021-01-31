import React, { Component } from "react";
import { render } from "react-dom";

import CanvasDraw from "react-canvas-draw";
import classNames from "./painting.css";
import Footer from  '../layout/Layout.js';

class Demo extends Component {
  state = {
    color: "#ffc600",
    width: 400,
    height: 400,
    brushRadius: 10,
    lazyRadius: 12
  };
  componentDidMount() {
    // let's change the color randomly every 2 seconds. fun!
    window.setInterval(() => {
      this.setState({
        color: "#" + Math.floor(Math.random() * 16777215).toString(16)
      });
    }, 2000);
  }
  render() {
    return (
      <div className='PaintingPage'>
        <h1>React Canvas Draw</h1>
    
        <CanvasDraw
          ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
          brushColor={this.state.color}
          brushRadius={this.state.brushRadius}
          lazyRadius={this.state.lazyRadius}
          canvasWidth={this.state.width}
          canvasHeight={this.state.height}
        />
      <Footer/>
      </div>
    );
  }
}

export default Demo;

  
       
// <CanvasDraw brushColor={this.state.color} />
        
// <CanvasDraw
//   brushColor="rgba(155,12,60,0.3)"
//   imgSrc="https://upload.wikimedia.org/wikipedia/commons/a/a1/Nepalese_Mhapuja_Mandala.jpg"
// />

// <CanvasDraw hideInterface hideGrid />




// import React from 'react';
// import Footer from  '../layout/Layout.js';
// import './painting.css'

// import { CanvasProvider } from "./CanvasContext";
// import { Canvas } from './Canvas'
// import { ClearCanvasButton } from './ClearCanvasButton';

// function Painting() {
//     return (
//       <div className="ChatPage">
//         <div className='center'>
//           <button id="center" className="main-title"> Lets Paint Together</button>    
//         </div>

//         <div className='center'> 
//           <button className='paragraph'>Watch videos to learn new receipies from different cultures! </button>
//         </div>
     
//         <Footer/>
//       </div>

//     );
//   }
  
//   export default Painting;