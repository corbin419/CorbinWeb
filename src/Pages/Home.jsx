import React from "react";
import "../CSS/Home.css";
import { AiFillGithub } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";

const Home = () => {
  return (
    <div className="HomePage" id="Home">
      <div className="inner-width">
        <div className="Content">
          <h1>Hi I'm </h1>
          <div className="Sm">
            <a
              href="https://github.com/corbin419"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button id="Social-btn">
                <AiFillGithub style={{ width: "25px", height: "25px" }} />
              </button>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100002589980524"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button id="Social-btn">
                <MdFacebook style={{ width: "25px", height: "25px" }} />
              </button>
            </a>
            <div className="Buttons">
              <a href="/#Contact" id="Home-btn">
                Contact Me
              </a>
              <a href="/#" id="Home-btn">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
