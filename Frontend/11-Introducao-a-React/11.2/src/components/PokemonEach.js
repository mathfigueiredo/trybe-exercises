import React from 'react';
import PropTypes from 'prop-types';
import './PokemonEach.css';

class PokemonEach extends React.Component {
  render() {
    return (
      <div className="pokemoneach">
        <img src={this.props.image} alt="a pokemon" />
        <p>
          <span className="pokenumber">#{this.props.id}</span>
          <span className="pokename">
            <strong>{this.props.name}</strong>
          </span>
          <span className="type">{this.props.type} Type</span>
          <span className="weight">
            {this.props.weight} {this.props.unit}
          </span>
          <span className="info">
            More info:{' '}
            <a target="blank" href={this.props.info}>
              Here!
            </a>{' '}
          </span>
        </p>
      </div>
    );
  }
}

PokemonEach.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  info: PropTypes.string,
};

export default PokemonEach;
