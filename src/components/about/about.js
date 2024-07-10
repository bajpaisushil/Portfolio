import PersonIcon from "@mui/icons-material/Person";

function About() {
  return (
    <div id="aboutPage" className="aboutPage row pagesCommon">
      <div className="pagesTitle text-center p-3">
        <p>
          <PersonIcon sx={{ fontSize: 50 }} /> About Me
        </p>
      </div>
      <div className="card m-auto aboutPageCardBackground border-0">
        {/* <h5 className="card-title text-center">It's Sushil</h5> */}
        <p className="card-text aboutPageText">
          {/* <br /> */}
          As a passionate full-stack developer, I bring creativity and
          efficiency to every project. With a strong foundation in both
          front-end and back-end technologies, I specialize in crafting robust
          and user-friendly applications. My commitment to delivering
          high-quality solutions is matched only by my curiosity and eagerness
          to embrace new challenges in the ever-evolving tech landscape. Let's
          build the future together through innovative and scalable solutions.
        </p>
        <div className="aboutPageFooter">
          <h2 className="mailId">Email Id -: sushilbajpai2003@gmail.com</h2>
          <h2 className="place">Place -: New-Delhi - 110041</h2>
        </div>
      </div>
    </div>
  );
}

export default About;
