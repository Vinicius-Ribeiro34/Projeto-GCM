import React, { Component, Fragment } from "react";

export default class EditarGerais extends Component {
  render() {
      const { boletins, handleChange } = this.props
    return (
      <Fragment>
        <p className="titulo">Dados Gerais:</p>
        <form className="col s10">
          <div className="row">
            <div className="input-field col s8 offset-s2">
              <input
                name="numeroDaOcorrencia"
                id="numero"
                type="number"
                className="validate"
                onChange={handleChange("numeroDaOcorrencia")}
                value={boletins.numeroDaOcorrencia}
              />
              <label htmlFor="numero">Nº</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s5 offset-s1">
              <input
                name="data"
                id="data"
                type="date"
                onChange={handleChange("data")}
                value={boletins.data}
              />
              <label htmlFor="data">Data</label>
            </div>

            <div className="input-field col s5">
              <input
                name="horaFato"
                id="hora"
                type="time"
                onChange={handleChange("horaFato")}
                value={boletins.horaFato}
              />
              <label htmlFor="hora">Hora</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s5 offset-s1">
              <input
                name="numTalao"
                id="talao"
                type="number"
                onChange={handleChange("numTalao")}
                value={boletins.numTalao}
              />
              <label htmlFor="talao">Nº Talão</label>
            </div>
            <div className="input-field col s5">
              <input
                name="viatura"
                id="viatura"
                type="number"
                onChange={handleChange("viatura")}
                value={boletins.viatura}
              />
              <label htmlFor="viatura">Viatura</label>
            </div>
          </div>
        </form>
      </Fragment>
    );
  }
}
