import React from "react";
import styles from "./formacion.module.css"
import { MdCalendarMonth } from "react-icons/md";

export const Formacion = () => {
    return (
        <>
            <div className={styles.titulo}>
                Formación
            </div>
            <div className={`container-fluid mt-4 mb-4 d-flex justify-content-center align-items-center`}>
                <div className={`container text-center ${styles.cajon_formacion}`}>
                    <div >
                        <h2>Desarrollador Full Stack</h2>
                        <h4 style={{ color: "blue" }}>4Geeks Academy</h4>
                        <p>
                            <MdCalendarMonth />
                            2024
                        </p>
                    </div>
                    <hr></hr>
                    <div>
                        <h2>Programación profesional desde cero</h2>
                        <h4 style={{ color: "blue" }}>Udemy</h4>
                        <p>
                            <MdCalendarMonth />
                            2023
                        </p>
                    </div>
                    <hr></hr>
                    <div>
                        <h2>Diplomatura Trabajo Social</h2>
                        <h4 style={{ color: "blue" }}>Universidad Complutense de Madrid</h4>
                        <p>
                            <MdCalendarMonth />
                            2006-2010
                        </p>
                    </div>
                </div>

            </div>
        </>

    )
}