import React from 'react';

class HouseType extends React.Component {
  render() {
    return (
      <div className="inputdiv">
        <label className="label">
          <span className="spanlabel">Tipo: </span>
        </label>
        <input
          type="radio"
          id="house"
          name="housetype"
          value="house"
          onChange={this.props.inputChange}
          checked={this.props.checked === 'house'}
        />
        <label htmlFor="house">Casa</label>
        <input
          type="radio"
          id="appartment"
          name="housetype"
          value="appartment"
          onChange={this.props.inputChange}
          checked={this.props.checked === 'appartment'}
        />
        <label htmlFor="appartment">Apartamento</label>
      </div>
    );
  }
}

export default HouseType;
