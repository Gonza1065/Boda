import { faGift } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../componentsCss/Gifts.css";
import { NavBar } from "./NavBar";
import { Link } from "react-router-dom";
export function Gifts() {
  return (
    <>
      <section className="body-gifts">
        <NavBar />
        <article className="gifts">
          <header>
            <div className="icon-gift">
              <FontAwesomeIcon icon={faGift} />
            </div>
          </header>
          <div className="gift-text">
            <h3>
              Nuestro mejor regalo es compartir ese día con ustedes, pero si
              estás pensando en darnos un presente, hemos creado una lista con
              lo que ya tenemos.
            </h3>
            <div className="btn-see-gifts">
              <button className="see-gifts">
                <Link to="https://docs.google.com/document/d/1fxdSfeRlq1OppIrRGvTgL6gQ4Ho_oa34xa574HU43k4/edit">
                  Ver lista
                </Link>
              </button>
            </div>
          </div>
          <div className="gift-cbu">
            <div className="datos-juli-seba">
              <h2>
                <strong>Datos Juli</strong>
              </h2>
              <h2>
                <span>CBU: </span>
                0170085540000035281533
              </h2>
              <h2>
                <span>Alias: </span>
                CASA.BARRA.GEN
              </h2>
              <h2>
                <span>Dirección: </span>
                Av. Lima 785. San Martín, Mendoza.
              </h2>
              <div className="datos-juli-seba">
                <h2>
                  <strong>Datos Seba</strong>
                </h2>
              </div>
              <h2>
                <span>CBU: </span>
                01000008720981
              </h2>
              <h2>
                <span>Alias: </span>
                SEBA.SIMBA
              </h2>
              <h2>
                <span>Dirección Seba: </span>
                Le Parc 257, Palmira, San Martin, Mendoza.
              </h2>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
