import React, { Component } from "react";

import WithMoveValidation from "./WithMoveValidation";
import Chessboard from "chessboardjsx"
import VideoBox from '../img/video-box.png'
import User1 from '../img/user1.png'
import User2 from '../img/user2.png'

import './Demo.css'
class Demo extends Component {
  render() {
    return (
      <div>
        <div style={boardsContainer}>
        
        <div>
          <img className='user' src={User1}  />
          <img className='user' src={User2}  />
        </div>

        <WithMoveValidation />
        
        <div>
            <div class="rectangle"></div>
            <div class="rectangle"></div>
        </div>


        </div>
      </div>
    );
  }
}

export default Demo;
// <Chessboard className='chess-board' position="start"/>
// <WithMoveValidation />
// <Chessboard position="start"/>
const boardsContainer = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexWrap: "wrap",
  width: "100vw",
  marginTop: 30,
  marginBottom: 50
};

{/* <div> 
<img id='video-box' src={VideoBox}  />
<img id='video-box' src={VideoBox}  />
</div> */}
