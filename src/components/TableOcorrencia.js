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
            <tr>
              <td>Relatorio GCM:</td>
              <td style={{ textAlign: 'left' }}>
                <strong>{values.relatorioDaGCM}</strong>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </Fragment>
    );
  }
}
