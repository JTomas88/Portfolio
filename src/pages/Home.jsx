import React from "react";
import { useNavigate } from "react-router-dom";
import fotoPerfil from "../assets/profile.jpg";
import fotoPerfil2 from "../assets/3.png";
import flecha from "../assets/flecha.png";
import styles from "./home.module.css";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={`${styles.home_container}`}>
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
        <div>
          <img
            src={fotoPerfil2}
            className={`rounded-circle mt-4 ${styles.fotoPerfil}`}
            alt="Perfil"
          />
        </div>
        <div>
          <h1 className="text-center mt-3">JUAN TOMÁS POVES</h1>
          <h3 className="text-center" style={{ color: "blue" }}>
            Fullstack Developer
          </h3>
        </div>
      </div>
      <div>
        <div>
          <button
            type="button"
            className={`btn btn-dark ${styles.btn_sup_izq}`}
            onClick={() => navigate("/sobremi")}
          >
            Sobre mi
          </button>
          <img
            src={flecha}
            className={`${styles.flecha_sup_izq} ${styles.text_blur_out}`}
            alt="Flecha"
          />
        </div>

        <div>
          <button
            type="button"
            className={`btn btn-dark ${styles.btn_sup_der}`}
            onClick={() => navigate("/experiencia")}
          >
            Experiencia / Proyectos
          </button>
          <img
            src={flecha}
            className={`${styles.flecha_sup_der} ${styles.text_blur_out}`}
            alt="Flecha"
          />
        </div>

        <div>
          <button
            type="button"
            className={`btn btn-dark ${styles.btn_inf_izq}`}
            onClick={() => navigate("/formacion")}
          >
            Formación
          </button>
          <img
            src={flecha}
            className={`${styles.flecha_inf_izq} ${styles.text_blur_out}`}
            alt="Flecha"
          />
        </div>

        <div>
          <button
            type="button"
            className={`btn btn-dark ${styles.btn_inf_der}`}
            onClick={() => navigate("/conocimientos")}
          >
            Tecnologías / Idiomas
          </button>
          <img
            src={flecha}
            className={`${styles.flecha_inf_der} ${styles.text_blur_out}`}
            alt="Flecha"
          />
        </div>
      </div>
    </div>
  );
};
