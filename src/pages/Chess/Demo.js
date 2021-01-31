import React, { Component } from "react";

import WithMoveValidation from "./WithMoveValidation";
import Chessboard from "chessboardjsx"
class Demo extends Component {
  render() {
    return (
      <div>
        <div style={boardsContainer}>
        
        <WithMoveValidation />

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
