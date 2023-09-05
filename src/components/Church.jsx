import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChurch } from "@fortawesome/free-solid-svg-icons";
import "../componentsCss/Church.css";
import { Link } from "react-router-dom";
import { NavBar } from "./NavBar.jsx";
export function Church() {
  return (
    <>
      <section className="body-church">
        <NavBar />
        <article className="church">
          <header>
            <div className="icon-church">
              <FontAwesomeIcon icon={faChurch} />
            </div>
          </header>
          <article>
            <div className="church-text">
              <h3>El amor verdadero</h3>
              <h3>Todo lo disculpa, todo lo cree,</h3>
              <h3>Todo lo espera, todo lo soporta</h3>
              <h3>El amor todo lo puede.</h3>
              <h4>1 Corintios 13</h4>
            </div>
            <div className="church-text-god">
              <h3>
                <span>¡</span>Dios bendecirá nuestra unión y nos gustaría que
                seas parte de ese momento<span>!</span>
              </h3>
            </div>
          </article>
          <div className="church-text-location">
            <h3>
              Los esperamos en la
              <strong>
                <span> Parroquia Sagrado Corazón de Jesús.</span>
              </strong>
            </h3>
            <h3>Videla Aranda, M5517 Cruz de Piedra, Maipú, Mendoza</h3>
          </div>
          <aside>
            <div className="maps-location">
              <button className="see-location">
                <Link to="https://www.google.com/maps/place/Parroquia+Sagrado+Corazón+de+Jesús,+Tres+Esquinas+(Cruz+de+Piedra+-Maipú+)/@-33.030766,-68.778859,18z/data=!3m1!4b1!4m6!3m5!1s0x967e7311c7140591:0xfd24dfb3382b8d4!8m2!3d-33.0307683!4d-68.7775689!16s%2Fg%2F11bx2gghhd?entry=ttu">
                  Ver locación
                </Link>
              </button>
            </div>
          </aside>
        </article>
      </section>
    </>
  );
}
