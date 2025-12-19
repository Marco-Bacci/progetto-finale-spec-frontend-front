import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="p-4">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-12 col-md-4 text-center text-md-start">
            <Link to="/">
              <img
                className="logo"
                src="/images/AudioSpecs-transparent.png"
                alt="logo"
              />
            </Link>
          </div>

          <div className="col-12 col-md-8">
            <nav className="icons d-flex justify-content-center justify-content-md-end">
              <Link to="/" className="nav-item">
                <i className="fa-solid fa-headphones"></i>
                <span className="d-none d-sm-inline ms-1">Home</span>
              </Link>

              <Link to="/comparison" className="nav-item">
                <i className="fa-solid fa-code-compare"></i>
                <span className="d-none d-sm-inline ms-1">Compara</span>
              </Link>

              <Link to="/favorites" className="nav-item">
                <i className="fa-solid fa-star"></i>
                <span className="d-none d-sm-inline ms-1">Preferiti</span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
