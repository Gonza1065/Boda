import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "../componentsCss/Music.css";
import { NavBar } from "./NavBar";
export function Music() {
  return (
    <>
      <section className="body-music">
        <NavBar />
        <article className="music">
          <header className="icon-music">
            <FontAwesomeIcon icon={faMusic} />
          </header>
          <div className="music-text">
            <h3>Que tu tema favorito no deje de</h3>
            <h3>sonar en nuestra fiesta</h3>
            <h1>¡Ayudanos a armar la lista!</h1>
            <h1>¡Sumate haciendo click!</h1>
          </div>
          <aside className="add-song">
            <div className="maps-location">
              <button className="see-location">
                <Link to="https://open.spotify.com/playlist/2v32qsQtYyBxL3fhQVRrrz">
                  Añadí tu tema
                </Link>
              </button>
            </div>
            <div className="spotify">
              <iframe
                src="https://open.spotify.com/embed/playlist/2v32qsQtYyBxL3fhQVRrrz?utm_source=generator&theme=0"
                width="80%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </aside>
        </article>
      </section>
    </>
  );
}
