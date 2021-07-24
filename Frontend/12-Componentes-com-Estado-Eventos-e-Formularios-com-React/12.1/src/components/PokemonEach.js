import React from 'react';
import PropTypes from 'prop-types';
import './PokemonEach.css';

class PokemonEach extends React.Component {
  render() {
    const size = this.props.card;
    return (
      <div className={`pokemoneach${size} ${this.props.type}`}>
        <img src={this.props.image} alt="a pokemon" className={`img${size}`} />
        <div className={`pokeid${size}`}>
          <span className={`pokenumber${size}`}>#{this.props.id}</span>
          <span className={`pokename${size}`}>
            <strong>{this.props.name}</strong>
          </span>
        </div>
        <span className={`type${size}`}>{this.props.type}</span>
        <span className={`weight${size}`}>
          {this.props.weight} {this.props.unit}
        </span>
        <span className={`info${size}`}>
          More info:{' '}
          <a target="blank" href={this.props.info}>
            Here!
          </a>{' '}
        </span>
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
