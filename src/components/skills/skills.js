import React from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import shark from '../../images/shark.png';
import crocodile from '../../images/crocodile.png';
import turtle from '../../images/turtle.png';

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
        <marquee
          className="p-4 skillsText"
          scrollamount={`${randomNumber(2, 11)}%`}
          direction="right"
        >
          <div className="skillsPageSkill">HTML</div>
        </marquee>
        <marquee
          className="p-4 skillsText"
          scrollamount={`${randomNumber(2, 11)}%`}
          direction="right"
        >
          <div
            className="skillsPageSkill">
            CSS
          </div>
        </marquee>
        <marquee
          className="p-4 skillsText"
          scrollamount={`${randomNumber(2, 11)}%`}
          direction="right"
        >
          <div className="skillsPageSkill" style={{
            backgroundImage: `url(${crocodile})`,
          }}>TailWind CSS</div>
        </marquee>
        <marquee
          className="p-4 skillsText"
          scrollamount={`${randomNumber(2, 11)}%`}
          direction="right"
        >
          <div className="skillsPageSkill">JavaScript</div>
        </marquee>
        <marquee
          className="p-4 skillsText"
          scrollamount={`${randomNumber(2, 11)}%`}
          direction="right"
        >
          <div className="skillsPageSkill" style={{
            backgroundImage: `url(${crocodile})`,
          }}>BootStrap</div>
        </marquee>
        <marquee
          className="p-4 skillsText"
          scrollamount={`${randomNumber(2, 11)}%`}
          direction="right"
        >
          <div className="skillsPageSkill" style={{
              backgroundImage: `url(${shark})`,
            }}>ReactJS</div>
        </marquee>
        <marquee
          className="p-4 skillsText"
          scrollamount={`${randomNumber(2, 11)}%`}
          direction="right"
        >
          <div className="skillsPageSkill">C / C++</div>
        </marquee>
        <marquee
          className="p-4 skillsText"
          scrollamount={`${randomNumber(2, 11)}%`}
          direction="right"
        >
          <div className="skillsPageSkill">Python</div>
        </marquee>
        <marquee
          className="p-4 skillsText"
          scrollamount={`${randomNumber(2, 11)}%`}
          direction="right"
        >
          <div className="skillsPageSkill">MySQL</div>
        </marquee>
        <marquee
          className="p-4 skillsText"
          scrollamount={`${randomNumber(2, 11)}%`}
          direction="right"
        >
          <div className="skillsPageSkill">MongoDB</div>
        </marquee>
        <marquee
          className="p-4 skillsText"
          scrollamount={`${randomNumber(2, 5)}%`}
          direction="left"
        >
          <div className="skillsPageSkill" style={{
            backgroundImage: `url(${turtle})`,
          }}>Git & GitHub</div>
        </marquee>
      </div>
    </div>
  );
}

export default Skills;
