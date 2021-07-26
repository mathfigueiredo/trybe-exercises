import React from 'react';
import NameInput from './NameInput';
import EmailInput from './EmailInput';
import CpfInput from './CpfInput';
import AddressInput from './AddressInput';
import StateSelect from './StateSelect';
import HouseType from './HouseType';
import './Form.css';

class Form extends React.Component {
  constructor() {
    super();

    this.inputChange = this.inputChange.bind(this);

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      state: 'Exemplo1',
      housetype: '',
    };
  }

  inputChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <fieldset>
          <NameInput value={this.state.name} inputChange={this.inputChange} />
          <EmailInput value={this.state.email} inputChange={this.inputChange} />
          <CpfInput value={this.state.cpf} inputChange={this.inputChange} />
          <AddressInput value={this.state.address} inputChange={this.inputChange} />
          <StateSelect value={this.state.state} inputChange={this.inputChange} />
          <HouseType checked={this.state.housetype} inputChange={this.inputChange} />
        </fieldset>
      </form>
    );
  }
}

export default Form;
