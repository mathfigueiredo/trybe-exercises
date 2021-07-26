import React from 'react';
import NameInput from './NameInput';
import EmailInput from './EmailInput';
import CpfInput from './CpfInput';
import AddressInput from './AddressInput';
import StateSelect from './StateSelect';
import HouseType from './HouseType';

class Form extends React.Component {
  render() {
    return (
      <form>
        <fieldset>
          <NameInput />
          <EmailInput />
          <CpfInput />
          <AddressInput />
          <StateSelect />
          <HouseType />
        </fieldset>
      </form>
    );
  }
}

export default Form;
