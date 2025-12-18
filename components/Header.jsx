import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <Link to="/">
        <img
          className="logo"
          src="/images/AudioSpecs-transparent.png"
          alt="logo"
        />
      </Link>

      <div className="icons">
        <Link to="/">
          <div className="nav-item">
            <i className="fa-solid fa-headphones"></i>
            <span>Home</span>
          </div>
        </Link>
        <Link to="/comparison">
          <div className="nav-item">
            <i className="fa-solid fa-code-compare"></i>
            <span>Compara</span>
          </div>
        </Link>
        <Link to="/favorites">
          <div className="nav-item">
            <i className="fa-solid fa-star"></i>
            <span>Preferiti</span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
