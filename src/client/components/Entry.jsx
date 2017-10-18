import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { SingleOption } from './Form';

import '../styles/Entry.css';

class Entry extends Component {
  constructor(props) {
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentWillMount() {
    this.setState({});
    document.addEventListener("keydown", this.onKeyDown.bind(this));
  }

  onKeyDown(event) {
    if (event.keyCode === 13)
      this.onClick();
  }

  onClick(event) {
    this.props.history.push('/application');
  }

  render() {
    return (
      <div className="wrapper">
        <div className="entry">
          <h6>Thank you for applying to Lambda School</h6>
          <p>Lambda School is a competitive program that accepts less than 5% of applicants. Please answer the questions thoroughly.</p>
          <SingleOption text="Start" onClick={this.onClick} mobile={this.props.mobile}/>
        </div>
      </div>
    );
  }
}

export default connect(null, {})(Entry);
