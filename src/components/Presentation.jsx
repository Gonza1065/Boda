// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import "../componentsCss/Presentation.css";
import { useBackgroundImage } from "./context";
export function Presentacion() {
  // const { setBackgroundStyles } = useBackgroundImage();
  // useEffect(() => {
  //   setBackgroundStyles({
  //     backgroundImage:
  //       "url('https://res.cloudinary.com/dn2vrx9eu/image/upload/v1665614515/samples/landscapes/architecture-signs.jpg')",
  //     backgroundSize: "contain",
  //     backgroundPosition: "center",
  //   });
  // }, [setBackgroundStyles]);
  return (
    <>
      <section className="presentation">
        <div className="presentation-text">
          <h1>Caminaré contigo siempre</h1>
        </div>
      </section>
    </>
  );
}
