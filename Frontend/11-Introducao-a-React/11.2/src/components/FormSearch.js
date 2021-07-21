import React from 'react';

class FormSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  termChange = async (e) => {
    await this.setState({ term: e.target.value });
    this.props.userChanged(this.state.term);
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="search">Search Pokemon: </label>
          <input
            type="text"
            id="search"
            value={this.state.term}
            onChange={(e) => this.termChange(e)}
            autoComplete="off"
          />
        </form>
      </div>
    );
  }
}

export default FormSearch;
