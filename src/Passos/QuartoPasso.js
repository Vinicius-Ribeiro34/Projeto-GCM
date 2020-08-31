import React, { Component } from "react";
import AdicionarEnvolvido from "../helpers/adicionarEnvolvido";

export default class QuartoPasso extends Component {
  state = {
    show: false,
    show2: true,
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  adicionarEnvolvido = () => {
    this.setState({
      show: !this.state.show,
      show2: !this.state.show2,
    });
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <div className="container">
        <p className="titulo">Envolvidos:</p>
        <div className="section">
          <div className="progress">
            <div
              className="determinate blue darken-3"
              style={{ width: "65%" }}
            ></div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="section">
          <div className="center-align">
            {this.state.show2 && (
              <button
                onClick={this.adicionarEnvolvido}
                className="waves-effect waves-light btn-large grey App"
              >
                <i className="material-icons left large">add</i>Adicionar
                Envolvido
              </button>
            )}
          </div>
          <br />
          {this.state.show && (
            <AdicionarEnvolvido
              adicionarEnvolvido={this.adicionarEnvolvido}
              handleChange={handleChange}
              values={values}
            />
          )}
          <br />
        </div>
        <form className="col s10">
          <div className="row">
            <button
              onClick={this.back}
              className="waves-effect waves-light btn blue darken-4 col s3 offset-s2"
              href="/"
            >
              Voltar
            </button>
            <button
              onClick={this.continue}
              className="waves-effect waves-light btn green darken-1 col s3 offset-s2"
              href="/"
            >
              Proximo
            </button>
          </div>
        </form>
      </div>
    );
  }
}
