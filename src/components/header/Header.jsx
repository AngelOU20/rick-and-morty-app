import { Link } from "react-router-dom";
import logoRickAndMorty from "../../assets/images/rick-and-morty-logo.webp";
import "../../assets/css/Header.css";

export const Header = () => {
  return (
    <header className="header">
      <Link to="/characters" className="header__logo">
        <img
          src={logoRickAndMorty}
          className="header__logo-image logo"
          alt="Logo"
        />
      </Link>

      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link to="/characters?page=" className="header__nav-link">
              Characters
            </Link>
          </li>
        </ul>

        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link to="/episode" className="header__nav-link">
              Episode
            </Link>
          </li>
        </ul>

        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link to="/location" className="header__nav-link">
              Location
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
