import React, { Component } from 'react';
import Input from './Input';
import MultiOptionPanel from './MultiOptionPanel';
import OptionPanel from './OptionPanel';
import Question from './Question';
import Quote from './Quote';
import SingleOption from './SingleOption';
import TextArea from './TextArea';

import '../../styles/Form.css';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.submitAnswer = this.submitAnswer.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  componentWillMount() {
    this.setState({'questions': []});
  }

  addQuestion(component) {
    if (this.state.questions.indexOf(component) < 0) {
      this.state.questions.push(component);
    }
  }

  onSubmitForm() {
    this.state.questions.forEach(question => console.log(JSON.stringify({question: question.question, answer: question.answer}, null, 2)));
  }

  submitAnswer(comp) {
    let index = this.state.questions.findIndex(question => JSON.stringify(question.props) === JSON.stringify(comp.props));
    if (index >= 0) {
      if (++index >= this.state.questions.length) {
        this.refs.submit.focus();
        return;
      }
      setTimeout(() => this.state.questions[index].focus(), 10);
    }
  }

  render() {
    let index = 0;
    return (
      <div className="wrapper">
        <div className="form">
          <ul>
            {this.props.form.map((question, i) => {
              if (question.type === 'quote') {
                return(
                  <li key={i}>
                    <Quote addQuestion={this.addQuestion} submitAnswer={this.submitAnswer} mobile={this.props.mobile || false} {...question} />
                  </li>
                );
              }
              return(
                <li key={i}>
                  <Question index={++index} id={i} addQuestion={this.addQuestion} submitAnswer={this.submitAnswer} mobile={this.props.mobile || false} {...question} />
                </li>
              );
            })}
          </ul>
          <div className="submit">
            <SingleOption onClick={this.onSubmitForm} mobile={this.props.mobile || false} text="Submit" ref="submit" />
          </div>
        </div>
      </div>
    );
  }
}

export { Input, MultiOptionPanel, OptionPanel, Question, Quote, SingleOption, TextArea }
