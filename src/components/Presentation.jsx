// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../componentsCss/Presentation.css";
import { NavBar } from "./NavBar";
export function Presentacion() {
  return (
    <>
      <section className="body-presentation">
        <NavBar />
        <article className="presentation">
          <div className="presentation-text">
            <h1>Caminaré contigo siempre</h1>
          </div>
        </article>
      </section>
    </>
  );
}
