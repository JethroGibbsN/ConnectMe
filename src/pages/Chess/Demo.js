import React, { useEffect, useRef, useState, Component } from "react";
import io from "socket.io-client";
import Peer from "simple-peer";
import styled from "styled-components";

import WithMoveValidation from "./WithMoveValidation";
import Chessboard from "chessboardjsx"
import VideoBox from '../img/video-box.png'
import User1 from '../img/user1.png'
import User2 from '../img/user2.png'
import Footer from '../layout/Layout'

import './Demo.css'

const Video = (props) => {
  const ref = useRef();

  useEffect(() => {
      props.peer.on("stream", stream => {
          ref.current.srcObject = stream;
      })
  }, []);

  return (
      <video  playsInline autoPlay ref={ref} />
  );
}

const videoConstraints = {
  height: window.innerHeight / 2,
  width: window.innerWidth / 2
};


const Demo  = () => {
  const [peers, setPeers] = useState([]);
  const socketRef = useRef();
  const userVideo = useRef();
  const peersRef = useRef([]);
  const roomID = "1234";

  useEffect(() => {
    socketRef.current = io.connect("/");
    navigator.mediaDevices.getUserMedia({ video: videoConstraints, audio: true }).then(stream => {
        userVideo.current.srcObject = stream;
        socketRef.current.emit("join room", roomID);
        socketRef.current.on("all users", users => {
            const peers = [];
            users.forEach(userID => {
                const peer = createPeer(userID, socketRef.current.id, stream);
                peersRef.current.push({
                    peerID: userID,
                    peer,
                })
                peers.push(peer);
            })
            setPeers(peers);
        })

        socketRef.current.on("user joined", payload => {
            const peer = addPeer(payload.signal, payload.callerID, stream);
            peersRef.current.push({
                peerID: payload.callerID,
                peer,
            })

            setPeers(users => [...users, peer]);
        });

        socketRef.current.on("receiving returned signal", payload => {
            const item = peersRef.current.find(p => p.peerID === payload.id);
            item.peer.signal(payload.signal);
        });
    })
  }, []);

  function createPeer(userToSignal, callerID, stream) {
    const peer = new Peer({
        initiator: true,
        trickle: false,
        stream,
    });

    peer.on("signal", signal => {
        socketRef.current.emit("sending signal", { userToSignal, callerID, signal })
    })

    return peer;
}

function addPeer(incomingSignal, callerID, stream) {
    const peer = new Peer({
        initiator: false,
        trickle: false,
        stream,
    })

    peer.on("signal", signal => {
        socketRef.current.emit("returning signal", { signal, callerID })
    })

    peer.signal(incomingSignal);

    return peer;
}
    return (
        <div style={boardsContainer}>

        <WithMoveValidation />

        <div class="video-css">
        <video muted ref={userVideo} autoPlay playsInline />
            {peers.map((peer, index) => {
              if (index > 2) return;
                return (
                    <Video key={index} peer={peer} />
                );
            })}
        </div>


        </div>
    );

}

export default Demo;
// <Chessboard className='chess-board' position="start"/>
// <WithMoveValidation />
// <Chessboard position="start"/>
const boardsContainer = {
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  width: "100vw",
  marginTop: 30,
  marginBottom: 50
};

{/* <div>
<img id='video-box' src={VideoBox}  />
<img id='video-box' src={VideoBox}  />
</div> */}
