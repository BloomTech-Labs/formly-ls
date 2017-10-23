import React, { Component } from 'react';

import '../../styles/Form.css';

export default class SingleOption extends Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
  }

  focus() {
    this.refs.button.focus();
  }

  render() {
    return (
      <div className="button-wrapper">
        <button ref="button" onClick={this.props.onClick}>
          {this.props.text}
          {this.props.icon != null &&
            <i className={this.props.icon}></i>
          }
        </button>
        <span className="subtext" style={{display: this.props.mobile ? 'none' : 'initial'}}>press ENTER</span>
      </div>
    );
  }
}
