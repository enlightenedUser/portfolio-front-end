import "./experience.scss";

const Experience = () => {
  return (
    <div className="container experience-section">
      <div className="wrapper">
        <h2 className="black title">
          Ex<i>p</i>erience
        </h2>
        <div className="work-item flex justify-between">
          <p className="p30">Front-end Developer</p>
          <div className="flex description-wrapper justify-between">
            <div>
              <p className="p15">Company: </p>
              <p className="p15">Technology: </p>
              <br />
              <p className="p15">Terms: </p>
            </div>
            <div className="company-description">
              <p className="p15 white-main">Nimbus</p>
              <p className="p15 white-main">DAO-governed platform</p>
              <p className="p15 white-main">React /HTML / CSS /JavaScript</p>
              <p className="p15 white-main">
                September 2021 - December 2022 (1 year 4 month)
              </p>
            </div>
          </div>
        </div>
        <div className="work-item flex justify-between">
          <p className="p30">Front-end Developer</p>
          <div className="flex description-wrapper justify-between">
            <div>
              <p className="p15">Company: </p>
              <p className="p15">Technology: </p>
              <br />
              <p className="p15">Terms: </p>
            </div>
            <div className="company-description">
              <p className="p15 white-main">Terrapromo</p>
              <p className="p15 white-main">Website development</p>
              <p className="p15 white-main">HTML / CSS /PHP /JavaScript</p>
              <p className="p15 white-main">March 2021 - June 2021 (4 month)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
