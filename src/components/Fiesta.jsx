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
              <h3>Todos somos inmortales</h3>
              <h3>Hasta el primer beso</h3>
              <h3>Y la segunda copa de </h3>
              <h3>vino...</h3>
              <div className="celebrate-with-us">
                <h1>
                  <span>¡</span>FESTEJALO CON NOSOTROS<span>!</span>
                </h1>
              </div>
            </div>
            <div className="party-text-ubication">
              <h1>
                En el <strong>Salón Terra Oliva</strong>
              </h1>
              <h1>351, Videla Aranda, Cruz de Piedra, Maipú, Mendoza</h1>
            </div>
          </article>
          <aside>
            <div className="maps-location">
              <button className="see-location-party">
                <Link to="https://www.google.com/maps/place/Terra+Oliva/@-33.028053,-68.7938064,17z/data=!3m1!4b1!4m6!3m5!1s0x967e7311c75ed4ff:0x3de5fa8f9d6a1300!8m2!3d-33.0280575!4d-68.7912261!16s%2Fg%2F11bxc7fflv?entry=ttu">
                  Ver locación
                </Link>
              </button>
            </div>
          </aside>
          <article>
            <div className="party-text-assist-confirmation">
              <h3>
                No te olvides de confirmar tu asistencia antes del 20 de febrero
                del 2024
              </h3>
            </div>
          </article>
          <aside>
            <div className="assist">
              <button className="confirm-assist">
                <Link to="#">Confirmar Asistencia</Link>
              </button>
            </div>
          </aside>
        </article>
      </section>
    </>
  );
}
