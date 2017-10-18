import React, { Component } from 'react';

import '../styles/Header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({});
  }

  render() {
    return (
      <div className="header-wrapper">
        <div className="header mobile">
          <div className="logo">
            <a href="/">
              <img src="images/lambdawhite.png" />
            </a>
          </div>
          <div className="menu">
            <div className="menu items">
              <p> about </p>
              <p className="menu items courses"> courses </p>
              <div className="menu items courses dropdown">
                <h1> view all courses </h1>
                <h4> courses: </h4>
                <h2> computer science &amp; software engineering </h2>
                <h2> artificial intelligence &amp; machine learning </h2>
                <h4> free course archives: </h4>
                <h2> javascript mini bootcamp </h2>
                <h2> web development mini bootcamp </h2>
              </div>
              <p> blog </p>
              <p> contact </p>
              <p> apply </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
