import "./experience.scss";
import workList from "../../data/work-list.json";

const Experience = () => {
  return (
    <div className="container experience-section">
      <div className="wrapper">
        <h2 className="black title">
          Ex<i>p</i>erience
        </h2>
        {workList.map((work, index) => (
          <div key={index} className="work-item flex justify-between">
            <p className="p30 work-title">{work.title}</p>
            <div className="flex description-wrapper justify-between">
              <div>
                <p className="p15">Company: </p>
                <p className="p15">Technology: </p>
                <br />
                <p className="p15">Terms: </p>
              </div>
              <div className="company-description">
                <p className="p15 white-main">{work.company}</p>
                <p className="p15 white-main">{work.description}</p>
                <p className="p15 white-main">{work.technology}</p>
                <p className="p15 white-main">{work.terms}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Experience;
