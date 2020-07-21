import React, { Component } from 'react';
import classes from './css/Style.module.css';

class About extends Component {
  
  render() {
    let aboutData = this.props.portfolioData
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-sm-6 col-md-5">
                        <div className="about-img">
                          <img src="assets/img/testimonial-2.jpg" className="img-fluid rounded b-shadow-a" alt=""/>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-7">
                        <div className="about-info">
                          <p><span className="title-s">Name: </span> <span>Morgan Freeman</span></p>
                          <p><span className="title-s">Profile: </span> <span>full stack developer</span></p>
                          <p><span className="title-s">Email: </span> <span>contact@example.com</span></p>
                          <p><span className="title-s">Phone: </span> <span>(617) 557-0089</span></p>
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      <p className="title-s">Skill</p>
                      <span>HTML</span> <span className="pull-right">85%</span>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '85%', ariaValuenow: "85", ariaValuemin:"0" ,ariaValuemax:"100"}}></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">
                          About me
                        </h5>
                      </div>
                      <p className="lead">
                        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id
                        imperdiet et, porttitor
                        at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla
                        porttitor accumsan tincidunt.
                      </p>
                      <p className="lead">
                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis
                        porttitor volutpat. Vestibulum
                        ac diam sit amet quam vehicula elementum sed sit amet dui. porttitor at sem.
                      </p>
                      <p className="lead">
                        Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                        Nulla porttitor accumsan
                        tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About
