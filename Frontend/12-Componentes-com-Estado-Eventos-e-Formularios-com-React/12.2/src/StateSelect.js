import React from 'react';
// prettier-ignore
const statesShort = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];

class StateSelect extends React.Component {
  renderStates() {
    return statesShort.map((x) => {
      return <option value={x}>{x}</option>;
    });
  }

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
            required
          >
            {this.renderStates()}
          </select>
        </label>
      </div>
    );
  }
}

export default StateSelect;
