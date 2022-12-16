import "./header.scss";

const Header = () => {
  return (
    <div className="container">
      <div className="flex justify-between align-center">
        <p className="uppercase p15">Pavel Bulaienko</p>
        <div className="flex align-center">
          <p className="uppercase menu-item p15">Projects</p>
          <p className="uppercase menu-item p15">About</p>
          <p className="uppercase menu-item p15">Contacts</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
