import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ForwardSharpIcon from '@mui/icons-material/ForwardSharp';
import MarkunreadSharpIcon from '@mui/icons-material/MarkunreadSharp';
import PlaceSharpIcon from '@mui/icons-material/PlaceSharp';


function Footer(){
    return (
        <div className="footerPage row pagesCommon">
          <div className="card col-4 footerPageCards footerPageCard1">
            <div className="card-body">
              <h5 className="card-title py-3">Sushil's Portfolio</h5>
              <p className="card-text footerPageText">
                Thanks for visiting my Portfolio <br/> Hope You like it 👍
              </p>
            </div>
          </div>
          <div className="cards col-4 footerPageCards footerPageCard2 py-5">
            <div className="card-body footerPageQuicks">
              <h5 className="card-title footerPageQuickLink py-3">Quick-Links</h5>
              <p className="card-text footerPageQuickLinkLinks">
              <a href="#homePage"> <ForwardSharpIcon /> Home</a><br />
              <a href="#aboutPage"> <ForwardSharpIcon /> About</a><br />
              <a href="#skillsPage"> <ForwardSharpIcon /> Skills</a><br />
              <a href="#educationPage"> <ForwardSharpIcon /> Education</a><br />
              <a href="#achievementPage"> <ForwardSharpIcon /> Achievements</a><br />
              <a href="#projectPage"> <ForwardSharpIcon /> Projects</a><br />
              </p>
            </div>
          </div>
          <div className="card col-3 footerPageCards footerPageCard3">
            <div className="card-body">
              <h5 className="card-title p-2">Contact</h5>
              <p className="card-text footerPageText">
                <MarkunreadSharpIcon />-sushilbajpai2003@gmail.com<br/>
                <PlaceSharpIcon />-New Delhi-110041
              </p>
              <div className="footerPageContactLink">
              <a className="mx-4" href="https://www.linkedin.com/in/sushil-bajpai-1a95441b4/" target="_blank" rel="noreferrer">
                <LinkedInIcon sx={{ fontSize: 50 }} color="primary" />
              </a>
              <a href="https://github.com/sushil2003/" target="_blank" rel="noreferrer">
                <GitHubIcon sx={{ fontSize: 50 }} color="secondary" />
              </a>
              </div>
            </div>
          </div>
      </div>
    )
}

export default Footer;
