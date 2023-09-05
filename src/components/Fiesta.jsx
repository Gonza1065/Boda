import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChampagneGlasses } from "@fortawesome/free-solid-svg-icons";
import "../componentsCss/Fiesta.css";
import { Link } from "react-router-dom";
import { NavBar } from "./NavBar.jsx";
export function Fiesta() {
  return (
    <>
      <section className="body-party">
        <NavBar />
        <article className="party">
          <header>
            <div className="icon-champagne-glasses">
              <FontAwesomeIcon icon={faChampagneGlasses} />
            </div>
          </header>
          <article>
            <div className="party-text">
              <h3>Todos somos inmortales hasta el primer beso</h3>
              <h3>Y la segunda copa de vino...</h3>
              <div className="celebrate-with-us">
                <h1>¡Festejalo con nosotros!</h1>
              </div>
            </div>
            <div className="party-text-ubication">
              <h1>
                En el <strong>Salon Terra Oliva</strong>
              </h1>
              <h1>351, Videla Aranda, Cruz de Piedra, Maipú, Mendoza</h1>
            </div>
          </article>
          <aside>
            <div className="maps-location">
              <button className="see-location-party">
                <Link to="https://www.google.com/maps/place/Parroquia+Sagrado+Corazón+de+Jesús,+Tres+Esquinas+(Cruz+de+Piedra+-Maipú+)/@-33.030766,-68.778859,18z/data=!3m1!4b1!4m6!3m5!1s0x967e7311c7140591:0xfd24dfb3382b8d4!8m2!3d-33.0307683!4d-68.7775689!16s%2Fg%2F11bx2gghhd?entry=ttu">
                  Ver locación
                </Link>
              </button>
            </div>
          </aside>
          <article>
            <div className="party-text-assist-confirmation">
              <h3>No te olvides de confirmar asistencia</h3>
            </div>
          </article>
          <aside>
            <div className="assist">
              <button className="confirm-assist">
                <Link to="https://www.google.com/maps/place/Parroquia+Sagrado+Corazón+de+Jesús,+Tres+Esquinas+(Cruz+de+Piedra+-Maipú+)/@-33.030766,-68.778859,18z/data=!3m1!4b1!4m6!3m5!1s0x967e7311c7140591:0xfd24dfb3382b8d4!8m2!3d-33.0307683!4d-68.7775689!16s%2Fg%2F11bx2gghhd?entry=ttu">
                  Confirmar Asistencia
                </Link>
              </button>
            </div>
          </aside>
        </article>
      </section>
    </>
  );
}
