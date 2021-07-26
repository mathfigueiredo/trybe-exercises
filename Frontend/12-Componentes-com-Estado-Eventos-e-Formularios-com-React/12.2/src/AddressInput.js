import React from 'react';

class AddressInput extends React.Component {
  render() {
    return (
      <div className="inputdiv">
        <label for="addressinput" className="label">
          Endereço:{' '}
        </label>
        <input
          type="text"
          maxLength="200"
          id="addressinput"
          name="addressinput"
          required
        />
      </div>
    );
  }
}

export default AddressInput;
