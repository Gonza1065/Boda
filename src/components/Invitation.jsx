import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../componentsCss/Invitation.css";
import { Count } from "./Count.jsx";
import { NavBar } from "./NavBar";
export function Invitacion() {
  return (
    <>
      <section className="body-invitation">
        <NavBar />
        <article className="invitation">
          <header>
            <div className="icon-invitation">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
          </header>
          <div className="invitation-text">
            <h3>Ha llegado el momento tan esperado por nosotros.</h3>
            <h1>
              <span className="nos-casamos">
                <span>¡</span>NOS CASAMOS<span>!</span>
              </span>
            </h1>
            <h3>Nos encantaria compartir este día tan especial,</h3>
            <h3>y queremos que formen parte de él.</h3>
          </div>
          <div className="date">
            <h3>
              <strong>¡</strong>Los esperamos el día 10 de marzo del 2024
              <strong>!</strong>
            </h3>
          </div>
          <aside>
            <div className="count">
              <Count />
            </div>
          </aside>
          <div className="dressing">
            <h4>Formal Elegante</h4>
          </div>
        </article>
      </section>
    </>
  );
}
