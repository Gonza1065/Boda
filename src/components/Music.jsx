import "../componentsCss/Music.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { NavBar } from "./NavBar";
export function Music() {
  return (
    <>
      <section className="music">
        <NavBar />
        <header className="icon-music">
          <FontAwesomeIcon icon={faMusic} />
        </header>
        <div className="music-text">
          <h3>Que tu tema favorito no deje de</h3>
          <h3>sonar en nuestra fiesta</h3>
          <h1>¡Ayudanos a armar la lista!</h1>
          <h1>¡Sumate haciendo click!</h1>
        </div>
        <aside>
          <div className="maps-location">
            <button className="see-location">
              <Link to="#">Añadí tu tema</Link>
            </button>
          </div>
        </aside>
      </section>
    </>
  );
}
