import React from "react";
import fotoPerfil from "../assets/3.png";
import flecha from "../assets/flecha.png"
import styles from "./home.module.css"


export const Home = () => {
    return (
        <div className="container-fluid vh-100">
            <div className="d-flex flex-column justify-content-center align-items-center h-100">
                <div>
                    <img src={fotoPerfil} className={`img-fluid rounded-circle mt-4 ${styles.fotoPerfil}`}></img>
                </div>
                <div>
                    <h1 className="text-center mt-3">JUAN TOMÁS POVES</h1>
                </div>
            </div>
            <div>

                <div>
                    <button  type="button" className= {`btn btn-dark ${styles.btn_sup_izq}`} >Sobre mi</button>
                    <img src={flecha} className={`${styles.flecha_sup_izq} ${styles.text_blur_out}`}></img>
                </div>

                <div>
                <button  type="button" className= {`btn btn-dark ${styles.btn_sup_der}`} >Experiencia / Proyectos</button>
                    <img src={flecha} className={`${styles.flecha_sup_der} ${styles.text_blur_out}`}></img>
                </div>

                <div>
                <button  type="button" className= {`btn btn-dark ${styles.btn_inf_izq}`} >Formación</button>
                    <img src={flecha} className={`${styles.flecha_inf_izq} ${styles.text_blur_out}`}></img>
                </div>

                <div>
                <button  type="button" className= {`btn btn-dark ${styles.btn_inf_der}`} >Tecnologías</button>
                    <img src={flecha} className={`${styles.flecha_inf_der} ${styles.text_blur_out}`}></img>
                </div>
            </div>
        </div>
    )
}