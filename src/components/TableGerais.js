import React, { Component, Fragment } from "react";

export default class TableGerais extends Component {
  render() {
    const { values } = this.props;

    return (
      <Fragment>
        <p className="titulo">Numero: {values.numeroDaOcorrencia}</p>
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
          </tbody>
        </table>
      </Fragment>
    );
  }
}
