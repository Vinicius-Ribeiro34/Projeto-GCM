import React, { Component, Fragment } from "react";

export default class EditarIrradiacao extends Component {
  render() {
    const { boletins, handleChange } = this.props;
  
    return (
      <Fragment>
        <p className="titulo">Irradiação</p>
        <form className="col s10">
          <div className="row">
            <div className="input-field col s5 offset-s1">
              <input
                name="horaDeIrradiacao"
                id="hora-irrad"
                type="time"
                onChange={handleChange("horaDeIrradiacao")}
                value={boletins.horaDeIrradiacao}
              />
              <label htmlFor="hora-irrad">Hora Irrad</label>
            </div>

            <div className="input-field col s5">
              <input
                name="viatura"
                id="hora-local"
                type="time"
                onChange={handleChange("horaLocal")}
                value={boletins.horaLocal}
              />
              <label htmlFor="hora-local">Hora local</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s5 offset-s1">
              <input
                name="primeiroTermino"
                id="termino1"
                type="time"
                onChange={handleChange("primeiroTermino")}
                value={boletins.primeiroTermino}
              />
              <label htmlFor="termino1">1º Término</label>
            </div>

            <div className="input-field col s5">
              <input
                name="segundoTermino"
                id="termino2"
                type="time"
                onChange={handleChange("segundoTermino")}
                value={boletins.segundoTermino}
              />
              <label htmlFor="termino2">2º Término</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s5 offset-s1">
              <input
                name="kmDeIrradiacao"
                id="km-irrad"
                type="number"
                onChange={handleChange("kmDeIrradiacao")}
                value={boletins.kmDeIrradiacao}
              />
              <label htmlFor="km-irrad">Km Irrad</label>
            </div>

            <div className="input-field col s5">
              <input
                name="kmLocal"
                id="km-local"
                type="number"
                onChange={handleChange("kmLocal")}
                value={boletins.kmLocal}
              />
              <label htmlFor="km-local">Km Local</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s5 offset-s1">
              <input
                name="kmPrimeiroTermino"
                id="km-termino1"
                type="number"
                onChange={handleChange("kmPrimeiroTermino")}
                value={boletins.kmPrimeiroTermino}
              />
              <label htmlFor="km-termino1">Km 1º Término</label>
            </div>
            <div className="input-field col s5">
              <input
                name="kmSegundoTermino"
                id="km-termino2"
                type="number"
                onChange={handleChange("kmSegundoTermino")}
                value={boletins.kmSegundoTermino}
              />
              <label htmlFor="km-termino2">Km 2º Término</label>
            </div>
          </div>
        </form>
      </Fragment>
    );
  }
}
