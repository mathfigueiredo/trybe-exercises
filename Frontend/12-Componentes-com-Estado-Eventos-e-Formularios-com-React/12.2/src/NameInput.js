import React from 'react';

class NameInput extends React.Component {
  render() {
    return (
      <div className="inputdiv">
        <label htmlFor="name" className="label">
          <span className="spanlabel">Nome: </span>
          <input
            type="text"
            maxLength="40"
            id="name"
            name="name"
            required
            onChange={this.props.inputChange}
            value={this.props.value}
          />
        </label>
      </div>
    );
  }
}

export default NameInput;
