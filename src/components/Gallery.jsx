import "../componentsCss/Gallery.css";
import { NavBar } from "./NavBar";
export function Gallery() {
  return (
    <>
      <section className="body-gallery">
        <NavBar />
        <article className="photos-gallery">
          <div className="photos">
            <img
              src="https://res.cloudinary.com/dn2vrx9eu/image/upload/v1700328997/IMG_4592_a5keel.jpg"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dn2vrx9eu/image/upload/v1700329001/IMG_4714_zdpbif.jpg"
              alt=""
              style={{ height: "350px" }}
            />
          </div>
          <div className="photos">
            <img
              src="https://res.cloudinary.com/dn2vrx9eu/image/upload/v1700328998/IMG_4636_aytoqd.jpg"
              alt=""
              className="foto-grande-1"
            />
            <img
              src="https://res.cloudinary.com/dn2vrx9eu/image/upload/v1700329003/IMG_4747_ctlwj8.jpg"
              alt=""
              style={{ height: "350px" }}
            />
            <img
              src="https://res.cloudinary.com/dn2vrx9eu/image/upload/v1700329007/IMG_4556_vuw3lm.jpg"
              alt=""
            />
          </div>
        </article>
        <div className="third-row">
          <img
            src="https://res.cloudinary.com/dn2vrx9eu/image/upload/v1700329002/IMG_4632_ibnfdi.jpg"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dn2vrx9eu/image/upload/v1700328999/IMG_4575_ejyn3p.jpg"
            alt=""
            className="foto-grande-2"
          />
        </div>
        <div className="fourth-row">
          <img
            src="https://res.cloudinary.com/dn2vrx9eu/image/upload/v1700328997/IMG_4652_slwluy.jpg"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dn2vrx9eu/image/upload/v1700328999/IMG_4540_pndiio.jpg"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dn2vrx9eu/image/upload/v1700329003/IMG_4702_w9eo6w.jpg"
            alt=""
            style={{ height: "500px" }}
          />
        </div>
        <div className="fifth-row">
          <img
            src="https://res.cloudinary.com/dn2vrx9eu/image/upload/v1700328997/IMG_4761_zrtqhi.jpg"
            alt=""
            style={{ height: "300px" }}
          />
          <img
            src="https://res.cloudinary.com/dn2vrx9eu/image/upload/v1700329002/IMG_4711_gllu92.jpg"
            alt=""
            style={{ height: "500px" }}
          />
        </div>
        <footer>
          <div className="made-by">
            <h2>
              Página desarrollada por: <strong>Gonzalo Saguas</strong>
            </h2>
          </div>
        </footer>
      </section>
    </>
  );
}
