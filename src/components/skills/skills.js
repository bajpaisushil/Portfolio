import React from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";


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
        <div className="skillsPageSkill" style={{position: "relative", left: `${randomNumber(1,40)}%`}}>HTML</div>
        <div className="skillsPageSkill"  style={{position: "relative", left: `${randomNumber(1,40)}%`}}>CSS</div>

        <div
          className="skillsPageSkill"
          style={{
            backgroundImage: `url(/images/crocodile.png)`,
            position: "relative", left: `${randomNumber(1, 50)}%`
          }}
        >
          TailWind CSS
        </div>

        <div className="skillsPageSkill"  style={{position: "relative", left: `${randomNumber(1,40)}%`}}>JavaScript</div>

        <div
          className="skillsPageSkill"
          style={{
            backgroundImage: `url(/images/crocodile.png)`,
            position: "relative", left: `${randomNumber(1, 40)}%`
          }}
        >
          BootStrap
        </div>

        <div
          className="skillsPageSkill"
          style={{
            backgroundImage: `url(/images/shark.png)`,
            position: "relative", left: `${randomNumber(1, 40)}%`
          }}
        >
          ReactJS
        </div>

        <div className="skillsPageSkill"  style={{position: "relative", left: `${randomNumber(1,40)}%`}}>C / C++</div>

        <div className="skillsPageSkill"  style={{position: "relative", left: `${randomNumber(1,40)}%`}}>Python</div>

        <div className="skillsPageSkill"  style={{position: "relative", left: `${randomNumber(1,40)}%`}}>MySQL</div>

        <div className="skillsPageSkill"  style={{position: "relative", left: `${randomNumber(1,40)}%`}}>MongoDB</div>

        <div
          className="skillsPageSkill"
          style={{
            backgroundImage: `url(/images/shark.png)`,
            position: "relative", left: `${randomNumber(1, 40)}%`
          }}
        >
          Git & GitHub
        </div>
      </div>
    </div>
  );
}

export default Skills;
