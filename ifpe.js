import React, { Component } from 'react';

export default class Ifpe extends Component {

  constructor(props) {
    this.executar =
      this.executar.bind(this)
    this.state = { nome:props.nome}
  }

  render() {
    return (
      <>
        <h1>hello {this.state.nome}</h1>
        <button onClick={this.executar}> clique aqui</button>
      </>
    )
  }

  executar() {
    this.setState({ nome: "jp" })
  }

}