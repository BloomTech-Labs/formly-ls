import React, { Component } from 'react';
import SingleOption from './SingleOption';

import app from '../../app.json';
import '../../styles/Form.css';

export default class Quote extends Component {
  componentDidMount() {
    this.props.addQuestion(this);
    this.focus = this.focus.bind(this);
  }

  focus() {
    this.refs.button.focus();
  }

  get answer() {
    return "Continue";
  }

  get question() {
    return this.props.title;
  }

  render() {
    return (
      <div className="quote">
        <h2 className="title">
          <i className={app.icons.quote.left}></i>
          {this.props.title}
        </h2>
        <SingleOption ref="button" onClick={() => this.props.submitAnswer(this)} text="Continue" />
      </div>
    );
  }
}
