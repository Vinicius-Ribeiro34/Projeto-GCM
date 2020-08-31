import React, { Component, Fragment } from "react";

export default class TableGerais extends Component {
  render() {
    const { values } = this.props;

    return (
      <Fragment>
        <p className="titulo">Irradiação</p>
        <table className="striped centered">
          <tbody>
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
          </tbody>
        </table>
      </Fragment>
    );
  }
}
