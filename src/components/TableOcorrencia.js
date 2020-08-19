import React, { Component, Fragment } from "react";
import { getCodNatById } from "../services/codNat";
import { getBairrosById } from "../services/bairros";

export default class TableOcorrencia extends Component {
  state = {
    naturezas: [],
    codigos: [],
    bairro: "",
  };

  componentDidMount() {
    this.props.values.ocorrencias.map((item) => {
      return getCodNatById((cod) => {
        this.setState({
          codigos: [...this.state.codigos, cod.codigoDaOcorrencia],
          naturezas: [...this.state.naturezas, cod.naturezaDaOcorrencia],
        });
      }, item.id);
    });

    getBairrosById((cod) => {
      this.setState({
        bairro: cod,
      });
    }, this.props.values.bairro.id);
  }

  render() {
    const { values } = this.props;

    return (
      <Fragment>
        <p className="titulo">Ocorrência: {values.numeroDaOcorrencia}</p>
        <table className="striped centered">
          <tbody>
            <tr>
              <td>Data:</td>
              <td>
                <strong>{values.data}</strong>
              </td>
              <td>Hora Fato:</td>
              <td>
                <strong>{values.horaFato}</strong>
              </td>
            </tr>
            <tr>
              <td>Numero do Talão:</td>
              <td>
                <strong>{values.numTalao}</strong>
              </td>
              <td>Viatura:</td>
              <td>
                <strong>{values.viatura}</strong>
              </td>
            </tr>
            <tr>
              <td>Hora Irradiação:</td>
              <td>
                <strong>{values.horaDeIrradiacao}</strong>
              </td>
              <td>Hora Local:</td>
              <td>
                <strong>{values.horaLocal}</strong>
              </td>
            </tr>
            <tr>
              <td>Primeiro Termino:</td>
              <td>
                <strong>{values.primeiroTermino}</strong>
              </td>
              <td>Segundo Termino:</td>
              <td>
                <strong>{values.segundoTermino}</strong>
              </td>
            </tr>
            <tr>
              <td>Km Irradiação:</td>
              <td>
                <strong>{values.kmDeIrradiacao}</strong>
              </td>
              <td>Km Local:</td>
              <td>
                <strong>{values.kmLocal}</strong>
              </td>
            </tr>
            <tr>
              <td>Km Primeiro Termino:</td>
              <td>
                <strong>{values.kmPrimeiroTermino}</strong>
              </td>
              <td>Km Segundo Termino:</td>
              <td>
                <strong>{values.kmSegundoTermino}</strong>
              </td>
            </tr>
            <tr>
              <td>Natureza da Ocorrência:</td>
              <td>
                {this.state.naturezas.map((nat) => (
                  <strong>{nat} - </strong>
                ))}
              </td>
              <td>Código:</td>
              <td>
                {this.state.codigos.map((cod) => (
                  <strong>{cod} - </strong>
                ))}
              </td>
            </tr>
            <tr>
              <td>Local:</td>
              <td>
                <strong>{values.local}</strong>
              </td>
              <td>Bairro:</td>
              <td>
                <strong>{this.state.bairro.nome}</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </Fragment>
    );
  }
}
