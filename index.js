import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Ifpe from './ifpe';

class App extends Component {

  nome = "raul"
  sobrenome = "vanui"

  render() {
    return (
      <>
      <h3>bom dia</h3>
      <Ifpe nomeEstudante="jow"/>
      </>
    );
  }

  apresentar() {
    return (<h1>método 123</h1>)
  }
}

render(<App />, document.getElementById('root'));
