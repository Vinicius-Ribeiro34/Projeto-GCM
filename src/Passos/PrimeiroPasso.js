import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PrimeiroPasso extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <div className="container">
        <div className="section">
          <div className="progress">
            <div
              className="determinate blue darken-3"
              style={{ width: "16%" }}
            ></div>
          </div>
        </div>
        <div className="divider"></div>

        <div className="section">
          <form onSubmit={this.continue} className="col s10">
            <div className="row">
              <div className="input-field col s8 offset-s2">
                <input
                  name="numeroDaOcorrencia"
                  id="numero"
                  type="number"
                  className="validate"
                  onChange={handleChange("numeroDaOcorrencia")}
                  value={values.numeroDaOcorrencia}
                  required
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
                  className="validate"
                  onChange={handleChange("data")}
                  value={values.data}
                  required
                />
                <label htmlFor="data">Data</label>
              </div>
              <div className="input-field col s5">
                <input
                  name="horaFato"
                  id="hora"
                  type="time"
                  className="validate"
                  onChange={handleChange("horaFato")}
                  value={values.horaFato}
                  required
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
                  className="validate"
                  onChange={handleChange("numTalao")}
                  value={values.numTalao}
                  required
                />
                <label htmlFor="talao">Nº Talão</label>
              </div>
              <div className="input-field col s5">
                <input
                  name="viatura"
                  id="viatura"
                  type="number"
                  className="validate"
                  onChange={handleChange("viatura")}
                  value={values.viatura}
                  required
                />
                <label htmlFor="viatura">Viatura</label>
              </div>
            </div>
            <div className="row">
              <Link to="/home">
                <button
                  type="button"
                  onClick={this.props.resetStep}
                  className="waves-effect waves-light btn red darken-1 col s3 offset-s2"
                  href="/"
                >
                  Voltar
                </button>
              </Link>
              <button
                type="submit"
                className="waves-effect waves-light btn green darken-1 col s3 offset-s2"
                href="/"
              >
                Proximo
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
