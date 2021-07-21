import React from 'react';
import './App.css';
import FormSearch from './FormSearch';
import pokemons from '../data';
import PokemonContainer from './PokemonsContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { found: [] };
  }

  findPokemons = (term) => {
    return pokemons.filter((x) => x.name.includes(term));
  };

  onSearchChange = async (term) => {
    const capitalTerm =
      (await term) === ''
        ? 'NONE'
        : term.charAt(0).toUpperCase() + term.slice(1);
    this.setState({ found: this.findPokemons(capitalTerm) });
  };

  render() {
    return (
      <div className="App">
        <FormSearch userChanged={this.onSearchChange} />
        <PokemonContainer list={this.state.found} />
      </div>
    );
  }
}

export default App;
