import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

function Achievement() {
  return (
    <div id="achievementPage" className="achievementPage row pagesCommon">
      <div className="pagesTitle text-center p-3">
        <p>
          <EmojiEventsIcon fontSize="50" /> My Achievements
        </p>
      </div>
        <div className="card achievementCard col-3">
          <img
            src={require("./achieves/bvicam_contest.jpg")}
            className="achievementCard-img m-2"
            alt=" BVICAM: Coding Contest ..."
          />{" "}
          <div className="card-body">
            <p className="card-text achievementCardText">
              BVICAM: Coding Contest
            </p>
          </div>
        </div>
        <div className="card achievementCard col-3">
          <img
            src={require("./achieves/bitdegree.jpg")}
            className="achievementCard-img m-2"
            alt=" Web Design bitdegree ..."
          />{" "}
          <div className="card-body">
            <p className="card-text achievementCardText">
              Web Designing
            </p>
          </div>
        </div>
        <div className="card achievementCard col-3">
          <img
            src={require("./achieves/coursera_math.jpg")}
            className="achievementCard-img m-2"
            alt=" Coursera Math ..."
          />{" "}
          <div className="card-body">
            <p className="card-text achievementCardText">
              Data Science Mathematics
            </p>
          </div>
        </div>
        <div className="card achievementCard col-3">
          <img
            src={require("./achieves/udemy_python.jpg")}
            className="achievementCard-img m-2"
            alt=" Python Udemy ..."
          />
          <div className="card-body">
            <p className="card-text achievementCardText">
              Python Programming BootCamp
            </p>
          </div>
        </div>
        <div className="card achievementCard col-3">
          <img
            src={require("./achieves/who.jpg")}
            className="achievementCard-img m-2"
            alt=" W.H.O. ..."
          />{" "}
          <div className="card-body">
            <p className="card-text achievementCardText">
              W.H.O. Achievement
            </p>
          </div>
        </div>
        <div className="card achievementCard col-3">
          <img
            src={require("./achieves/plezmo_app.jpg")}
            className="achievementCard-img m-2"
            alt=" Plezmo App Designing ..."
          />{" "}
          <div className="card-body">
            <p className="card-text achievementCardText">
              Plezmo App Designing
            </p>
          </div>
        </div>
        <div className="card achievementCard col-3">
          <img
            src={require("./achieves/plezmo_web.jpg")}
            className="achievementCard-img m-2"
            alt=" Plezmo Web Designing ..."
          />{" "}
          <div className="card-body">
            <p className="card-text achievementCardText">
              Plezmo Web Designing
            </p>
          </div>
        </div>
        </div>
  );
}

export default Achievement;
