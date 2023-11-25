import SchoolIcon from "@mui/icons-material/School";

function Education() {
  return (
    <div className="educationPage row pagesCommons" id="educationPage">
      <div className="pagesTitle text-center p-3">
        <p>
          <SchoolIcon sx={{ fontSize: 50 }} color="black" /> My Education
        </p>
      </div>
        <div className="card w-75 h-25 educationPageCollege">
          <div className="educationPageImage">
            <img
              src={"/images/bvcoe.jpg"}
              className="card-img-top"
              alt="BVCOEND"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">Bachelor of Technology</h5>
            <p className="card-text educationPageText">
              Bharati Vidyapeeth's College Of Engineering, New Delhi (BVCOEND)
              <br />
              <p className="card-text educationPageMentions">
                2021-2025 | B-tech | Pursuing | 9.0 CGPA
              </p>
            </p>
          </div>
        </div>
        <div className="card w-75 h-25 educationPageTwelth">
          <div className="educationPageImage">
            <img
              src={"/images/gsbv.jpg"}
              className="card-img-top"
              alt="GSBV Peeragarhi"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">High School | Non-Medical | 12th </h5>
            <p className="card-text educationPageText">
              Govt. Sarvodaya Bal Vidyalaya (GSBV Peeragarhi)
              <br />
              <p className="card-text educationPageMentions">
                2019-2021 | Completed | 10 CGPA
              </p>
            </p>
          </div>
        </div>
        <div className="card w-75 h-25 educationPageTenth">
          <div className="educationPageImage">
            <img
              src={"/images/margshree.jpg"}
              className="card-img-top"
              alt="Margshree School"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">Secondary School | 10th </h5>
            <p className="card-text educationPageText">
              Margshree School, Nangloi New Delhi
              <br />
              <p className="card-text educationPageMentions">
                2018-2019 | Completed | 9.5 CGPA
              </p>
            </p>
          </div>
      </div>
    </div>
  );
}

export default Education;
