import React, { Component } from "react";
import classes from '../assets/css/Style.module.css'

class Navbar extends Component {
  render() {
    return (
      <nav
        className={classes.navbar, classes.navbarB} fixed-top  navbar-expand-md  navbar-trans
        id="mainNav"
      >
        <div className="container">
          <a className={classes.navbarBrand} href="#page-top">
            DevFolio
          </a>
          <button
            className={classes.navbarToggler, classes.collapsed}
            type="button"
            data-toggle="collapse"
            data-target="#navbarDefault"
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div
            className="navbarCollapse collapse justify-content-end"
            id="navbarDefault"
          >
            <ul className={classes.navbarNav}>
              <li className={classes.navItem}>
                <a className={classes.navLink} href="index.html">
                  Home
                </a>
              </li>
              <li className="navItem">
                <a className="navLink js-scroll" href="#about">
                  About
                </a>
              </li>
              <li className="navItem">
                <a className="navLink js-scroll" href="#service">
                  Services
                </a>
              </li>
              <li className="navItem">
                <a className="navLink js-scroll" href="#work">
                  Work
                </a>
              </li>
              <li className="navItem">
                <a className="navLink js-scroll" href="#blog">
                  Blog
                </a>
              </li>
              <li className="navItem">
                <a className="navLink js-scroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
 