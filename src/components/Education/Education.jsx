import "./education.scss";

const Education = () => {
  return (
    <div className="container education-section">
      <div className="education-wrapper flex justify-between">
        <h2 className="title">
          Edu<i>c</i>ation
        </h2>
        <div className="education-description">
          <div className="company-wrapper">
            <p className="p30 company">GOIT</p>
            <p className="p15 company-description">Full-stack development</p>
            <p className="p15 company-description">
              September 2020 - Jule 2021
            </p>
          </div>

          <div className="company-wrapper">
            <p className="p30 company">Kiev Polytechnic Institute</p>
            <p className="p15 company-description">
              "Radio engineering faculty"
            </p>
            <p className="p15 company-description">
              September 2018 - June 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
