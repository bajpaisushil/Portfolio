import MovieFilterIcon from "@mui/icons-material/MovieFilter";
// import MoreVertIcon from '@mui/icons-material/MoreVert';

function Project() {
  return (
    <div id="projectPage" className="projectPage row pagesCommon">
      <div className="pagesTitle text-center p-3">
        <p>
          <MovieFilterIcon fontSize="50" /> My Projects
        </p>
      </div>
      
      <div className="card projectPageCards col-5">
        <img
          src={require("../../images/weather-app.png")}
          className="card-img"
          alt="Weather App..."
        />
        <div className="card-body">
          <p className="card-title text-center">
            <a
              className="projectPageCardTitle card-text"
              href="https://weather-vanilla-project.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Weather App
            </a>
          </p>
          <p className="card-text projectPageCardInfo">
            A Frontend Project that gives information about the Weather of all
            the major cities of the world.
          </p>
        </div>
      </div>
      <div className="card projectPageCards col-5">
        <img
          src={require("../../images/tenzies.png")}
          className="card-img"
          alt="Tenzies Game..."
        />
        <div className="card-body">
          <p className="card-title text-center">
            <a
              className="projectPageCardTitle card-text"
              href="https://lets-tenzy.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Tenzies Game
            </a>
          </p>
          <p className="card-text projectPageCardInfo">
            Try making Tenzies within 40 seconds
          </p>
        </div>
      </div>
      <div className="card projectPageCards col-5">
        <img
          src={require("../../images/restaurant.png")}
          className="card-img"
          alt="Restaurant UI..."
        />
        <div className="card-body">
          <p className="card-title text-center">
            <a
              className="projectPageCardTitle card-text"
              href="https://restaurant-uiux.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Restaurant UI
            </a>
          </p>
          <p className="card-text projectPageCardInfo">
            A Frontend UI/UX Project displaying User Interface of a Cool Restaurant having fresh Ingredients and Look throughout.
          </p>
        </div>
      </div>
      <div className="card projectPageCards col-5">
        <img
          src={require("../../images/notes-keeping-app.png")}
          className="card-img"
          alt="Notes Keeping App..."
        />
        <div className="card-body">
          <p className="card-title text-center">
            <a
              className="projectPageCardTitle card-text"
              href="https://notes-keep-frontend.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Notes Keeping App
            </a>
          </p>
          <p className="card-text projectPageCardInfo">
            A Full-Stack Notes Keeping App to save your memory
          </p>
        </div>
      </div>

    </div>
  );
}

export default Project;
