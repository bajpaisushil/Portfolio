import React from "react";

function Home(){
    return (
        <div id="homePage" className="homePage row">
        <div className="homePageLeftPart">
          <div className="myName border-0">
            <div className="myNameText">
              Hi there!{<br />} It's Sushil <span style={{color:"orange"}}>Bajpai</span>
            </div>
          </div>
          <div className="col homePageSocials">
              <a className="homePageSites" 
                href="https://www.linkedin.com/in/sushil-bajpai-1a95441b4/"
                target="_blank" rel="noreferrer">
                  <img className="homePageIcon" src={"/images/linkedinIcon.png"}  alt="Linkedin Icon" />
              </a>
              <a className="homePageSites" 
               href="https://github.com/bajpaisushil/" target="_blank" rel="noreferrer">
                <img className="homePageIcon" src={"/images/githubIcon.png"}  alt="Github Icon" />
              </a>
              <a className="homePageSites" 
              href="https://www.hackerrank.com/sushilbajpai2003" target="_blank" rel="noreferrer">
                <img className="homePageIcon" src={"/images/hacker-rank.png"}  alt="hackerRank Icon" />
              </a>
            </div>
        </div>

        <div className="myImage border-0">
          <img
            className="myImageImg"
            src={"/images/my-image.png"}
            alt="Sushil Bajpai - Web Developer"
          />
        </div>
      </div>
    )
}

export default Home;