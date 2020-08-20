import React, { Component } from "react";
import { getCodNat } from "../services/codNat";
import PopUp from "../components/PopUp";
import { Link } from "react-router-dom";
import api from "../services/api";

export default class IndicadoresOcorrencias extends Component {
  constructor(props) {
    super(props);

    this.state = {
      natureza: [],
      codigo: "",
      ocorrencias: [],
    };

    this.handleList = this.handleList.bind(this);
  }

  indicadores = (e) => {
    e.preventDefault();
    this.props.indicadores();
  };

  componentDidMount() {
    getCodNat((cod) => {
      this.setState({
        natureza: cod,
      });
    });
  }

  handleList(event) {
    this.setState({
      codigo: event.target.value,
    });
  }

  mountOptionsNatureza() {
    return this.state.natureza.map((oc) => {
      return (
        <option key={oc.id} value={oc.id}>
          {oc.naturezaDaOcorrencia}
        </option>
      );
    });
  }

  get = (e) => {
    e.preventDefault();
    const id = this.state.codigo;
    const token = window.localStorage.getItem("token");

    api
      .get("ocorrencias/indicadores/" + id, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        this.setState({
          ocorrencias: res.data,
        });
      })
      .catch((error) => {
        PopUp.exibeMensagem("error", "Falha ao carregar bairros");
      });
  };

  render() {
    return (
      <div className="container">
        <p className="titulo">Buscar por Ocorrência</p>

        <form className="col s10">
          <div className="row">
            <div className="input-field col s8 offset-s1">
              <select
                className="browser-default"
                value={this.state.codigo}
                onChange={this.handleList}
              >
                {this.mountOptionsNatureza()}
              </select>
            </div>
            <div className="input-field col s1">
              <button
                onClick={this.get}
                className="waves-effect waves-light btn blue darken-4"
              >
                <i className="material-icons">search</i>
              </button>
            </div>
          </div>
        </form>

        <div className="divider"></div>

        <div>
          {this.state.ocorrencias.map((oc, index) => {
            return (
              <div key={index}>
                <table className="striped centered">
                  <thead>
                    <tr>
                      <th>Bairro: {oc.nome}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Quantidade de Boletins: {oc.quantidade}</td>
                    </tr>
                    <tr>
                      <td>Percentual: {oc.percentual}</td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <div className="divider"></div>
              </div>
            );
          })}
        </div>
        <br />
        <div className="centered">
          <Link to="/indicadores">
            <button
              className="waves-effect waves-light btn blue darken-4 col s3"
              href="/"
            >
              Voltar
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
