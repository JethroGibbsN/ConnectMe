import react from "react";
import "./Landing.css";
import hand from "../img/hands.PNG";
// import box1 from "../img/box1.PNG";
// import box2 from "../img/box2.PNG";
// import box3 from "../img/box3.PNG";
import capture from "../img/Capture.PNG";
import join from "../img/join.PNG";

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

      <div className="flex2">
        <div>
          <h2>ConnectMe</h2>
          <div className="searchBox">
            <h4>Search for interests and Find a Matual Friend</h4>
          </div>
        </div>

        <img className="img1" src={hand}></img>
      </div>

      {/* <div className="flex3">
        <img src={box1}></img>
        <img src={box2}></img>
        <img src={box3}></img>
      </div> */}

      {/* <div className="center">
        <button className="paragraph">
          Search for Interests and Find a Mutual Friend{" "}
        </button>
      </div> */}
      <img className="join" src={join}></img>
      <img src={capture}></img>

      <div>
        <h2 className="h22">About Us</h2>

        <p>
          With the evolving situation during the pandemic, people are facing
          many challenges. Such as socializing with others. It is getting very
          difficult to hangout with your loved ones and meeting new people. This
          leads to a huge affect on our mental health. This is why we wanted to
          create a tool where people from diffrent ages and backgrounds can
          connect using ConnectMe tool. It gives a chance to meet new people who
          have similar interests to yours to talk about it, teach it, and learn
          it.
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
