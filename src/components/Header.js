import logo from "../assets/img/spaceship-logo.png";

const Header = () => {
  return (
    <header>
      <div>
        <img alt="Logo Calculator" src={logo} />
      </div>
      <h1>Ready to Go</h1>
    </header>
  );
};

export default Header;
