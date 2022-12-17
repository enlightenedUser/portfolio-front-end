import "./skills.scss";

const Skills = () => {
  return (
    <>
      <div className="container">
        <div className="skills-section">
          <h2 className="h2 title">
            Skill<i>s</i>
          </h2>
          <div className="skills-item">
            <div className="skills-list">
              <p className="p30 list-title">Tech</p>
              <div className="flex">
                <p className="skills-list-item">
                  React (router, redux, hooks, rest API)
                </p>
                <p className="skills-list-item">HTML</p>
              </div>
              <div className="flex">
                <p className="skills-list-item">JavaScript</p>
                <p className="skills-list-item">Webpack</p>
                <p className="skills-list-item">TypeScript</p>
                <p className="skills-list-item">CSS</p>
              </div>
              <div className="flex">
                <p className="skills-list-item">Web3.js, Ethers.js</p>
                <p className="skills-list-item">GIT</p>
                <p className="skills-list-item">
                  Adaptive and responsive coding
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="skills-section white">
        <div className="skills-item">
          <div className="skills-list">
            <p className="p30 list-title">Soft</p>
            <div className="flex">
              <p className="skills-list-item">Scrum</p>
              <p className="skills-list-item">Teamwork</p>
            </div>
            <div className="flex">
              <p className="skills-list-item">Agile</p>
              <p className="skills-list-item">Perseverance</p>
            </div>
            <div className="flex">
              <p className="skills-list-item">GTD</p>
              <p className="skills-list-item">Desire to develop</p>
            </div>
          </div>
        </div>
      </div>
      <div className="marginner"></div>
    </>
  );
};

export default Skills;
