import React, { Component } from 'react';
import { add } from '../services/ocorrencia';
import Table from '../components/Table';
import api from '../services/api';
import PopUp from '../components/PopUp';
import { Link } from 'react-router-dom';

export default class PassoFinal extends Component {
  state = {
    ocorrencia: {},
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  cadastrar = () => {
    const online = this.props.online;
    if (online === false) {
      add(this.props.values);
      PopUp.exibeMensagem('success', 'Ocorrência Registrada');
    } else {
      this.boletimPost();
    }

    console.log(this.props.values);

    this.props.clearState();
    this.props.resetStep();
  };

  boletimPost() {
    const token = window.localStorage.getItem('token');
    api
      .post('boletins', this.props.values, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then((response) => {
        PopUp.exibeMensagem('success', 'Ocorrência Registrada');
        console.log(response);
      })
      .catch((error) => {
        PopUp.exibeMensagem('error', 'Erro ao Registrar');
        console.log(error.response);
      });
  }

  render() {
    const { values } = this.props;

    return (
      <div className="container">
        <p className="titulo">Revisão:</p>
        <div className="section">
          <div className="progress">
            <div
              className="determinate blue darken-3"
              style={{ width: '100%' }}
            ></div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="section ">
          <Table values={values} />
        </div>
        <br />
        <form className="col s10">
          <div className="row">
            <button
              onClick={this.back}
              className="waves-effect waves-light btn blue darken-4 col s3 offset-s2 espaco"
            >
              Voltar
            </button>
            <Link to="/">
              <button
                onClick={this.cadastrar}
                className="waves-effect waves-light btn green darken-1 col s3 offset-s2 espaco"
              >
                Registrar
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
