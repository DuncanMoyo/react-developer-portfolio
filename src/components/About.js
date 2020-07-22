import React, { Component } from "react";
import classes from "./css/Style.module.css";
import portfolioData from "../PortfolioData";
import {Progress} from 'reactstrap';

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
                            src="img/testimonial-2.jpg"
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
                                  width: "85%",
                                  ariaValuenow: "85",
                                  ariaValuemin: "0",
                                  ariaValuemax: "100",
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
                        Curabitur non nulla sit amet nisl tempus convallis quis
                        ac lectus. Curabitur arcu erat, accumsan id imperdiet
                        et, porttitor at sem. Praesent sapien massa, convallis a
                        pellentesque nec, egestas non nisi. Nulla porttitor
                        accumsan tincidunt.
                      </p>
                      <p className="lead">
                        Mauris blandit aliquet elit, eget tincidunt nibh
                        pulvinar a. Vivamus suscipit tortor eget felis porttitor
                        volutpat. Vestibulum ac diam sit amet quam vehicula
                        elementum sed sit amet dui. porttitor at sem.
                      </p>
                      <p className="lead">
                        Nulla porttitor accumsan tincidunt. Quisque velit nisi,
                        pretium ut lacinia in, elementum id enim. Nulla
                        porttitor accumsan tincidunt. Mauris blandit aliquet
                        elit, eget tincidunt nibh pulvinar a.
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
