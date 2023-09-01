import "../componentsCss/Invitation.css";
import { Count } from "./Count.jsx";
import { useEffect } from "react";
import { useBackgroundImage } from "./context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
export function Invitacion() {
  // const { setBackgroundStyles } = useBackgroundImage();
  // useEffect(() => {
  //   setBackgroundStyles({
  //     backgroundImage:
  //       'url("https://res.cloudinary.com/dn2vrx9eu/image/upload/v1665614521/samples/landscapes/nature-mountains.jpg")',
  //     backgroundSize: "contain",
  //     backgroundPosition: "center",
  //   });
  // }, [setBackgroundStyles]);
  return (
    <>
      <section className="invitation">
        <header>
          <div className="icon-invitation">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </header>
        <div className="invitation-text">
          <h3>Ha llegado el momento tan esperado por nosotros.</h3>
          <h1>
            <span className="nos-casamos">¡NOS CASAMOS!</span>
          </h1>
          <h3>Nos encantaria compartir este día tan especial,</h3>
          <h3>y queremos que formen parte de él</h3>
        </div>
        <div className="date">
          <h3>
            <strong>¡</strong>Los esperamos el dia 10 de marzo del 2024
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
      </section>
    </>
  );
}
