import React from 'react';

class EmailInput extends React.Component {
  render() {
    return (
      <div className="inputdiv">
        <label htmlFor="email" className="label">
          <span className="spanlabel">Email: </span>
          <input
            type="email"
            maxLength="50"
            id="email"
            name="email"
            required
            onChange={this.props.inputChange}
            value={this.props.value}
          />
        </label>
      </div>
    );
  }
}

export default EmailInput;
