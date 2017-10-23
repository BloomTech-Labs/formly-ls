import React, { Component } from 'react';

import '../../styles/Form.css';

export default class TextArea extends Component {
  constructor(props) {
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.focus = this.focus.bind(this);
  }

  componentWillMount() {
    // need to make it auto size
    this.setState({});
  }

  onKeyDown(event) {
    if (event.keyCode === 13 && !event.shiftKey) {
      this.props.submitAnswer(this);
      event.preventDefault();
    }
  }

  focus() {
    this.refs.input.focus();
  }

  get answer() {
    return this.refs.input.value;
  }

  render() {
    return (
      <div className="textarea">
        <textarea ref="input" rows="1" onKeyDown={this.onKeyDown} ref='input' />
        <p className="subtext" style={{display: this.props.mobile ? 'none' : 'block'}}>**SHIFT** + **ENTER** to make a line break</p>
      </div>
    );
  }
}
