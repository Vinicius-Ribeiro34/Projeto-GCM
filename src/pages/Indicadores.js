import React, { Component } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";
import api from "../services/api";

export default class Indicadores extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ocorrencias: [],
    };
  }

  indicadoresRegiao = (e) => {
    e.preventDefault();
    this.props.regiao();
  };

  indicadoresOcorrencias = (e) => {
    e.preventDefault();
    this.props.ocorrencias();
  };

  componentDidMount() {
    M.AutoInit();

    const token = window.localStorage.getItem("token");

    api
      .get("bairros/top5-com-mais-boletins", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        this.setState({ ocorrencias: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // onClick={this.indicadoresRegiao}
  // onClick={this.indicadoresOcorrencias}

  render() {
    return (
      <div className="container">
        <p className="titulo">Indicadores</p>
        <form className="col s10">
          <div className="row">
            <Link to="/indicadores-regiao">
              <button className="waves-effect waves-light btn blue darken-4 col s4 offset-s1">
                Região
              </button>
            </Link>
            <Link to="/indicadores-ocorrencia">
              <button className="waves-effect waves-light btn blue darken-4 col s4 offset-s2">
                Ocorrências
              </button>
            </Link>
          </div>
        </form>
        <div className="divider"></div>
        <p className="titulo">Top 5:</p>
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
                      <td>Quantidade de Boletins: {oc.quantidadeDeBO}</td>
                    </tr>
                    <tr>
                      <td>Percentual: {oc.percentual}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="divider"></div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
