import React from 'react';

class NameInput extends React.Component {
  render() {
    return (
      <div className="inputdiv">
        <label for="nameinput" className="label">Nome: </label>
        <input
          type="text"
          maxLength="5"
          id="nameinput"
          name="nameinput"
          required
        />
      </div>
    );
  }
}

export default NameInput;
