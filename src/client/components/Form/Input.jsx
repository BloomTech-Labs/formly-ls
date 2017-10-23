import React, { Component } from 'react';

import '../../styles/Form.css';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.focus = this.focus.bind(this);
  }

  onKeyDown(event) {
    if (event.keyCode === 13)
      this.props.submitAnswer(this);
  }

  focus() {
    this.refs.input.focus();
  }

  get answer() {
    return this.refs.input.value;
  }

  render() {
    return (
      <div className="input">
        <input onKeyDown={this.onKeyDown} type={this.props.type || "text"} ref='input' />
      </div>
    );
  }
}
