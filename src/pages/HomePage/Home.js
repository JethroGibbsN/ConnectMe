import react from 'react';


import SiderDemo from  '../layout/Layout.js';
import card1 from '../img/card1.jpg'
import card2 from '../img/card2.jpg'
import card3 from '../img/card3.jpg'
import card4 from '../img/card4.jpg'
import card5 from '../img/card5.jpg'
import card6 from '../img/card6.jpg'
// import card6 from '../img/hand.jpg'

import hand from '../img/hand.jpg'


import './Home.css'
function HomePage() {

    return (
      <div className="HomePage">

          <div id='homepage_title'>
            Group Activities
          </div>
          <div class="container">
          <a href= "https://meet.google.com/bnp-nset-gim" class ="card" ><img src={card1} width="287" height="263"></img></a>
          <a href= "https://meet.google.com/bnp-nset-gim" class ="card" ><img src={card2} width="287" height="263"></img></a>
          <a href= "https://meet.google.com/bnp-nset-gim" class ="card" ><img src={card3} width="287" height="263"></img></a>
          </div>
          <div class="container">
          <a href= "https://meet.google.com/bnp-nset-gim" class ="card" ><img src={card4} width="287" height="263"></img></a>
          <a href= "https://meet.google.com/bnp-nset-gim" class ="card" ><img src={card5} width="287" height="263"></img></a>
          <a href= "https://meet.google.com/bnp-nset-gim" class ="card" ><img src={card6} width="287" height="263"></img></a>
            </div>


      </div>
    );
  }
  
  export default HomePage;