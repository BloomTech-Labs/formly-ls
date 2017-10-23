import React, { Component } from 'react';

import '../../../styles/Form.css';

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

export default CharIcon;
