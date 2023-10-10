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
            <h1>Ya estamos agregando canciones a la playlist</h1>
          </div>
          <aside className="add-song">
            <div className="maps-location">
              <button className="see-location">
                <Link to="https://spotify.link/7bW6ydFkNDb">
                  Añadí tu tema
                </Link>
              </button>
            </div>
            <div className="spotify">
              <iframe
                src="https://open.spotify.com/embed/playlist/6HhNF3CNARooIeezLRJuZz?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allowfullscreen=""
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
