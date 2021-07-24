import React from 'react';
import PokemonEach from './PokemonEach';
import './PokemonContainer.css';

class PokemonContainer extends React.Component {
  renderList = () => {
    return this.props.list.map((x) => {
      return (
        <PokemonEach
          key={x.id}
          id={x.id}
          name={x.name}
          type={x.type}
          weight={x.averageWeight.value}
          unit={x.averageWeight.measurementUnit}
          image={x.image}
          info={x.moreInfo}
          card={this.props.card}
        />
      );
    });
  };

  render() {
    return this.props.list.length > 0 ? (
      <div className="wrapdiv">
        <div className={`pokemoncontainer ${this.props.card}container`}>
          {this.renderList()}
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            this.props.nextClick();
          }}
          className="nextbtn"
        >
          Next Pokemon
        </button>
      </div>
    ) : null;
  }
}

export default PokemonContainer;
