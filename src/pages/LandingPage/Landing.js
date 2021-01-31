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

      <img className="join" src={join}></img>
      <img className="three" src={capture}></img>

      <div className="text">
        <h2 className="h22">About Us</h2>

        <p>
          ConnectMe is a webApp that provides you a safe space to share your
          interests of anything. Like, cooking, playing chess, and art.
          ConnectMe gives a chance to meet new people virtually who share
          similar interests to yours. You can sign up and create a profile and
          then search for a specific interest or you can check the activities
          pages to navigate through different activities. After choosing one,
          you check if there are any available/online users to connect with. If
          so, all you have to do is to click on the connect button to go to a
          separate page where you both are provided with an amazing interaction
          page. There you can talk about what you love, teach what you know, and
          learn new things using the live sharing screen section and the
          chat/video feature.
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
