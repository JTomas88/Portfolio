import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import styles from "../Formación/formacion.module.css"
import { LuPersonStanding } from "react-icons/lu";



export const Info = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className={`row d-flex justify-content-center text-center ${styles.cajon_formacion}`}>
                <div className="mt-3">
                    <h3>
                    <LuPersonStanding />
                        Quien soy</h3>
                    <p style={{ textAlign: "center" }}>Apasionado desarrollador full stack con un sólido dominio de tecnologías como React, Python y SQL. <br></br>
                    Durante trabajos anteriores he adquirido habilidades de comunicación, resolución de problemas o escucha activa. <br></br>
                    Busco contribuir al desarrollo y éxito de proyectos que mejoren la vida de las personas. Comprometido con la excelencia y en constante aprendizaje, deseo aplicar mis conocimientos al desarrollo web.</p>
                </div>

                <div className="mt-3 mb-3">
                <FaPhoneVolume />
                    <h5 >Telefono de contacto</h5>
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
    )
}