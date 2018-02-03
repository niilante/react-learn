import React from 'react';

import { Social } from './../social/Social';
import { Form } from './../form/Form';
import { Currentuser } from './../currentuser/Currentuser';

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {}
    };
  }

  onSubmit = fields => {
  	this.setState ({fields});
  };

  render() {
    return (
      <section className="login-panel">
        <Social />
        <Form onSubmit={fields => this.onSubmit(fields)} />
        <Currentuser />
        <pre>{JSON.stringify(this.state.fields, null, 2)}</pre>
      </section>
    );
  }
}
