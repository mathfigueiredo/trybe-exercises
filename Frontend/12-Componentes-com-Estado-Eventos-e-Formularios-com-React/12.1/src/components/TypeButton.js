import React from 'react';
import './TypeButtons.css';

class TypeButton extends React.Component {
  render() {
    return (
      <button
        className={`typebtn ${this.props.type}`}
        onClick={() => this.props.funct(this.props.type)}
      >
        {this.props.type}
      </button>
    );
  }
}

export default TypeButton;
