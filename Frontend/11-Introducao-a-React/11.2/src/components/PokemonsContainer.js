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
        />
      );
    });
  };

  render() {
    return <div className="pokemoncontainer">{this.renderList()}</div>;
  }
}

export default PokemonContainer;
