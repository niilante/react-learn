import React from 'react';

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordType: 'password',
      fillables: ['firstName', 'lastName', 'email', 'username', 'password'], // this is done through manual listing in array so that you have control which fields should be validated for before submit
      firstName: {
        val: '',
        isValid: false
      },
      lastName: {
        val: '',
        isValid: false
      },
      username: {
        val: '',
        isValid: false
      },
      email: {
        val: '',
        isValid: false
      },
      password: {
        val: '',
        isValid: false
      }
    };
  }

  showHide = () => {
    this.setState({
      passwordType: this.state.passwordType === 'password' ? 'text' : 'password'
    })
  }

  validateForStringChars(str) {
    const re = /\b[^\d\W]+\b/g;
    const preparedStr = str.replace(/ /g, '');
    return re.test(preparedStr);
  }

  validateForEmail(str) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(str);
  }

  onChange = (event) => {
    const input = event.target;
    let inputValidationResult = false;
    switch (input.name) {
      case 'firstName':
        inputValidationResult = this.validateForStringChars(input.value) && input.value.length > 0;
        break;
      case 'lastName':
        inputValidationResult = this.validateForStringChars(input.value) && input.value.length > 0;
        break;
      case 'username':
        inputValidationResult = input.value.length > 0;
        break;
      case 'email':
        inputValidationResult = this.validateForEmail(input.value) && input.value.length > 0;
        break;
      case 'password':
        inputValidationResult = input.value.length > 0;
        break;
      default:
        inputValidationResult = false;
    }
    this.setState({
      [input.name]: { val: input.value, isValid: inputValidationResult }
    });
  }

  clearFormData() {
    this.setState({
      firstName: { val: '' },
      lastName: { val: '' },
      username: { val: '' },
      email: { val: '' },
      password: { val: '' }
    })
  }

  onSubmit = event => { // better call long form 'event' so that other 'e' don't appear in your editor search when you want to find the place where you passed an event from an input/form
  	event.preventDefault();
		console.log('Submitted the form');
		console.log(isFormValid);
    const isFormValid = this.state.fillables.every((element) => this.state[element].isValid);
    if (isFormValid) {
			console.log('it is valid');
      const formData = this.state.fillables.map(key => { return { [key]: this.state[key]['val']} });
      this.props.onSubmit(this.state); // Good practice is to name methods with 'on' prefix that are local to the component and do some simple job of /validation/state update/reacting to events && passing along data/ to other methods [in this particular example it would be nice to name so that the call looks this.props.sendFormData or this.props.submitForm]
    }
    this.clearFormData();
  }

  render() {
    return(
      <form>
        <div className="form-group">
          <label>First Name</label>
          <div className={this.state.firstName.isValid ? "input-group" : "input-group has-error"}>
            <span className="input-addon">
              <i className="icon-user"></i>
            </span>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName.val}
              onChange={this.onChange}
              className="input-field"
              placeholder="Vorname"
            />
          </div>
          { !this.state.firstName.isValid ?
            <span className="validation-msg">The first name can not be blank</span> :
            null
          }
        </div>

        <div className="form-group">
          <label>Last Name</label>
					<div className={this.state.lastName.isValid ? "input-group" : "input-group has-error"}>
            <span className="input-addon">
              <i className="icon-user"></i>
            </span>
            <input
              type="text"
              name="lastName"
              value={this.state.lastName.val}
              onChange={this.onChange}
              className="input-field"
              placeholder="Nachname"
            />
          </div>
          { !this.state.lastName.isValid ?
            <span className="validation-msg">The last name can not be blank</span> :
            null
          }
        </div>

        <div className="form-group">
          <label>Username</label>
					<div className={this.state.username.isValid ? "input-group" : "input-group has-error"}>
            <span className="input-addon">
              <i className="icon-user"></i>
            </span>
            <input
              type="text"
              name="username"
              value={this.state.username.val}
              onChange={this.onChange}
              className="input-field"
              placeholder="Mitgliedsname"
            />
          </div>
          { !this.state.username.isValid ?
            <span className="validation-msg">The username can not be blank</span> :
            null
          }
        </div>

        <div className="form-group">
          <label>E-Mail</label>
					<div className={this.state.email.isValid ? "input-group" : "input-group has-error"}>
            <span className="input-addon">
              <i className="icon-mail"></i>
            </span>
            <input
              type="email"
              name="email"
              value={this.state.email.val}
              onChange={this.onChange}
              className="input-field"
              placeholder="E-Mail"
            />
          </div>
          { !this.state.email.isValid ?
            <span className="validation-msg">The email can not be blank OR The email has to be valid</span> :
            null
          }
        </div>

        <div className="form-group">
          <label>Password</label>
					<div className={this.state.password.isValid ? "input-group" : "input-group has-error"}>
            <span className="input-addon">
              <i className="icon-lock"></i>
            </span>
            <input
              type={this.state.passwordType}
              name="password"
              value={this.state.password.val}
              onChange={this.onChange}
              className="input-field"
              placeholder="Password"
            />
            <span className="input-addon">
              <label className="addon-label">
                <input className="addon-checkbox" type="checkbox" onClick={this.showHide} />Show
              </label>
            </span>
          </div>
          { !this.state.password.isValid ?
            <span className="validation-msg">The password can not be blank</span> :
            null
          }
        </div>

        <div className="form-group">
          <div className="input-group terms-and-conditions">
            <label>
              <input
                type="checkbox"
                name="agree-terms"
                className="agree-terms"
              />
              Ich willige in die Verarbeitung und Nutzung meiner Daten gemäß der <a href="/info/show/privacy" target="_blank">Datenschutzerklärung</a> ein.
            </label>
          </div>
          <span className="validation-msg">The terms have to be accepted</span>
        </div>

        <button
          type="submit"
          className="cta-button"
          onClick={this.onSubmit} // if you declare method handlers as arrow functions taking event arg, then you can omit those things here
        >Jetzt registrieren</button>
      </form>
    );
  }
}
