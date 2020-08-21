import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import { clearOcorrencia, get } from "../services/ocorrencia";

export default class TelaInicial extends Component {
  state = {
    usuario: "",
    id: "",
    ocorrencias: [],
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
        id: response.data.id,
      });
    } catch (err) {
      console.log(err.message);
    }

    get((ocorrencia) => {
      if (ocorrencia.length === 0) {
        console.log("Sem ocorrências");
      } else {
        const getOcorrencias = ocorrencia;

        getOcorrencias.map((oc) => {
          return (oc.oficial.id = this.state.id);
        });

        this.setState({
          ocorrencias: getOcorrencias,
        });

        this.boletimPost();
      }
    });
  }

  boletimPost() {
    const token = window.localStorage.getItem("token");
    this.state.ocorrencias.map((oc) => {
      return api
        .post("boletins", oc, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((response) => {
          console.log(response);
          clearOcorrencia();
        })
        .catch((error) => console.log(error.response));
    });
  }

  render() {
    return (
      <div className="container">
        <br /> <br />
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
              <Link to="/meus-boletins">
                <button className="waves-effect waves-light btn-large blue darken-4 App col s8 offset-s2">
                  <i className="material-icons left large">add_box</i>Meus
                  Boletins
                </button>
              </Link>
            </div>
          </div>
          {this.state.usuario.includes("ADMINISTRATIVO") && (
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
          )}
          {this.state.usuario.includes("ADMINISTRATIVO") && (
            <div className="row">
              <div className="espaco">
                <Link to="/listar-boletins">
                  <button className="waves-effect waves-light btn-large blue darken-4 App col s8 offset-s2">
                    <i className="material-icons left large">view_list</i>Listar
                    Boletins
                  </button>
                </Link>
              </div>
            </div>
          )}
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
