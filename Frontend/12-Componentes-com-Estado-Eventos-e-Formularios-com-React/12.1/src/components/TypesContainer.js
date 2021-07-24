import React from 'react';
import TypeButton from './TypeButton';
import './TypesContainer.css';

class TypesContainer extends React.Component {
  constructor() {
    super();
    // prettier-ignore
    const rawTypes = [ 'Electric', 'Poison', 'Fire', 'Psychic', 'Normal', 'Bug', 'Dragon' ];
    this.state = { types: rawTypes.sort() };
  }

  renderButtons() {
    const list = [...this.state.types];
    return list.map((x) => {
      return <TypeButton type={x} key={x} funct={this.props.showtype} />;
    });
  }

  render() {
    return (
      <div className="typescontainer">
        <TypeButton type="Show All" funct={this.props.showall} key="showall" />
        {this.renderButtons()}
      </div>
    );
  }
}

export default TypesContainer;
