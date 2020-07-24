import React, { Component } from 'react';
import classes from '../../assets/css/Style.module.css'

class Footer extends Component {
  render() {
    return (
      
      <footer>
        <div className={classes.container}>
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box">
                <p className="copyright">&copy; Copyright <strong>DevFolio</strong>. All Rights Reserved</p>
                <div className="credits">
                  Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
