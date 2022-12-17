import { v4 as uuid } from "uuid";

import "./projects.scss";
import projectsList from "../../data/projects-list.json";
import arrowSvg from "../../assets/images/arrow.svg";

const Projects = () => {
  return (
    <div className="container">
      <div className="projects-wrapper" id="projects-section">
        <h2 className="title">
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
                <p className="project-type p15 main-color">
                  {item.projectType}
                </p>
                <p className="p15 main-color">{item.projectTechnology}</p>
              </div>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer nofollow"
                className="project-link"
              >
                <svg
                  width="46"
                  height="10"
                  viewBox="0 0 46 10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M45.4243 5.42426C45.6586 5.18995 45.6586 4.81005 45.4243 4.57574L41.6059 0.757359C41.3716 0.523045 40.9917 0.523045 40.7574 0.757359C40.523 0.991674 40.523 1.37157 40.7574 1.60589L44.1515 5L40.7574 8.39411C40.523 8.62843 40.523 9.00833 40.7574 9.24264C40.9917 9.47696 41.3716 9.47696 41.6059 9.24264L45.4243 5.42426ZM0 5.6L45 5.6V4.4L0 4.4L0 5.6Z" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
