import react from 'react';
import "./Landing.css";
import hand from '../img/hands.PNG';



function LandingPage() {
    return (
      <div className="LandingPage">

        <div className="Nav">
          
          <div className="Navbar">
       
        
         <a href="#signup">Sign Up</a>
         <a href="#activities">Activities</a>
         <a href="#about">About</a>


          </div>
         </div>


         <div className="Connect">
        
         <h2>ConnectMe</h2> 
         
         <div className="searchBox">

          <h4>Search for interests and Find a Matual Friend</h4>

        </div>

        </div>

        

        {/* <div className="image"> 

            <img src="https://unsplash.com/photos/bo3SHP58C3g" alt="Girl in a jacket" width="500" height="600"> </img>
          
        </div> */}

        <div className="image" >

        <img src={hand} ></img>

        </div>

        {/* <img src={hand} max-height="100%" max-width="100% "> </img> */}
       
        



        <div id = "boxes"> 
            <h1><h5>Join Group Activities</h5></h1> 
              
            <div id = "leftbox"> 
                <h5>Connect</h5> 
                <div id="littleBox"> <h6>connect</h6></div>
                
            </div>  
              
            <div id = "middlebox"> 
                <h5>Learn</h5> 
                <div id="littleBox"> <h6>connect</h6></div>
                
            </div> 
              
            <div id = "rightbox"> 
                <h5>Teach</h5> 
                <div id="littleBox"> <h6>connect</h6></div>
              
            </div> 
        </div> 


      </div>
    );
  }
  
  export default LandingPage;