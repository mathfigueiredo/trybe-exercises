import React from 'react';

class StateSelect extends React.Component {
  render() {
    return (
      <div className="inputdiv">
        <label htmlFor="state" className="label">
          <span className="spanlabel">Estado: </span>
          <select
            name="state"
            id="state"
            onChange={this.props.inputChange}
            value={this.props.value}
          >
            <option value="Exemplo1">Exemplo1</option>
            <option value="Exemplo2">Exemplo2</option>
          </select>
        </label>
      </div>
    );
  }
}

export default StateSelect;
