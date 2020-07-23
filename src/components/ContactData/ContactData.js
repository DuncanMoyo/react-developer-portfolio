import React, { Component } from "react";
import Input from "../Input/Input";
import classes from './ContactData.module.css'
import overlay from '../../assets/img/overlay-bg.jpg'

class ContactData extends Component {
  state = {
    messageForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your email",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      subject: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Subject",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      subject: {
        elementType: "input",
        elementConfig: {
          type: "textarea",
          placeholder: "Message",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
    },
    loading: false,
    formIsValid: false,
  };

  messageHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for (let formElementIdentifier in this.state.messageForm) {
      formData[formElementIdentifier] = this.state.messageForm[
        formElementIdentifier
      ].value;
    }

    const message = {
      formData: formData
    }

  };


  checkValidity(value, rules) {
    let isValid = true;

    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedMessageForm = {
      ...this.state.messageForm,
    };

    const updatedFormElement = {
      ...updatedFormElement[inputIdentifier],
    };

    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedMessageForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedMessageForm) {
      formIsValid = updatedMessageForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({
      messageForm: updatedMessageForm,
      formIsValid: formIsValid,
    });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.messageForm) {
      formElementsArray.push({
        id: key,
        config: this.state.messageForm[key],
      });
    }

    let form = (
      <form onSubmit={this.messageHandler}>
        {formElementsArray.map((formElement) => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            value={formElement.config.value}
            invalid={formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => this.inputChangedHandler(event, formElement.id)}
          />
        ))}
        <button>Send Message</button>
      </form>
    );

    return (
    <section className={classes.paralaxMf, classes.footerParalax, classes.bgImage, classes.sectMt4} style={{backgroundImage: `url(${overlay})`}}>
      <div className={classes.overlayMf}></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className={classes.contactMf}>
              <div id="contact" className={classes.boxShadowFull}>
                <div className="row">
                  <div className="col-md-6">
                    <div className={classes.titlebox2}>
                      <h5 className={classes.titleleft}>
                        Send Message Us
                      </h5>
                    </div>
                    {form}
                  </div>
                  <div className="col-md-6">
                    <div className={classes.titleBox2}>
                      <h5 className={classes.titleLeft}>
                        Get in Touch
                      </h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem
                        expedita aperiam aliquid at.
                        Totam magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis
                        mollitia inventore?
                      </p>
                      <ul className="listIco">
                        <li><span className="ion-ios-location"></span> 329 WASHINGTON ST BOSTON, MA 02108</li>
                        <li><span className="ion-ios-telephone"></span> (617) 557-0089</li>
                        <li><span className="ion-email"></span> contact@example.com</li>
                      </ul>
                    </div>
                    <div className="socials">
                      <ul>
                        <li><a href=""><span className="ico-circle"><i className="ion-social-facebook"></i></span></a></li>
                        <li><a href=""><span className="ico-circle"><i className="ion-social-instagram"></i></span></a></li>
                        <li><a href=""><span className="ico-circle"><i className="ion-social-twitter"></i></span></a></li>
                        <li><a href=""><span className="ico-circle"><i className="ion-social-pinterest"></i></span></a></li>
                      </ul>
                    </div>
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

export default ContactData;
