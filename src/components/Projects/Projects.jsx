import "./projects.scss";
import projectsList from "../../data/projects-list.json";

const Projects = () => {
  return (
    <div className="container">
      <h2>
        Pr<i>o</i>jects
      </h2>
      {projectsList.map((item) => (
        <div className="flex project-item">
          <p>{item.title}</p>
          <p>{item.projectType}</p>
          <p>{item.projectTechnology}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
