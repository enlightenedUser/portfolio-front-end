import { v4 as uuid } from "uuid";

import "./projects.scss";
import projectsList from "../../data/projects-list.json";
import arrowSvg from "../../assets/images/arrow.svg";

const Projects = () => {
  return (
    <div className="container">
      <h2>
        Pr<i>o</i>jects
      </h2>
      {projectsList.map((item) => (
        <div
          className="flex project-item justify-between align-center"
          key={uuid()}
        >
          <a href={item.url} target="_blank" rel="noreferrer nofollow">
            <p className="p30">{item.title}</p>
          </a>
          <div className="flex description-wrapper justify-between align-center">
            <div className="flex align-center">
              <p className="project-type p15 main-color">{item.projectType}</p>
              <p className="p15 main-color">{item.projectTechnology}</p>
            </div>
            <a href={item.url} target="_blank" rel="noreferrer nofollow">
              <img src={arrowSvg} alt="arrow" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
