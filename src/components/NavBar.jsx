import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../componentsCss/NavBar.css";
export function NavBar() {
  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState(false);
  const [animationBars, setAnimationBars] = useState(false);
  const toggleMenuMobile = () => {
    setIsOpenMenuMobile(!isOpenMenuMobile);
    setAnimationBars(!animationBars);
  };
  const classNameMobile = isOpenMenuMobile
    ? "menu-mobile-open"
    : "menu-mobile-close";
  const classNameAnimationBars = animationBars ? "animation-active" : "";
  return (
    <>
      <header className="logo-navbar">
        <img
          src="https://res.cloudinary.com/dn2vrx9eu/image/upload/v1700314685/WhatsApp_Image_2023-11-18_at_10.36.36-removebg-preview_kv1ayz.png"
          alt=""
        />
      </header>
      <header>
        <nav>
          <ul className="navegation">
            <li>
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/invitacion">Invitación</NavLink>
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
          className={`menu-icon ${classNameAnimationBars}`}
        />
      </div>
    </>
  );
}
