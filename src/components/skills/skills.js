import React from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import shark from "../../images/shark.png";
import crocodile from "../../images/crocodile.png";
import turtle from "../../images/turtle.png";

function Skills() {
  // const [num, setNum] = useState(0);

  function randomNumber(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return (
    <div id="skillsPage" className="skillsPage row pagesCommon">
      <div className="pagesTitle text-center p-3">
        <p>
          <CalendarTodayIcon sx={{ fontSize: 40 }} /> Skills -:
        </p>
      </div>
      <div className="skillsAll w-100">
        <div className="skillsPageSkill" style={{position: "relative", left: `${randomNumber(1,50)}%`}}>HTML</div>
        <div className="skillsPageSkill"  style={{position: "relative", left: `${randomNumber(1,50)}%`}}>CSS</div>

        <div
          className="skillsPageSkill"
          style={{
            backgroundImage: `url(${crocodile})`,
            position: "relative", left: `${randomNumber(1, 50)}%`
          }}
        >
          TailWind CSS
        </div>

        <div className="skillsPageSkill"  style={{position: "relative", left: `${randomNumber(1,50)}%`}}>JavaScript</div>

        <div
          className="skillsPageSkill"
          style={{
            backgroundImage: `url(${crocodile})`,
            position: "relative", left: `${randomNumber(1, 50)}%`
          }}
        >
          BootStrap
        </div>

        <div
          className="skillsPageSkill"
          style={{
            backgroundImage: `url(${shark})`,
            position: "relative", left: `${randomNumber(1, 50)}%`
          }}
        >
          ReactJS
        </div>

        <div className="skillsPageSkill"  style={{position: "relative", left: `${randomNumber(1,50)}%`}}>C / C++</div>

        <div className="skillsPageSkill"  style={{position: "relative", left: `${randomNumber(1,50)}%`}}>Python</div>

        <div className="skillsPageSkill"  style={{position: "relative", left: `${randomNumber(1,50)}%`}}>MySQL</div>

        <div className="skillsPageSkill"  style={{position: "relative", left: `${randomNumber(1,50)}%`}}>MongoDB</div>

        <div
          className="skillsPageSkill"
          style={{
            backgroundImage: `url(${turtle})`,
            position: "relative", left: `${randomNumber(1, 50)}%`
          }}
        >
          Git & GitHub
        </div>
      </div>
    </div>
  );
}

export default Skills;
