import React, { Component, Fragment } from "react";

export default class EditarVeiculos extends Component {
  componentDidMount() {
    console.log(this.props.veiculos);
  }

  render() {
    const { veiculos, handleVeiculos } = this.props;
    return (
      <Fragment>
        <p className="titulo">Veiculos</p>
        {veiculos.map((veiculo, index) => {
          return (
            <div key={index}>
              <h4>Veiculo {index + 1}:</h4>
              <div className="row">
                <div className="input-field col s5 offset-s1">
                  <input
                    name="placa"
                    id="placa"
                    type="text"
                    className="validate"
                    onChange={handleVeiculos("placa", index)}
                    value={veiculo.placa}
                  />
                  <label htmlFor="placa">Placa</label>
                </div>
                <div className="input-field col s5">
                  <input
                    name="modelo"
                    id="modelo"
                    type="text"
                    className="validate"
                    onChange={handleVeiculos("modelo", index)}
                    value={veiculo.modelo}
                  />
                  <label htmlFor="modelo">Modelo</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s5 offset-s1">
                  <input
                    name="ano"
                    id="ano"
                    type="number"
                    className="validate"
                    onChange={handleVeiculos("ano", index)}
                    value={veiculo.ano}
                  />
                  <label htmlFor="ano">Ano</label>
                </div>
                <div className="input-field col s5">
                  <input
                    name="cor"
                    id="cor"
                    type="text"
                    className="validate"
                    onChange={handleVeiculos("cor", index)}
                    value={veiculo.cor}
                  />
                  <label htmlFor="cor">Cor</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s5 offset-s1">
                  <input
                    name="codRenavam"
                    id="codigoRenavam"
                    type="number"
                    className="validate"
                    onChange={handleVeiculos("codRenavam", index)}
                    value={veiculo.codRenavam}
                  />
                  <label htmlFor="codigoRenavam">Código Renavam</label>
                </div>
                <div className="input-field col s5">
                  <select 
                  className="browser-default"
                  onChange={handleVeiculos("dano", index)}
                  value={veiculo.dano}
                  >
                    <option value="">Dano</option>
                    <option value="PEQUENA_MONTA">Pequeno</option>
                    <option value="MEDIA_MONTA">Médio</option>
                    <option value="GRANDE_MONTA">Grande</option>
                  </select>
                </div>
              </div>
            </div>
          );
        })}
      </Fragment>
    );
  }
}
