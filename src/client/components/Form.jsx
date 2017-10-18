import React, { Component } from 'react';

import app from '../app.json';

export default class Form extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({});
  }

  render() {
    return (
      <div className="wrapper">
        <div className="form">
          <ul>
            {app.form.map((question, index) => {
              if (question.type === 'quote')
                return (
                  <li key={index}>
                    <Quote {...question} />
                  </li>
                );
              return(
                <li key={index}>
                  <Question {...question} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

class Question extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({});
  }

  getInputComponent(props) {
    switch(props.type) {
      case "input":
        return <Input {...props} />;
      case "option-panel":
        return <OptionPanel {...props} />;
      case "option-panel-multi":
        return <MultiOptionPanel {...props} />;
      case "textarea":
        return <TextArea {...props} />;
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
        </h2>
        {this.props.description != null &&
          <p className="description">{this.props.description}</p>
        }
        {this.getInputComponent(this.props)}
      </div>
    );
  }
}

class Input extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({});
  }

  render() {
    return (
      <div className="input">
        <input type={this.props.type || "text"}/>
      </div>
    );
  }
}

class TextArea extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({});
  }

  render() {
    return (
      <div className="textarea">
      <h3> text </h3>
        <textarea />
        <p className="subtext">SHIFT + ENTER to make a line break</p>
      </div>
    );
  }
}

class OptionPanel extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({});
  }

  getIcon(index) {
    return this.props.icons[index] + "";
  }

  render() {
    return (
      <ul className="options">
        {this.props.options.map((option, index) => {
          return (
            <li className="option" key={index}>
              <button>
                <CharIcon charFromInt={index} />
                {option}
                {this.props.icons != null && this.props.icons[index] != null &&
                  <i className={this.getIcon(index)}></i>
                }
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

class MultiOptionPanel extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({});
  }

  render() {
    return (
      <div className="multi-options">
        <span className="instructions">Choose as many as you like</span>
        <OptionPanel {...this.props} />
        <SingleOption text="OK" icon={app.icons.check}/>
      </div>
    );
  }
}

export const SingleOption = (props) => {
  return (
    <div className="button-wrapper">
      <button onClick={props.onClick}>
        {props.text}
        {props.icon != null &&
          <i className={props.icon}></i>
        }
      </button>
      <span className="subtext" style={{display: props.mobile ? 'none' : 'initial'}}>press ENTER</span>
    </div>
  );
}

const Quote = (props) => {
  return (
    <div className="quote">
      <h2 className="title">
      <i className={app.icons.quote.left}></i>
      {props.title}
      </h2>
      <SingleOption text="Continue" />
    </div>
  );
}

const CharIcon = (props) => {
  const getChar = () => {
    const chars = [
      'a','b','c','d','e','f','g','h','i','j','k','l','m',
      'n','o','p','q','r','s','t','u','v','w','x','y','z'
    ]
    return !isNaN(props.charFromInt) ? chars[props.charFromInt] : 
      props.char != null ? props.char : '[]';
  }
  return (
    <span className="char-icon">
      <span className="char">{getChar()}</span>
    </span>
  );
}

// add styling to text (ie bolding **words**)
// const Text = (props) => {
//   return (
//     <span>

//     </span>
//   );
// }
