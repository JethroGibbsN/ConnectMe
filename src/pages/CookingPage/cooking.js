import React from 'react';
import Footer from  '../layout/Layout.js';
import './cooking.css'

import ReactPlayer from "react-player"


function ChatPage() {
    return (
      <div className="ChatPage">
        <div className='center'>
          <button id="center" className="main-title"> Cooking Together</button>    
        </div>

        <div className='center'> 
          <button className='paragraph'>Watch videos to learn new receipies from different cultures! </button>
        </div>

        <div className='hero'>
        <ReactPlayer
        url="https://www.youtube.com/watch?v=zjosQxz_b44"
         />
         <ReactPlayer
         url="https://www.youtube.com/watch?v=nKjJuGRqgKA"
          />

        </div>
        
     
      <Footer/>


      </div>

    );
  }
  
  export default ChatPage;

//   <div className='hero'>
//         <ReactPlayer
//         url="https://www.youtube.com/watch?v=ug50zmP9I7s"
//          />
//          <ReactPlayer
//          url="https://www.youtube.com/watch?v=ug50zmP9I7s"
//           />

//         </div>