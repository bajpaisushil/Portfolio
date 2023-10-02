import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import { projects } from "./data";
// import MoreVertIcon from '@mui/icons-material/MoreVert';

function Project() {
  return (
    <div id="projectPage" className="projectPage row pagesCommon">
      <div className="pagesTitle text-center p-3">
        <p>
          <MovieFilterIcon fontSize="50" /> My Projects
        </p>
      </div>

      <div className="projects_container">
        {projects?.map((p) => (
          <div className="card projectPageCards">
            <a
              className="projectPageCardTitle"
              href={`${p.url}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={`/images/${p.photo}`}
                className="card-img projectPageImage"
                alt={`${p.photo}...`}
              />
            </a>
            <div className="">
              <p className="card-title projectPageCardTitle">{p.title}</p>
              <p className="projectPageCardInfo">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
