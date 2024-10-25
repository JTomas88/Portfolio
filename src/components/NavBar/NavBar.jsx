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
    <div className={"container"}>
      <nav className={`navbar sticky-top bg-body-tertiary shadow ${styles.botones}`}>
        {!enHome ? (
          <div>

            {pagActual?.buttonLink === '/sobremi' ? (
              <button type="button" className="btn btn-outline-dark" disabled>
                <LuPersonStanding />
                Quién soy
              </button>
            ) : (
              <button type="button" className="btn btn-outline-dark"  onClick={() => navigate('/sobremi')}>
                <LuPersonStanding />
                Quién soy
              </button>
            )}


            {pagActual?.buttonLink === '/formacion' ? (
              <button type="button" className="btn btn-outline-dark"  disabled >
                <IoBookOutline />
                Formación
              </button>
            ) : (
              <button type="button" className="btn btn-outline-dark"  onClick={() => navigate('/formacion')} >
                <IoBookOutline />
                Formación
              </button>
            )}



            <button type="button" className="btn btn-outline-dark" onClick={()=> navigate('/Portfolio')} >
              <IoHome style={{ fontSize: "30px" }} />
            </button>


            {pagActual?.buttonLink === '/conocimientos' ? (
              <button type="button" className="btn btn-outline-dark" disabled >                 
                    <IoCodeSlashOutline />
                Tecnologías / Idiomas
              </button>
            ) : (
              <button type="button" className="btn btn-outline-dark" onClick={()=>navigate('/conocimientos')} >                
                    <IoCodeSlashOutline />                 
                Tecnologías / Idiomas
              </button>
            )}



            {pagActual?.buttonLink === '/experiencia' ? (
              <button type="button" className="btn btn-outline-dark" disabled>               
                    <MdOutlineMapsHomeWork />                  
                Experiencia / Proyectos
              </button>
            ) : (
              <button type="button" className="btn btn-outline-dark"  onClick={()=>navigate('experiencia')}>              
                    <MdOutlineMapsHomeWork />               
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