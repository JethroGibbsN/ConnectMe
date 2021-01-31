import react from "react";
import "./Landing.css";
import hand from "../img/hands.PNG";
import capture from "../img/Capture.PNG";
import join from "../img/join.PNG";

function LandingPage() {
  return (
    <div className="LandingPage">
      <div className="Nav">
        <div className="Navbar">
          <a href="http://localhost:3000/">Sign Up</a>
          <a href="#activities">Activities</a>
          <a href="#about">About</a>
        </div>
      </div>

      <div className="flex2">
        <div>
          <h2>ConnectMe</h2>
          <div className="searchBox">
            <h4>Search for interests and Find a Matual Friend</h4>
          </div>
        </div>

        <img className="img1" src={hand}></img>
      </div>

      <img className="join" src={join}></img>
      <img className="three" src={capture}></img>

      <div className="text">
        <h2 className="h22">About Us</h2>

        <p>
          With the evolving situation during the pandemic, people are facing
          many challenges. Such as socializing with others. It is getting very
          difficult to hangout with your loved ones and meeting new people. This
          leads to a huge affect on our mental health. This is why we wanted to
          create a tool where people from different ages and backgrounds can
          connect using **ConnectMe** tool. It gives a chance to meet new people
          who have similar interests to yours to talk about what you love, teach
          what you know, and learn new things.
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
