import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import "../componentsCss/Gifts.css";
import { NavBar } from "./NavBar";
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
            <h3>Nuestro mejor regalo es compartir este día con ustedes,</h3>
            <h3>pero si deseas regalarnos algo podés hacerlo a:</h3>
          </div>
          <div className="gift-cbu">
            <h2>
              <span>CBU Juli:</span> 0170085540000035281533
            </h2>
            <h2>
              <span>CBU Seba:</span> <br className="separador" />
              01000008720981
            </h2>
            <h2>
              <span>Dirección Juli:</span> <br className="separador" />
              Av. Lima 785. San Martín, Mendoza.
            </h2>
            <h2>
              <span>Dirección Seba:</span> <br className="separador" />
              Le Parc 257, Palmira, San Martin, Mendoza.
            </h2>
          </div>
        </article>
      </section>
    </>
  );
}
