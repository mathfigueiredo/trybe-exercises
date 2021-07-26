import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <fieldset>
          <label for="nameinput">Nome: </label>
          <input
            type="text"
            maxLength="5"
            id="nameinput"
            name="nameinput"
            required
          />

          <label for="emailinput">Email: </label>
          <input
            type="email"
            maxLength="50"
            id="emailinput"
            name="emailinput"
            required
          />

          <label for="cpfinput">CPF: </label>
          <input
            type="text"
            maxLength="11"
            id="cpfinput"
            name="cpfinput"
            required
          />

          <label for="addressinput">Endereço: </label>
          <input
            type="text"
            maxLength="200"
            id="addressinput"
            name="addressinput"
            required
          />

          <label for="stateselect">Estado: </label>
          <select name="stateselect" id="stateselect">
            <option value="Exemplo">Exemplo</option>
          </select>

          <label>Tipo: </label>
          <input type="radio" id="house" name="housetype" value="house" />
          <label for="house">Casa</label>
          <input
            type="radio"
            id="appartment"
            name="housetype"
            value="appartment"
          />
          <label for="appartment">Apartamento</label>
        </fieldset>
      </form>
    );
  }
}

export default Form;
