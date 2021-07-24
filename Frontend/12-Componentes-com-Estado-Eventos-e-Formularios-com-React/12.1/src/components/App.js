import React from 'react';
import './App.css';
import FormSearch from './FormSearch';
import pokemons from '../data';
import PokemonContainer from './PokemonsContainer';
import TypesContainer from './TypesContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    // prettier-ignore
    this.state = { found: [], card: 'lil', pokemons: pokemons.sort((a,b) => a.id - b.id ), selected: null, maxPokemon: pokemons.length };
    console.log(this.state);
  }

  findPokemons = (term) => {
    return pokemons.filter((x) => x.name.includes(term));
  };

  findByIndex = (index) => {
    return [this.state.pokemons[index]];
  };

  onSearchChange = async (term) => {
    const capitalTerm =
      (await term) === ''
        ? 'NONE'
        : term.charAt(0).toUpperCase() + term.slice(1);

    const newFound = this.findPokemons(capitalTerm);
    const len = newFound.length;
    let lastInState = null;
    if (len > 0) {
      const last = newFound[len - 1];
      lastInState = this.state.pokemons.findIndex((x) => x.id === last.id);
    }
    const newSelected =
      lastInState === null ? this.state.selected : lastInState;
    this.setState({
      ...this.state,
      found: newFound,
      card: 'big',
      selected: newSelected,
    });
  };

  nextHandler = () => {
    if (
      this.state.selected === null ||
      this.state.selected === this.state.maxPokemon - 1
    ) {
      const newSelected = 0;
      this.setState(() => ({
        selected: newSelected,
        found: this.findByIndex(newSelected),
        card: 'big',
      }));
    } else if (this.state.selected < this.state.maxPokemon) {
      const newSelected = this.state.selected + 1;
      this.setState(() => ({
        selected: newSelected,
        found: this.findByIndex(newSelected),
        card: 'big',
      }));
    }
  };

  sortByType = (type) => {
    const filtered = this.state.pokemons.filter((x) => x.type === type);
    const len = filtered.length;
    const last = filtered[len - 1];
    const lastInState = this.state.pokemons.findIndex((x) => x.id === last.id);
    this.setState({
      ...this.state,
      found: filtered,
      selected: lastInState,
      card: 'big',
    });
  };

  render() {
    return (
      <div className="App">
        <FormSearch userChanged={this.onSearchChange} />
        <TypesContainer
          showall={() =>
            this.setState({
              ...this.state,
              found: this.findPokemons(''),
              card: 'lil',
            })
          }
          showtype={this.sortByType}
        />
        {/* prettier-ignore */}
        <PokemonContainer list={this.state.found} card={this.state.card} nextClick={this.nextHandler}/>
      </div>
    );
  }
}

export default App;
