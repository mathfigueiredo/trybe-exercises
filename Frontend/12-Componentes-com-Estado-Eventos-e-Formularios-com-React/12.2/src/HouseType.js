import React from 'react';

class HouseType extends React.Component {
  render() {
    return (
      <div className="inputdiv">
        <label className="label">Tipo: </label>
        <input type="radio" id="house" name="housetype" value="house" />
        <label for="house">Casa</label>
        <input
          type="radio"
          id="appartment"
          name="housetype"
          value="appartment"
        />
        <label for="appartment">Apartamento</label>
      </div>
    );
  }
}

export default HouseType;
