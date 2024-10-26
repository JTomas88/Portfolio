import React from "react";
import { IoHome } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import { LuPersonStanding } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";
import { IoCodeSlashOutline } from "react-icons/io5";
import { MdOutlineMapsHomeWork } from "react-icons/md";





export const NavBar = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const paginas = {
    "/sobremi": {
      titulo: "Sobre mí",
      buttonText: "Sobre mí",
      buttonLink: "/sobremi"
    },
    "/experiencia": {
      titulo: "Experiencia / Proyectos",
      buttonText: "Experiencia / Proyectos",
      buttonLink: "/experiencia"
    },
    "/formacion": {
      titulo: "Formación",
      buttonText: "Formación",
      buttonLink: "/formacion"
    },
    "/conocimientos": {
      titulo: "Tecnologías e idiomas",
      buttonText: "Tecnologías e idiomas",
      buttonLink: "/conocimientos"
    },

  }

  const enHome = location.pathname === "/Portfolio";
  const pagActual = paginas[location.pathname]
  console.log(pagActual)

  if (enHome) return null;

  return (
    <div className="container">
      <nav className={`navbar sticky-top bg-body-tertiary shadow ${styles.botones}`}>
        <div>

        </div>
        {!enHome ? (
      <div className={styles.boton_container}>
            {pagActual?.buttonLink === '/sobremi' ? (
              <button type="button" className="btn btn-outline-dark" disabled style={{ width: "178px", height: "61px" }}>
                <div>
                  <LuPersonStanding />
                </div>
                Sobre mí
              </button>
            ) : (
              <button type="button" className="btn btn-outline-dark" onClick={() => navigate('/sobremi')} style={{ width: "178px", height: "61px" }}>
                <div>
                  <LuPersonStanding />
                </div>
                Sobre mí
              </button>
            )}


            {pagActual?.buttonLink === '/formacion' ? (
              <button type="button" className="btn btn-outline-dark" disabled style={{ width: "178px", height: "61px" }}>
                <div>
                  <IoBookOutline />
                </div>
                Formación
              </button>
            ) : (
              <button type="button" className="btn btn-outline-dark" onClick={() => navigate('/formacion')} style={{ width: "178px", height: "61px" }} >
                <div>
                  <IoBookOutline />
                </div>
                Formación
              </button>
            )}


            {/* Botón Home */}
            <button type="button" className="btn btn-outline-dark" onClick={() => navigate('/Portfolio')} >
              <IoHome style={{ fontSize: "30px" }} />
            </button>


            {pagActual?.buttonLink === '/conocimientos' ? (
              <button type="button" className="btn btn-outline-dark" disabled >
                <div>
                  <IoCodeSlashOutline />
                </div>
                Tecnologías / Idiomas
              </button>
            ) : (
              <button type="button" className="btn btn-outline-dark" onClick={() => navigate('/conocimientos')} >
                <div>
                  <IoCodeSlashOutline />
                </div>
                Tecnologías / Idiomas
              </button>
            )}



            {pagActual?.buttonLink === '/experiencia' ? (
              <button type="button" className="btn btn-outline-dark" disabled>
                <div>
                  <MdOutlineMapsHomeWork />
                </div>
                Experiencia / Proyectos
              </button>
            ) : (
              <button type="button" className="btn btn-outline-dark" onClick={() => navigate('experiencia')}>
                <div>
                  <MdOutlineMapsHomeWork />
                </div>
                Experiencia / Proyectos
              </button>
            )}




          </div>



        ) : null}

      </nav>
    </div>

  )
};

{/* <div className={`container ${homeVisible ? styles.box_navbar : ""}`}>
<nav
  className={`navbar sticky-top bg-body-tertiary ${
    homeVisible ? "shadow" : ""
  } ${homeVisible ? styles.box_navbar : styles.noPadding}`}
>
  <div className="container d-flex justify-content-center">
    {homeVisible && (
      <button
        type="button"
        style={{ fontSize: "30px" }}
        className="btn"
      >
        <Link
          to="/Portfolio"
          
        >
          <IoHome />
        </Link>
      </button>
    )}
  </div>
</nav>
</div>
); */}