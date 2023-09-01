import "../componentsCss/NavBar.css";
import { NavLink } from "react-router-dom";
export function NavBar() {
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
          <ul className="navegation">
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
    </>
  );
}
