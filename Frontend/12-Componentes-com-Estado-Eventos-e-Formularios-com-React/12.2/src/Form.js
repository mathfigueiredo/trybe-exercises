import React from 'react';
import NameInput from './NameInput';
import EmailInput from './EmailInput';
import CpfInput from './CpfInput';
import AddressInput from './AddressInput';
import City from './City';
import StateSelect from './StateSelect';
import HouseType from './HouseType';
import './Form.css';

class Form extends React.Component {
  constructor() {
    super();

    this.inputChange = this.inputChange.bind(this);
    this.checkCityName = this.checkCityName.bind(this);

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: 'AC',
      housetype: '',
    };
  }

  inputChange(e) {
    let { name, value } = e.target;
    // value = name === 'name' ? value.toUpperCase() : value;

    switch (name) {
      case 'name':
        value = value.toUpperCase();
        break;
      case 'address':
        value = value.replace(/[^a-zA-Z0-9,.ãÃáÁêÊéÉèÈíÍóÓôÔõÕúÚçÇ ]/g, '');
        break;
      default:
        break;
    }

    this.setState({
      [name]: value,
    });
  }

  checkCityName() {
    const firstLetter = this.state.city[0];
    if (!isNaN(Number(firstLetter))) this.setState({ city: '' });
  }

  render() {
    return (
      <form>
        <fieldset>
          <NameInput value={this.state.name} inputChange={this.inputChange} />
          <EmailInput value={this.state.email} inputChange={this.inputChange} />
          <CpfInput value={this.state.cpf} inputChange={this.inputChange} />
          <AddressInput value={this.state.address} inputChange={this.inputChange} />
          {/* prettier-ignore */}
          <City value={this.state.city} inputChange={this.inputChange} onBlur={this.checkCityName}/>
          <StateSelect value={this.state.state} inputChange={this.inputChange} />
          <HouseType checked={this.state.housetype} inputChange={this.inputChange} />
        </fieldset>

        <fieldset>
            
        </fieldset>
      </form>
    );
  }
}

export default Form;
