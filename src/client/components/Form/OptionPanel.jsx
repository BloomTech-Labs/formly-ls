import React, { Component } from 'react';
import { CharIcon } from './util';

import '../../styles/Form.css';

export default class OptionPanel extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.isSelected = this.isSelected.bind(this);
    this.focus = this.focus.bind(this);
  }

  componentWillMount() {
    this.setState({selected: this.props.multi ? [] : ''});
  }

  getIcon(index) {
    return this.props.icons[index] + "";
  }

  isSelected(option) {
    if (this.props.multi) {
      return this.state.selected.indexOf(option) >= 0;
    }
    return this.state.selected === option;
  }

  focus() {
    this.refs.list.getElementsByTagName('button')[0].focus();
  }

  get answer() {
    return this.state.selected;
  }

  onClick(event) {
    if (this.props.multi) {
      if (this.state.selected.indexOf(event.target.name) >= 0) {
        this.state.selected.splice(this.state.selected.indexOf(event.target.name), 1);
        this.setState({selected: this.state.selected});
      } else {
        this.state.selected.push(event.target.name);
        this.setState({selected: this.state.selected});
      }
    } else {
      if (this.state.selected === event.target.name) {
        this.setState({selected: ''});
      } else {
        this.setState({selected: event.target.name});
        this.props.submitAnswer(this);
      }
    }
  }
  
  render() {
    return (
      <ul className="options" ref="list">
        {this.props.options.map((option, index) => {
          return (
            <li className="option" key={index}>
              <button onClick={this.onClick} name={option} id={this.isSelected(option) ? 'selected' : ''}>
                <CharIcon charFromInt={index} />
                <span>{option}</span>
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
