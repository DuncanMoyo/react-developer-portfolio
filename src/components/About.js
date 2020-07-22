import React, { Component } from "react";
import classes from "../assets/css/Style.module.css";
import portfolioData from "../PortfolioData";
import profilPicture from '../assets/img/testimonial-2.jpg'

class About extends Component {
  render() {
    return (
      <section
        id="about"
        className={(classes.AboutMf, classes.SectPt4)}
        route="true"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className={classes.BoxShadowFull}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-sm-6 col-md-5">
                        <div className="about-img">
                          <img
                            src={profilPicture}
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-7">
                        <div className="about-info">
                          <p>
                            <span className={classes.TitleS}>Name: </span>{" "}
                            <span>{portfolioData.name}</span>
                          </p>
                          <p>
                            <span className={classes.TitleS}>Profile: </span>{" "}
                            <span>{portfolioData.role}</span>
                          </p>
                          <p>
                            <span className={classes.TitleS}>Email: </span>{" "}
                            <span>{portfolioData.email}</span>
                          </p>
                          <p>
                            <span className={classes.TitleS}>Phone: </span>{" "}
                            <span>{portfolioData.phoneNumber}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={classes.SkillMf}>
                      <p className={classes.TitleS}>Skill</p>
                      {portfolioData.skills.map((skill) => {
                        return (
                          <div>
                            <span><strong>{skill.skillName}</strong></span>{" "}
                            <strong><span style={{float: 'right'}}>{skill.skillLevel}%</span></strong>   
                            <div className={classes.Progress}>
                              <div
                                className={classes.ProgressBar}
                                role="progressbar"
                                style={{
                                  width: `${skill.skillLevel}%`
                                }}
                              ></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className={classes.TitleBox2}>
                        <h5 className={classes.TitleLeft}>About me</h5>
                      </div>
                      <p className="lead">
                          {portfolioData.aboutMe}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
