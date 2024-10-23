import React from "react";
import styles from "./conocimientos.module.css";
import { FaHtml5 } from "react-icons/fa";
import { MdCss } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoSass } from "react-icons/io5";
import { SiJsonwebtokens } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { TbSql } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { LuFileCode2 } from "react-icons/lu";
import { FaMarkdown } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { MdHttp } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiCloudinary } from "react-icons/si";
import { FaGooglePlus } from "react-icons/fa6";


export const Conocimientos = () => {
    return (
        <div className={`container-fluid vh-100 d-flex justify-content-center align-items-start mt-4 ${styles.fondo_conocimientos}`} style={{ minHeight: "80vh" }}>
            <div className={`container text-center`}>
                {/* Contenedor de conocimientos */}
                <div className={`container-fluid text-center ${styles.cajon_conocimientos}`}>
                    <div>
                        <h2 style={{color:"blue"}}>Frontend</h2>
                        <div className="row justify-content-center ">
                            <div className="col-4 d-flex flex-column align-items-center">
                                <FaHtml5 size={40} />
                                <p>HTML5</p>
                            </div>

                            <div className="col-4 d-flex flex-column align-items-center">
                                <MdCss size={40}/>
                                <p>CSS</p>
                            </div>

                            <div className="col-4 d-flex flex-column align-items-center">
                                <IoLogoJavascript size={40}/>
                                <p>Javascript</p>
                            </div>

                            <div className="col-4 d-flex flex-column align-items-center">
                                <FaReact size={40}/>
                                <p>React</p>
                            </div>

                            <div className="col-4 d-flex flex-column align-items-center">
                                <IoCodeSlash size={40}/>
                                <p>Flux</p>
                            </div>

                            <div className="col-4 d-flex flex-column align-items-center">
                                <PiBracketsCurlyBold size={40}/>
                                <p>ECMAScript 2023</p>
                            </div>

                            <div className="col-4 d-flex flex-column align-items-center">
                                <FaBootstrap size={40}/>
                                <p>Bootstrap</p>
                            </div>
                            <div className="col-4 d-flex flex-column align-items-center">
                                <IoLogoSass size={40}/>
                                <p>Sass</p>
                            </div>
                            <div className="col-4 d-flex flex-column align-items-center">
                                <SiJsonwebtokens  size={40}/>
                                <p>JWT Authentication</p>
                            </div>





                        </div>

                    </div>
                    <hr />

                    <div>
                        <h2 style={{color:"blue"}}>Backend</h2>
                        <div className="row justify-content-center ">
                            <div className="col-4 d-flex flex-column align-items-center">
                                <FaPython  size={40} />
                                <p>Python</p>
                            </div>

                            <div className="col-4 d-flex flex-column align-items-center">
                                <SiFlask size={40}/>
                                <p>Flask</p>
                            </div>

                            <div className="col-4 d-flex flex-column align-items-center">
                                <TbApi size={40}/>
                                <p>APIs</p>
                            </div>

                            <div className="col-4 d-flex flex-column align-items-center">
                                <TbSql size={40}/>
                                <p>SQL</p>
                            </div>

                            <div className="col-4 d-flex flex-column align-items-center">
                                <SiMysql size={40}/>
                                <p>MySQL</p>
                            </div>

                            <div className="col-4 d-flex flex-column align-items-center">
                                <LuFileCode2 size={40}/>
                                <p>Pascal</p>
                            </div>                       


                        </div>
                    </div>
                    <hr />

                    <div>
                        <h2 style={{color:"blue"}}>Otras</h2>
                        <div className="row justify-content-center ">
                            <div className="col-4 d-flex flex-column align-items-center">
                                <FaMarkdown  size={40} />
                                <p>Markdown</p>
                            </div>

                            <div className="col-4 d-flex flex-column align-items-center">
                                <IoPeople size={40}/>
                                <p>User Stories</p>
                            </div>

                            <div className="col-4 d-flex flex-column align-items-center">
                                <MdHttp size={40}/>
                                <p>REST</p>
                            </div>

                            <div className="col-4 d-flex flex-column align-items-center">
                                <FaLaptopCode size={40}/>
                                <p>DOM</p>
                            </div>

                            <div className="col-4 d-flex flex-column align-items-center">
                                <FaGithubSquare size={40}/>
                                <p>GIT</p>
                            </div>

                            <div className="col-4 d-flex flex-column align-items-center">
                                <SiCloudinary size={40}/>
                                <p>Cloudinary</p>
                            </div> 

                            <div className="col-4 d-flex flex-column align-items-center">
                                <FaGooglePlus size={40}/>
                                <p>Google Places</p>
                            </div>                        


                        </div>
                    </div>
                </div>
                <br />
                {/* Repetir el contenedor si es necesario */}
                <div className={`container-fluid text-center ${styles.cajon_conocimientos}`}>
                    <div className="mb-3">
                        <h2>Idiomas</h2>
                        <h4 style={{ color: "blue" }}>Inglés</h4>
                        <p>Intermedio</p>
                        <hr></hr>
                        <h4 style={{ color: "blue" }}>Español</h4>
                        <p >Nativo</p>
                        <br></br>
                    </div>                   
                </div>
            </div>
        </div>
    );
};
