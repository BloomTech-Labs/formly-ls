import React, { Component } from 'react';
import OptionPanel from './OptionPanel';
import SingleOption from './SingleOption';

import app from '../../app.json';
import '../../styles/Form.css';

export default class MultiOptionPanel extends Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
  }

  focus() {
    this.refs.answerComponent.focus();
  }

  get answer() {
    return this.refs.answerComponent.answer;
  }

  render() {
    return (
      <div className="multi-options">
        <div id="options">
          <span className="instructions">Choose as many as you like</span>
          <OptionPanel ref="answerComponent" multi={true} {...this.props} />
        </div>
        <SingleOption onClick={() => this.props.submitAnswer(this)} text="OK" icon={app.icons.check}/>
      </div>
    );
  }
}
