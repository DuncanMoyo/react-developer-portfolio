import React, { Component } from "react";
import Input from "../Input/Input";
import classes from './ContactData.module.css'

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
      <div className={classes.ContactData}>
        <h4>Get in touch with us</h4>
        {form}
      </div>
    )
  }


}

export default ContactData;
