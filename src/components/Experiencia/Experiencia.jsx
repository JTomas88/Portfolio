import React from "react";
import { GrLocationPin } from "react-icons/gr";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./experiencia.module.css";
export const Experiencia = () => {
  return (
    <>
      <div className={styles.titulo}>
        Experiencia y proyectos
      </div>
      <div
        className={`container-fluid mt-4 mb-4 d-flex justify-content-center align-items-center`}>
        <div className={`container text-center ${styles.cajon_experiencias}`}>
          <div className="row mt-3">
            <div className="col text-center border-end">
              <h4 className="mb-4" style={{ color: "black" }}>
                Experiencia laboral
              </h4>

              <div className="accordion" id="laboral">
                <div className={`accordion-item ${styles.items}`}>

                  <h2 className="accordion-header" id="atento">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#atentocollapse"
                      aria-expanded="false"
                      aria-controls="atentocollapse"
                    >
                      <div
                        className={`d-flex flex-column  ${styles.custom_width}`}
                      >
                        <strong style={{ fontSize: "18px" }}>
                          Atento España
                        </strong>
                        <span>
                          <p className={`${styles.empresa}`}>Contact Center</p>
                        </span>

                        <span className="">
                          <GrLocationPin /> Toledo, España
                          <p className="ms-3">2009 - 2024</p>
                        </span>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="atentocollapse"
                    className="accordion-collapse collapse"
                    data-bs-parent="#laboral"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li className="text-start">
                          <strong>Quality / Formador</strong>
                          <p>
                            Auditoría de llamadas atendidas por agentes
                            telefónicos para su evaluación siguiendo los
                            estándares de calidad marcados por la empresa.
                            <br></br>
                            Formaciones de reciclaje y nuevos productos (2
                            formaciones/mes)<br></br>
                            Elaboración de informes diarios por cliente (3
                            informes diarios)
                          </p>
                        </li>
                        <li className="text-start">
                          <strong>Coordinador</strong>
                          <p>
                            Feedbacks con el grupo de teleoperadores para
                            seguimiento
                            <br></br>
                            Elaboración de informes de ventas realizadas por el
                            grupo (diario, semanal y mensual)
                            <br></br>
                            Reuniones con mandos superiores para seguimiento
                            <br></br>
                            Supervisar el rendimiento de llamadas grupales y
                            optimizar la eficacia operativa
                          </p>
                        </li>
                        <li className="text-start">
                          <strong>Teleoperador</strong>
                          <p>
                            Atención de llamadas de clientes de gran operador de
                            comunicaciones. Información, apertura y seguimiento de
                            reclamaciones, averías, contrataciones, bajas y venta
                            cruzada.
                            <br></br>
                            Se alcanzaron los objetivos de calidad y ventas en un
                            80%
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col text-center">
              <h4 className="mb-4" style={{ color: "black" }}>
                Proyectos
              </h4>
              <div className="accordion" id="proyectos">


                <div className={`accordion-item ${styles.items}`}>
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#prideride"
                      aria-expanded="false"
                      aria-controls="prideride"
                    >
                      <div
                        className={`d-flex flex-column  ${styles.custom_width}`}
                      >
                        <strong style={{ fontSize: "18px" }}>PrideRide</strong>
                        <span className="">
                          <GrLocationPin /> Toledo - remoto
                          <p className="ms-3">Enero 2025 - actualmente</p>
                        </span>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="prideride"
                    className="accordion-collapse collapse"
                    data-bs-parent="#proyectos"
                  >
                    <div className="accordion-body">
                      <ul>

                        <li className="text-start">
                          <strong>Repositorio Git</strong>
                          <p className={styles.ruta}>
                            <a
                              href="https://github.com/JTomas88/PrideRide"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Git / PrideRide
                            </a>
                          </p>
                        </li>
                        <li className="text-start">
                          <strong>Objetivo</strong>
                          <p>
                            El objetivo es crear una plataforma que permita compartir viajes compartidos entre usuarios.
                            <br></br>
                            Los usuarios (previamente verificados como conductores) pueden publicar sus viajes (origen-destino, fecha, número de plazas disponibles).
                            Otros usuarios podrán buscar trayectos de viajes, e inscribirse como pasajero en aquellos vehículos que coincidan con sus criterios de búsqueda
                          </p>
                        </li>
                        <li className="text-start">
                          <strong>Tecnologías utilizadas</strong>
                          <p>
                            Front: Angular <br></br>
                            Back: Python
                            <br></br>
                            APIs externas: Cloudinary, Google Maps.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>



                <div className={`accordion-item ${styles.items}`}>
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#fansclub"
                      aria-expanded="false"
                      aria-controls="fansclub"
                    >
                      <div
                        className={`d-flex flex-column  ${styles.custom_width}`}
                      >
                        <strong style={{ fontSize: "18px" }}>Fans Club</strong>
                        <span className="">
                          <GrLocationPin /> Toledo - remoto
                          <p className="ms-3">Octubre 2024 - Enero 2025</p>
                        </span>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="fansclub"
                    className="accordion-collapse collapse"
                    data-bs-parent="#proyectos"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li className="text-start">
                          <strong>Web</strong>
                          <p className={styles.ruta}>

                            <a
                              href="https://siennafans.club"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Sienna Fans Club
                            </a>
                          </p>
                        </li>

                        <li className="text-start">
                          <strong>Repositorio Git</strong>
                          <p className={styles.ruta}>

                            <a
                              href="https://github.com/JTomas88/FansClub"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Git / FansClub
                            </a>
                          </p>
                        </li>
                        <li className="text-start">
                          <strong>Objetivo</strong>
                          <p>
                            El objetivo es crear un espacio donde se informe
                            acerca de novedades sobre un artista y dar a conocer
                            su carrera (utilizando visor de videos, fotos,
                            biografía con timeline, etc.).
                            <br></br>
                            Otro de los objetivos es crear una comunidad de
                            usuarios registrados para compartir experiencias
                            (conciertos, fotografías, sorteos, etc)
                          </p>
                        </li>
                        <li className="text-start">
                          <strong>Tecnologías utilizadas</strong>
                          <p>
                            Para la elaboración se está utilizando HTML con CSS y
                            React y Python para la parte de backend.
                            <br></br>
                            APIs externas: Cloudinary, Google Places.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={`accordion-item ${styles.items}`}>
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#carefy"
                      aria-expanded="false"
                      aria-controls="carefy"
                    >
                      <div
                        className={`d-flex flex-column  ${styles.custom_width}`}
                      >
                        <strong style={{ fontSize: "18px" }}>Carefy</strong>

                        <span className="">
                          <GrLocationPin /> Toledo - remoto
                          <p className="ms-3">Septiembre 2024</p>
                        </span>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="carefy"
                    className="accordion-collapse collapse"
                    data-bs-parent="#proyectos"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li className="text-start">
                          <strong>Repositorio Git</strong>
                          <p>
                            <a
                              href="https://github.com/JTomas88/Carefy-ProyectoFinal-"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Git / Carefy
                            </a>
                          </p>
                        </li>
                        <li className="text-start">
                          <strong>Objetivo</strong>
                          <p>
                            El objetivo principal de esta aplicación web es ayudar
                            a familias, que tienen entre sus miembros a alguna
                            persona de tercera edad que requieran ayuda, con
                            cuidadores que busquen un empleo.
                            <br></br>
                            Dispone de apartados visibles para todos los
                            visitantes (FAQS, Quiénes Somos). Permite crear
                            perfiles de varios roles (familiar, profesional y
                            administrador). Los profesionales pueden postularse a
                            anuncios creados por familiares, y estos pueden
                            contratarles y dejar reseñas sobre sus servicios
                            prestados.
                          </p>
                        </li>
                        <li className="text-start">
                          <strong>Tecnologías utilizadas</strong>
                          <p>
                            Para la elaboración se está utilizando HTML con CSS y
                            React y Python para la parte de backend.
                            <br></br>
                            APIs externas: Cloudinary.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};
