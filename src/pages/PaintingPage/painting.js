import React from 'react';
import Footer from  '../layout/Layout.js';
import './painting.css'

import ReactPlayer from "react-player"
import { CanvasProvider } from "./CanvasContext";
import { Canvas } from './Canvas'
import { ClearCanvasButton } from './ClearCanvasButton';

function Painting() {
    return (
      <div className="ChatPage">
        <div className='center'>
          <button id="center" className="main-title"> Lets Paint Together</button>    
        </div>

        <div className='center'> 
          <button className='paragraph'>Watch videos to learn new receipies from different cultures! </button>
        </div>

    
     
        <Footer/>
      </div>

    );
  }
  
  export default Painting;

  // <Canvas/>
  // <ClearCanvasButton/>



//   <div className='hero'>
//         <ReactPlayer
//         url="https://www.youtube.com/watch?v=ug50zmP9I7s"
//          />
//          <ReactPlayer
//          url="https://www.youtube.com/watch?v=ug50zmP9I7s"
//           />

//         </div>