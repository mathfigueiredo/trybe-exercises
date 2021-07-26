import React from 'react';

class CpfInput extends React.Component {
  render() {
    return (
      <div className="inputdiv">
        <label htmlFor="cpf" className="label">
          <span className="spanlabel">CPF:{' '}</span>
          <input
            type="text"
            maxLength="11"
            id="cpf"
            name="cpf"
            required
            onChange={this.props.inputChange}
            value={this.props.value}
          />
        </label>
      </div>
    );
  }
}

export default CpfInput;
