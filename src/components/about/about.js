import PersonIcon from "@mui/icons-material/Person";


function About(){
    return (
        <div id="aboutPage" className="aboutPage row pagesCommon">
        <div className="pagesTitle text-center p-3">
          <p>
            <PersonIcon sx={{ fontSize: 50 }} /> About Me
          </p>
        </div>
        <div className="card m-auto aboutPageCardBackground border-0">
          <h5 className="card-title text-center">I'm Sushil</h5>
          <p className="card-text aboutPageText">
            I am a student of B-tech IT at Bharati Vidyapeeth College of
            Engineering New Delhi (BVCOEND).
            <br />A good knowledge of Front-End Development to develop and
            design nice looking User Interface to help people grow and glow
            their websites.
          </p>
          <div className="aboutPageFooter">
            <h2 className="mailId">Email Id -: sushilbajpai2003@gmail.com</h2>
            <h2 className="place">Place -: New-Delhi - 110041</h2>
          </div>
        </div>
      </div>
    )
}

export default About;