import React, { Component } from 'react';
import Input from './Input';
import MultiOptionPanel from './MultiOptionPanel';
import OptionPanel from './OptionPanel';
import TextArea from './TextArea';

import app from '../../app.json';
import '../../styles/Form.css';

export default class Question extends Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
  }

  componentDidMount() {
    this.props.addQuestion(this);
  }

  focus() {
    this.refs.answerComponent.focus();
  }

  get answer() {
    return this.refs.answerComponent.answer;
  }

  get question() {
    return this.props.title;
  }

  getInputComponent(props) {
    switch(props.type) {
      case "input":
        return <Input ref="answerComponent" {...props} />;
      case "textarea":
        return <TextArea ref="answerComponent" {...props} />;
      case "option-panel":
        return <OptionPanel ref="answerComponent" {...props} />;
      case "option-panel-multi":
        return <MultiOptionPanel ref="answerComponent" {...props} />;
      default:
        return <h1>UNKNOWN VALUE RECEIVED IN FORM.JSX: {JSON.stringify(props)}</h1>;
    }
  }

  render() {
    return (
      <div className="question">
        <h2 className="title">
          <span className="index">
            {this.props.index}
            <i className={app.icons.arrow}></i>
          </span>
          {this.props.title}
          {this.props.required && 
            <span className="required">*</span>
          }
        </h2>
        {this.props.description != null &&
          <p className="description">{this.props.description}</p>
        }
        {this.getInputComponent(this.props)}
      </div>
    );
  }
}
