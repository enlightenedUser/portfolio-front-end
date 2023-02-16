import "./skills.scss";
import skillList from "../../data/skills.json";

const Skills = () => {
  return (
    <>
      <div className="container">
        <div className="skills-section title">
          <h2 className="h2 title">
            Skill<i>s</i>
          </h2>
        </div>
      </div>

      {skillList.map((skill, index) => (
        <div key={index} className={`skills-section ${skill.bgColor}`}>
          <div className="skills-item">
            <div className="skills-list">
              <p className="p30 list-title">{skill.type}</p>
              <div className="flex wrap">
                {skill.list.map((skillItem, index) => (
                  <p key={index} className="skills-list-item">
                    {skillItem}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="marginner"></div>
    </>
  );
};

export default Skills;
