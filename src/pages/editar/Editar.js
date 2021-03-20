import React, { Component, Fragment } from 'react';
import api from '../../services/api';
import M from 'materialize-css';
import EditarOcorrencias from './EditarOcorrencias';
import EditarEnvolvidos from './EditarEnvolvidos';
import EditarVeiculos from './EditarVeiculos';
import EditarIrradiacao from './EditarIrradiacao';
import EditarGerais from './EditarGerais';
import EditarCompleto from './EditarCompleto';
import PopUp from '../../components/PopUp';
import { Link } from 'react-router-dom';

export default class Editar extends Component {
  constructor(props) {
    super(props);

    this.boletimPut = this.boletimPut.bind(this);

    this.state = {
      boletins: {},
      veiculos: [],
      ocorrencias: [],
      envolvidos: [],
      bairros: {},
      show: false,
    };
  }

  componentDidMount() {
    const token = window.localStorage.getItem('token');

    api
      .get('boletins/' + this.props.id, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then((res) => {
        const ids = res.data.ocorrencias.map((linha) => {
          return {
            id: linha.id,
          };
        });

        const bairroId = { id: res.data.bairro.id };

        this.setState({
          boletins: res.data,
          veiculos: res.data.veiculos,
          ocorrencias: ids,
          envolvidos: res.data.envolvidos,
          bairros: bairroId,
          show: true,
        });
        M.AutoInit();
        M.updateTextFields();
      });
  }

  boletimPut() {
    const final = {
      ...this.state.boletins,
      veiculos: this.state.veiculos,
      ocorrencias: this.state.ocorrencias,
      envolvidos: this.state.envolvidos,
      bairro: this.state.bairros,
    };
    const token = window.localStorage.getItem('token');

    api
      .put('boletins/' + this.props.id, final, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then(() => {
        PopUp.exibeMensagem('success', 'Boletim Editado');
      })
      .catch((err) => {
        PopUp.exibeMensagem('erros', 'Erro ao editar boletim');
        console.log(err);
      });
  }

  handleChange = (input) => (e) => {
    if (this.identificadorInt(input)) {
      this.setState({
        boletins: {
          ...this.state.boletins,
          [input]: parseInt(e.target.value),
        },
      });
    } else {
      this.setState({
        boletins: {
          ...this.state.boletins,
          [input]: e.target.value,
        },
      });
    }
  };

  handleVeiculos = (input, index) => (e) => {
    const veiculosUpdate = this.state.veiculos.slice();
    veiculosUpdate[index] = {
      ...veiculosUpdate[index],
      [input]: e.target.value,
    };
    this.setState({
      veiculos: veiculosUpdate,
    });
  };

  handleEnvolvidos = (input, index) => (e) => {
    const envolvidosUpdate = this.state.envolvidos.slice();

    if (e.target.type === 'checkbox') {
      const value = e.target.checked;
      envolvidosUpdate[index] = {
        ...envolvidosUpdate[index],
        [input]: value,
      };
      this.setState({
        envolvidos: envolvidosUpdate,
      });
    } else {
      envolvidosUpdate[index] = {
        ...envolvidosUpdate[index],
        [input]: e.target.value,
      };
      this.setState({
        envolvidos: envolvidosUpdate,
      });
    }
  };

  handleOcorrencias = (input, index) => (e) => {
    const ocorrenciasUpdate = this.state.ocorrencias;
    ocorrenciasUpdate[index] = {
      ...ocorrenciasUpdate[index],
      [input]: parseInt(e.target.value),
    };
    this.setState({
      ocorrencias: [...ocorrenciasUpdate],
    });
  };

  handleBairro = (input) => (e) => {
    this.setState({
      bairros: {
        [input]: parseInt(e.target.value),
      },
    });
  };

  handleRg = (input, index) => (e) => {
    const rgUpdate = this.state.envolvidos.slice();
    rgUpdate[index].rg = { ...rgUpdate[index].rg, [input]: e.target.value };
    this.setState({
      envolvidos: [...rgUpdate],
    });
  };

  handleEndereco = (input, index) => (e) => {
    const enderecoUpdate = this.state.envolvidos.slice();
    enderecoUpdate[index].endereco = {
      ...enderecoUpdate[index].endereco,
      [input]: e.target.value,
    };
    this.setState({
      envolvidos: [...enderecoUpdate],
    });
  };

  identificadorInt(value) {
    const campos = [
      'numTalao',
      'viatura',
      'numeroDaOcorrencia',
      'kmIrradiacao',
      'kmLocal',
      'kmPrimeiroTermino',
      'kmSegundoTermino',
    ];

    return !(campos.indexOf(value) === -1);
  }

  render() {
    return (
      <div className="container">
        <p className="titulo">Editar</p>
        {this.state.show ? (
          <Fragment>
            <div className="row">
              <div className="input-field col s12">
                <Link to="/">
                  <button
                    onClick={this.boletimPut}
                    className="waves-effect waves-light btn blue darken-4"
                  >
                    <i class="material-icons left large">send</i>
                    Enviar
                  </button>
                </Link>
              </div>
            </div>
            <div class="col s12">
              <ul class="tabs">
                <li class="tab">
                  <a class="active" href="#completo">
                    Completo
                  </a>
                </li>
                <li class="tab">
                  <a href="#gerais">Gerais</a>
                </li>
                <li class="tab">
                  <a href="#irradiacao">Irradiação</a>
                </li>
                <li class="tab">
                  <a href="#ocorrencias">Ocorrências</a>
                </li>
                <li class="tab">
                  <a href="#envolvidos">Envolvidos</a>
                </li>
                <li className="tab">
                  <a href="#veiculos">Veículos</a>
                </li>
              </ul>
            </div>
            <div id="completo">
              <EditarCompleto
                boletim={this.state}
                handleChange={this.handleChange}
                handleOcorrencias={this.handleOcorrencias}
                handleBairro={this.handleBairro}
                handleEnvolvidos={this.handleEnvolvidos}
                handleEndereco={this.handleEndereco}
                handleRg={this.handleRg}
                handleVeiculos={this.handleVeiculos}
              />
            </div>
            <div id="gerais">
              <EditarGerais
                boletins={this.state.boletins}
                handleChange={this.handleChange}
              />
            </div>
            <div id="irradiacao">
              <EditarIrradiacao
                boletins={this.state.boletins}
                handleChange={this.handleChange}
              />
            </div>
            <div id="ocorrencias">
              <EditarOcorrencias
                bairros={this.state.bairros}
                boletim={this.state.boletins}
                ocorrencias={this.state.ocorrencias}
                handleOcorrencias={this.handleOcorrencias}
                handleBairro={this.handleBairro}
                handleChange={this.handleChange}
              />
            </div>
            <div id="envolvidos">
              <EditarEnvolvidos
                envolvidos={this.state.envolvidos}
                handleEnvolvidos={this.handleEnvolvidos}
                handleRg={this.handleRg}
                handleEndereco={this.handleEndereco}
              />
            </div>
            <div id="veiculos">
              <EditarVeiculos
                veiculos={this.state.veiculos}
                handleVeiculos={this.handleVeiculos}
              />
            </div>
          </Fragment>
        ) : null}
      </div>
    );
  }
}
