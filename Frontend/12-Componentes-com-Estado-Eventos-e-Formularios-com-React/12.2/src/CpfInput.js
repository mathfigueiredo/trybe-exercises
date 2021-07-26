import React from 'react';

class CpfInput extends React.Component {
  render() {
    return (
      <div className="inputdiv">
        <label for="cpfinput" className="label">
          CPF:{' '}
        </label>
        <input
          type="text"
          maxLength="11"
          id="cpfinput"
          name="cpfinput"
          required
        />
      </div>
    );
  }
}

export default CpfInput;
