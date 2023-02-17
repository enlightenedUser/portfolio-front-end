import "./firstScreen.scss";

const FirstScreen = () => {
  if (window.screen.width < 1200)
    return (
      <div className="container first-screen-container flex justify-between">
        <div className="uppercase text-center first-text">
          <h1 className="h1">
            Hi! I’m P<i>a</i>vel:)
          </h1>
          <h1 className="h1">
            Fr<i>o</i>ntend
          </h1>
        </div>
        <div className="uppercase text-center second-text">
          <i className="react-label text-left">react</i>
          <h1 className="h1">
            devel<i>o</i>per
          </h1>
          <h1 className="h1">
            b<i>a</i>sed in Kyiv
          </h1>
        </div>
      </div>
    );

  return (
    <div className="container first-screen-container flex justify-between">
      <div className="flex column uppercase">
        <div className="flex align-center">
          <i className="react-label">react</i>
          <h1 className="h1">Hi!</h1>
        </div>
        <h1 className="h1">
          Fr<i>o</i>ntend
        </h1>
        <h1 className="h1">
          b<i>a</i>sed
        </h1>
      </div>
      <div className="flex column uppercase">
        <h1 className="h1 text-right">
          I’m P<i>a</i>vel:)
        </h1>
        <h1 className="h1 text-right">
          devel<i>o</i>per
        </h1>
        <h1 className="h1 text-right">in Kyiv</h1>
      </div>
    </div>
  );
};

export default FirstScreen;
