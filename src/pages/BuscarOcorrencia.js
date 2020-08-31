import React, { Component, Fragment } from "react";
import { getOcorrenciaById } from "../services/ocorrencia";
import M from "materialize-css";
import Table from "../components/Table";
import PopUp from "../components/PopUp";
import api from "../services/api";
import { Link } from "react-router-dom";

export default class BuscarOcorrencia extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ocorrencia: {},
      id: "",
      show: 0,
      token: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.ocorrenciaGet = this.ocorrenciaGet.bind(this);
  }

  componentDidMount() {
    M.AutoInit();
    console.log(this.props.online ? "Está online" : "Não está");
    console.log(this.props.online);

    const tokenStorage = window.localStorage.getItem("token");
    this.setState({
      token: tokenStorage,
    });
  }

  ocorrenciaGet = (id) => (e) => {
    e.preventDefault();

    const online = this.props.online;

    if (online === false) {
      getOcorrenciaById((ocorrencia) => {
        if (ocorrencia !== this.state.ocorrencia) {
          this.setState({
            ocorrencia: ocorrencia,
            show: 2,
          });
        } else {
          PopUp.exibeMensagem("error", "Batata");
        }

        console.log(this.state.ocorrencia);
      }, id);
    } else {
      const id = this.state.id;
      api
        .get("boletins/" + id, {
          headers: {
            Authorization: "Bearer " + this.state.token,
          },
        })
        .then((res) => {
          this.setState({
            ocorrencia: res.data,
            show: 2,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  handleChange(e) {
    e.preventDefault();

    this.setState({
      id: parseInt(e.target.value),
    });

    this.setState({
      show: !this.state.show,
    });
  }

  render() {
    const { editarId } = this.props;
    return (
      <div className="container">
        <p className="titulo">Buscar Ocorrência</p>
        <form className="col s10">
          <div className="row">
            <div className="input-field col s6 offset-s3">
              <input
                name="id"
                onChange={this.handleChange}
                type="number"
                id="buscaId"
              />
              <label htmlFor="buscaId">ID da Ocorrência</label>
            </div>
            <div className="input-field col s1">
              <button
                onClick={this.ocorrenciaGet(this.state.id)}
                className="waves-effect waves-light btn blue darken-4"
              >
                <i className="material-icons">search</i>
              </button>
            </div>
            <br />
          </div>
        </form>

        {this.state.show === 2 ? (
          <Fragment>
            <div className="row">
              <div className="input-field col s12">
                <Link to="/editar">
                  <button
                    onClick={editarId(this.state.id)}
                    className="waves-effect waves-light btn blue darken-4"
                  >
                    <i class="material-icons left large">edit</i>
                    Editar
                  </button>
                </Link>
              </div>
            </div>
            <Table values={this.state.ocorrencia} />
          </Fragment>
        ) : null}
      </div>
    );
  }
}
