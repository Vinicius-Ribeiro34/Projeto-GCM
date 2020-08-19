import React, { Component } from "react";
import M from "materialize-css";
import PopUp from "../components/PopUp";

export default class AdicionarVeiculo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      placa: "",
      modelo: "",
      ano: "",
      cor: "",
      codRenavam: "",
      dano: "",
    };

    this.handleList = this.handleList.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.cadastrar = this.cadastrar.bind(this);
  }

  componentDidMount() {
    M.AutoInit();
  }

  cadastrar(e) {
    e.preventDefault();

    const { values } = this.props;
    values.veiculos.push(this.state);

    this.props.adicionarVeiculo();

    PopUp.exibeMensagem("success", "Veículo cadastrado");
  }

  handleList(event) {
    this.setState({
      dano: event.target.value,
    });
  }

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;

    if (this.identificadorInt(name)) {
      this.setState({
        [name]: parseInt(value),
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  identificadorInt(value) {
    const campos = ["ano"];

    return !(campos.indexOf(value) === -1);
  }

  render() {
    return (
      <div className="section">
        <form onSubmit={this.cadastrar} className="col s10">
          <div className="row">
            <div className="input-field col s8 offset-s2">
              <input
                name="placa"
                id="placa"
                type="text"
                className="validate"
                onChange={this.handleChange}
                value={this.state.placa}
                required
              />
              <label htmlFor="placa">Placa</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8 offset-s2">
              <input
                name="modelo"
                id="modelo"
                type="text"
                className="validate"
                onChange={this.handleChange}
                value={this.state.modelo}
                required
              />
              <label htmlFor="modelo">Modelo</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8 offset-s2">
              <input
                name="ano"
                id="ano"
                type="number"
                className="validate"
                onChange={this.handleChange}
                value={this.state.ano}
                required
              />
              <label htmlFor="ano">Ano</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8 offset-s2">
              <input
                name="cor"
                id="cor"
                type="text"
                className="validate"
                onChange={this.handleChange}
                value={this.state.cor}
              />
              <label htmlFor="cor">Cor</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8 offset-s2">
              <input
                name="codRenavam"
                id="codigoRenavam"
                type="number"
                className="validate"
                onChange={this.handleChange}
                value={this.state.codRenavam}
                required
              />
              <label htmlFor="codigoRenavam">Código Renavam</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8 offset-s2">
              <select
                className="browser-default"
                value={this.state.dano}
                onChange={this.handleList}
                required
              >
                <option disabled value="">
                  Dano
                </option>
                <option value="PEQUENA_MONTA">Pequeno</option>
                <option value="MEDIA_MONTA">Médio</option>
                <option value="GRANDE_MONTA">Grande</option>
              </select>
            </div>
          </div>
          <div className="row">
            <button
              type="submit"
              className="waves-effect waves-light btn green darken-1 col s4 offset-s4"
              href="/"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    );
  }
}
