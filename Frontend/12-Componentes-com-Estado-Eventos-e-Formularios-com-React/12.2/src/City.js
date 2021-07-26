import React from 'react';

class City extends React.Component {
  render() {
    return (
      <div className="inputdiv">
        <label htmlFor="city" className="label">
          <span className="spanlabel">Cidade: </span>
          <input
            type="text"
            maxLength="28"
            id="city"
            name="city"
            required
            onChange={this.props.inputChange}
            value={this.props.value}
            onBlur={this.props.onBlur}
          />
        </label>
      </div>
    );
  }
}

export default City;
