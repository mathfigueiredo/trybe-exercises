import React from 'react';

class AddressInput extends React.Component {
  render() {
    return (
      <div className="inputdiv">
        <label htmlFor="address" className="label">
          <span className="spanlabel">Endereço: </span>
          <input
            type="text"
            maxLength="200"
            id="address"
            name="address"
            required
            onChange={this.props.inputChange}
            value={this.props.value}
          />
        </label>
      </div>
    );
  }
}

export default AddressInput;
