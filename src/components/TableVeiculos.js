import React, { Component } from "react";

export default class TableVeiculos extends Component {
  render() {
    const { values } = this.props;

    return (
      <div>
        {values.veiculos.map(function (v, index) {
          return (
            <div key={v.id}>
              <p className="titulo">Veículo {index + 1}</p>
              <table className="striped centered">
                <tbody>
                  <tr>
                    <td>Placa:</td>
                    <td>
                      <strong>{v.placa}</strong>
                    </td>
                    <td>Modelo:</td>
                    <td>
                      <strong>{v.modelo}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Ano:</td>
                    <td>
                      <strong>{v.ano}</strong>
                    </td>
                    <td>Cor:</td>
                    <td>
                      <strong>{v.cor}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Código Renavam:</td>
                    <td>
                      <strong>{v.codRenavam}</strong>
                    </td>
                    <td>Dano:</td>
                    <td>
                      <strong>
                        {v.dano === "PEQUENA_MONTA"
                          ? "Pequeno"
                          : v.dano === "MEDIA_MONTA"
                          ? "Médio"
                          : v.dano === "GRANDE_MONTA"
                          ? "Grande"
                          : ""}
                      </strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    );
  }
}
