import React from 'react';

import StyleComponent, { ErrorStyle } from './styles';

export default class extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      users: [],
      errors: null,
    };
  }

  componentDidMount () {
    fetch('/users')
      .then(res => res.json())
      .then(result => this.setState({ users: result }))
      .catch(err => this.setState({ errors: err }));
  }
  render () {
    console.log(`${this.state.users} \n ${this.state.errors}`);
    return (
      <StyleComponent>
        <ul>{(this.state.users || []).map(user => <li key={user._id}>{user._id}</li>)}</ul>
      </StyleComponent>
    );
  }
}
