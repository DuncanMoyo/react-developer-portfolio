import React, { Component } from "react";
import portfolioData from "../PortfolioData";
import backgroundImage from '../assets/img/intro-bg.jpg';
import classes from '../assets/css/Style.module.css'

class Intro extends Component {
  render() {
    return (
      <div
        id="home"
        className={classes.intro, classes.route, classes.bgImage}
        style={{backgroundImage: `url(${backgroundImage})`}}
      >
        <div className={classes.overlayItro}></div>
        <div className={classes.introContent, classes.displayTable}>
          <div className={classes.tableCell}>
            <div className="container">
              <p className={classes.display6, classes.colorD}>Hello, world!</p>
    <h1 className={classes.introTitle}>I am {portfolioData.name}</h1>
              <p className={classes.introSubtitle}>
                <span className={classes.textSliderItems}>
                  Web Developer,Frontend
                  Developer,React Developer,Python Developer
                </span>
                <strong className="text-slider"></strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
