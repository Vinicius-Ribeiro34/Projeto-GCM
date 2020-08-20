import React, { Component } from "react";
import Logo from "../img/logo-gcm.jpg";
import { Link } from "react-router-dom";
import api from "../services/api";

export default class TelaInicial extends Component {
  state = {
    usuario: "",
  };

  async componentDidMount() {
    try {
      const token = window.localStorage.getItem("token");
      const response = await api.get("oficiais/meus-dados", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      this.setState({
        usuario: response.data.perfis,
      });
      console.log(this.state.usuario);
    } catch (err) {
      console.log(err.message);
    }
  }

  render() {
    return (
      <div className="container">
        <img src={Logo} alt="logo" className="Logo hide-on-small-only"></img>
        <img
          src={Logo}
          alt="logo"
          className="Logo-mobile hide-on-med-and-up"
        ></img>
        <div className="col s10">
          <div className="row">
            <div className="espaco">
              <Link to="/registrar-ocorrencia">
                <button className="waves-effect waves-light btn-large blue darken-4 App col s8 offset-s2">
                  <i className="material-icons left large">add_box</i>Registrar
                  Ocorrência
                </button>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="espaco">
              <Link to="/buscar-ocorrencia">
                <button className="waves-effect waves-light btn-large blue darken-4 App col s8 offset-s2">
                  <i className="material-icons left large">search</i>Buscar
                  Ocorrência
                </button>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="espaco">
              <Link to="/listar-ocorrencia">
                <button className="waves-effect waves-light btn-large blue darken-4 App col s8 offset-s2">
                  <i className="material-icons left large">view_list</i>Listar
                  Ocorrências
                </button>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="espaco">
              <Link to="/indicadores">
                <button className="waves-effect waves-light btn-large blue darken-4 App col s8 offset-s2">
                  <i className="material-icons left large">assignment</i>
                  Indicadores
                </button>
              </Link>
            </div>
          </div>
          {this.state.usuario.includes("ADMINISTRATIVO") && (
            <div className="row">
              <div className="espaco">
                <Link to="/cadastro">
                  <button className="waves-effect waves-light btn-large blue darken-4 App col s8 offset-s2">
                    <i className="material-icons left large">assignment_ind</i>
                    Cadastrar Oficial
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
