import React from 'react';

class EmailInput extends React.Component {
  render() {
    return (
      <div className="inputdiv">
        <label for="emailinput" className="label">
          Email:{' '}
        </label>
        <input
          type="email"
          maxLength="50"
          id="emailinput"
          name="emailinput"
          required
        />
      </div>
    );
  }
}

export default EmailInput;
