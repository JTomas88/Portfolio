import React from "react";
import { IoHome } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import { LuPersonStanding } from "react-icons/lu";
import { IoBookOutline, IoCodeSlashOutline } from "react-icons/io5";
import { MdOutlineMapsHomeWork } from "react-icons/md";

export const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const paginas = {
    "/sobremi": {
      titulo: "Sobre mí",
      buttonText: "Sobre mí",
      buttonLink: "/sobremi",
    },
    "/experiencia": {
      titulo: "Experiencia / Proyectos",
      buttonText: "Experiencia / Proyectos",
      buttonLink: "/experiencia",
    },
    "/formacion": {
      titulo: "Formación",
      buttonText: "Formación",
      buttonLink: "/formacion",
    },
    "/conocimientos": {
      titulo: "Tecnologías e idiomas",
      buttonText: "Tecnologías e idiomas",
      buttonLink: "/conocimientos",
    },
  };

  const enHome = location.pathname === "/Portfolio";
  const pagActual = paginas[location.pathname];

  if (enHome) return null;

  return (
    <div className={`container ${styles.contenedor}`}>
      <nav className={`navbar sticky-top bg-body-tertiary shadow ${styles.botones}`}>
        {location.pathname !== "/" && (
          <div className={styles.boton_container}>
            {pagActual?.buttonLink === "/sobremi" ? (
              <button type="button" className={`btn btn-outline-dark ${styles.boton}`} disabled>
                <div>
                  <LuPersonStanding />
                </div>
                Sobre mí
              </button>
            ) : (
              <button type="button" className={`btn btn-outline-dark ${styles.boton}`} onClick={() => navigate("/sobremi")}>
                <div>
                  <LuPersonStanding />
                </div>
                Sobre mí
              </button>
            )}

            {pagActual?.buttonLink === "/formacion" ? (
              <button type="button" className={`btn btn-outline-dark ${styles.boton}`} disabled>
                <div>
                  <IoBookOutline />
                </div>
                Formación
              </button>
            ) : (
              <button type="button" className={`btn btn-outline-dark ${styles.boton}`} onClick={() => navigate("/formacion")}>
                <div>
                  <IoBookOutline />
                </div>
                Formación
              </button>
            )}

            {/* Botón Home */}
            <button type="button" className={`btn btn-outline-dark ${styles.boton}`} onClick={() => navigate("/")}>
              <IoHome style={{ fontSize: "30px" }} />
            </button>

            {pagActual?.buttonLink === "/conocimientos" ? (
              <button type="button" className={`btn btn-outline-dark ${styles.boton}`} disabled>
                <div>
                  <IoCodeSlashOutline />
                </div>
                Tecnologías / Idiomas
              </button>
            ) : (
              <button type="button" className={`btn btn-outline-dark ${styles.boton}`} onClick={() => navigate("/conocimientos")}>
                <div>
                  <IoCodeSlashOutline />
                </div>
                Tecnologías / Idiomas
              </button>
            )}

            {pagActual?.buttonLink === "/experiencia" ? (
              <button type="button" className={`btn btn-outline-dark ${styles.boton}`} disabled>
                <div>
                  <MdOutlineMapsHomeWork />
                </div>
                Experiencia / Proyectos
              </button>
            ) : (
              <button type="button" className={`btn btn-outline-dark ${styles.boton}`} onClick={() => navigate("/experiencia")}>
                <div>
                  <MdOutlineMapsHomeWork />
                </div>
                Experiencia / Proyectos
              </button>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};
