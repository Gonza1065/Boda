import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../componentsCss/NavBarPresentation.css";
export function NavBarPresentation() {
  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState(false);
  const toggleMenuMobile = () => {
    setIsOpenMenuMobile(!isOpenMenuMobile);
  };
  const classNameMobile = isOpenMenuMobile
    ? "menu-mobile-open"
    : "menu-mobile-close";
  return (
    <>
      <header className="logo-navbar">
        <img
          src="https://res.cloudinary.com/dn2vrx9eu/image/upload/v1693236185/Sebastian___Julieta-logos_transparent-removebg-preview_glrehb.png"
          alt=""
        />
      </header>
      <header>
        <nav>
          <ul className="navegation-presentation">
            <li>
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/invitacion">Invitación</NavLink>
            </li>
            <li>
              <NavLink to="/nuestra-historia">Nuestra Historia</NavLink>
            </li>
            <li>
              <NavLink to="/iglesia">Iglesia</NavLink>
            </li>
            <li>
              <NavLink to="/fiesta">Fiesta</NavLink>
            </li>
            <li>
              <NavLink to="/musica">Musica</NavLink>
            </li>
            <li>
              <NavLink to="/regalo">Regalo</NavLink>
            </li>
            <li>
              <NavLink to="/galeria">Galería</NavLink>
            </li>
          </ul>
        </nav>
      </header>
     
        <header>
          <nav>
            <ul className={classNameMobile}>
              <li>
                <NavLink to="/">Inicio</NavLink>
              </li>
              <li>
                <NavLink to="/invitacion">Invitación</NavLink>
              </li>
              <li>
                <NavLink to="/nuestra-historia">Nuestra Historia</NavLink>
              </li>
              <li>
                <NavLink to="/iglesia">Iglesia</NavLink>
              </li>
              <li>
                <NavLink to="/fiesta">Fiesta</NavLink>
              </li>
              <li>
                <NavLink to="/musica">Musica</NavLink>
              </li>
              <li>
                <NavLink to="/regalo">Regalo</NavLink>
              </li>
              <li>
                <NavLink to="/galeria">Galería</NavLink>
              </li>
            </ul>
          </nav>
        </header>
     
      <div className="menu-icon">
        <FontAwesomeIcon
          icon={faBars}
          onClick={toggleMenuMobile}
          className="menu-icon"
        />
      </div>
    </>
  );
}
