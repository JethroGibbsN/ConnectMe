import React from 'react';
import Footer from  '../layout/Layout.js';
import './painting.css'

import ReactPlayer from "react-player"


function ChatPage() {
    return (
      <div className="ChatPage">
        <div className='center'>
          <button id="center" className="main-title"> Lets Paint Together!</button>    
        </div>

        <div className='center'> 
          <button className='paragraph'>Paint your favorite art works and learn new art techniques.</button>
        </div>


     
      <Footer/>

      </div>

    );
  }
  
  export default ChatPage;