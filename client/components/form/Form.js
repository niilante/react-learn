import React from 'react';

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: ''
    };
  }
  // state = {
  //   firstName: '',
  //   lastName: '',
  //   username: '',
  //   email: '',
  //   password: ''
  // };

  change = (e) => {
  	this.setState({
  		[e.target.name]: e.target.value
  	});
  };

  onSubmit = e => {
  	e.preventDefault();
  	console.log(this.state);
  	this.props.onSubmit(this.state);
  	this.setState({
  		firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: ''
  	});
  }

  render() {
    return(
      <form>
        <div className="form-group">
          <label>Vorname</label>
          <div className="input-group">
            <span className="input-addon">
              <i className="icon-user"></i>
            </span>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.change}
              className="input-field"
              placeholder="Vorname"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Nachname</label>
          <div className="input-group">
            <span className="input-addon">
              <i className="icon-user"></i>
            </span>
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.change}
              className="input-field"
              placeholder="Nachname"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Mitgliedsname</label>
          <div className="input-group">
            <span className="input-addon">
              <i className="icon-user"></i>
            </span>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.change}
              className="input-field"
              placeholder="Mitgliedsname"
            />
          </div>
        </div>

        <div className="form-group">
          <label>E-Mail</label>
          <div className="input-group">
            <span className="input-addon">
              <i className="icon-mail"></i>
            </span>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.change}
              className="input-field"
              placeholder="E-Mail"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Passwort</label>
          <div className="input-group">
            <span className="input-addon">
              <i className="icon-lock"></i>
            </span>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.change}
              className="input-field"
              placeholder="Passwort"
            />
            <span className="input-addon">
              <label className="addon-label">
                <input className="addon-checkbox" type="checkbox" />Anzeigen
              </label>
            </span>
          </div>
        </div>

        <div className="input-group terms-and-conditions">
          <label><input className="agree-terms" type="checkbox" /> Ich willige in die Verarbeitung und Nutzung meiner Daten gemäß der <a href="/info/show/privacy" target="_blank">Datenschutzerklärung</a> ein.</label>
        </div>
        <button
          type="submit"
          className="cta-button"
          onClick={(e) => this.onSubmit(e )}
        >Jetzt registrieren</button>
      </form>
    );
  }
}
