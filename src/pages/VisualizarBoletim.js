import React, { Component } from 'react';
import Table from '../components/Table';
import api from '../services/api';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

export default class VisualizarBoletim extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ocorrencia: {},
      show: false,
      id: null,
    };
  }

  componentDidMount() {
    const tokenStorage = window.localStorage.getItem('token');

    const { id } = queryString.parse(window.location.search);
    this.setState({
      id: id,
    });

    api
      .get('boletins/' + id, {
        headers: {
          Authorization: 'Bearer ' + tokenStorage,
        },
      })
      .then((res) => {
        this.setState({
          ocorrencia: res.data,
          show: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (this.state.show) {
      return (
        <div className="container">
          <p className="titulo">Boletim {this.state.id}</p>
          <div className="divider"></div>
          <div className="section ">
            <Table values={this.state.ocorrencia} />
          </div>
          <br />
          <form className="col s10">
            <div className="row">
              <Link to="/meus-boletins">
                <button className="waves-effect waves-light btn blue darken-4 col s3 offset-s2 espaco">
                  Voltar
                </button>
              </Link>
            </div>
          </form>
        </div>
      );
    }
    return null;
  }
}
