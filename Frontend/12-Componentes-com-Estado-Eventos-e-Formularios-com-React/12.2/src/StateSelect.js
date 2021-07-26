import React from 'react';

class StateSelect extends React.Component {
  render() {
    return (
      <div className="inputdiv">
        <label for="stateselect" className="label">
          Estado:{' '}
        </label>
        <select name="stateselect" id="stateselect">
          <option value="Exemplo">Exemplo</option>
        </select>
      </div>
    );
  }
}

export default StateSelect;
