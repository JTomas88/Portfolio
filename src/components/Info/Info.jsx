import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import styles from "./info.module.css"



export const Info = () => {
  return (
    <>
      <div className={styles.titulo}>
        Sobre mí
      </div>
      <div
        className={`container-fluid mt-4 mb-4 d-flex justify-content-center align-items-center`}
      >
        <div
          className={`row d-flex justify-content-center text-center ${styles.cajon_info}`}
        >

          <div className="mt-3">
            <p style={{ textAlign: "center" }}>
              Apasionado desarrollador full stack con un sólido dominio de
              tecnologías como React, Python y SQL. <br></br>
              Durante trabajos anteriores he adquirido habilidades de
              comunicación, resolución de problemas o escucha activa. <br></br>
              Busco contribuir al desarrollo y éxito de proyectos que mejoren la
              vida de las personas. Comprometido con la excelencia y en
              constante aprendizaje, deseo aplicar mis conocimientos al
              desarrollo web.
            </p>
          </div>

          <div className="mt-3 mb-3">
            <FaPhoneVolume />
            <h5>Teléfono de contacto</h5>
            <p>722 266 779</p>
          </div>

          <div className="mt-3 mb-3">
            <MdAlternateEmail />
            <h5>Correo electrónico</h5>
            <p>juan.tomas88@hotmail.com</p>
          </div>

          <div className="mt-3 mb-3">
            <FaHome />
            <h5>Lugar de residencia</h5>
            <p>El Viso de San Juan (Toledo)</p>
          </div>
        </div>
      </div>
    </>


  );
}