import React from "react";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

export const NavBar = () => {
  return (
    <>
      <div className={`container ${styles.box_navBar}`}>
        <nav
          className={`navbar sticky-top bg-body-tertiary shadow ${styles.box_navBar}`}
        >
          <div className="container d-flex justify-content-center">
            <button type="button" style={{ fontSize: "30px" }} className="btn">
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <IoHome />
              </Link>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};
