// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../componentsCss/Presentation.css";
import { NavBarPresentation } from "./NavBarPresentation";
export function Presentacion() {
  return (
    <>
      <section className="body-presentation">
        <div className="nav-bar">
          <span>
            <NavBarPresentation />
          </span>
        </div>
        <article className="presentation">
          <div className="presentation-text">
            <h1>Caminaré contigo siempre</h1>
          </div>
        </article>
      </section>
    </>
  );
}
