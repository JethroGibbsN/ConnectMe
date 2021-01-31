import React from 'react';
import Footer from  '../layout/Layout.js';
import Demo from '../Chess/Demo'
import './Chat.css'

function ChatPage() {
    return (
      <div className="ChatPage">
        <div className='center'>
          <button id="center" className="main-title"> Chess Game</button>    
        </div>

        <div className='center'> 
          <button className='paragraph'>You can now play a match tournamet with your new friend! </button>
        </div>

      <Demo/>

      <Footer/>
      </div>

    );
  }
  
  export default ChatPage;

// <Footer/>
//   <div>
//   <p>Title</p>
//   <img className="card" src={Card} />
//   <button> Learn </button>
// </div>

// <div>
// <p>Title</p>
// <img className="card" src={Card} />
// <button className='button-learn'> Learn </button>
// </div>