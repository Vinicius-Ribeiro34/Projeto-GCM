import React, { Component } from 'react';
import Logo from './img/logo-gcm.jpg';

export default class TelaInicial extends Component {

    gerarOcorrencia = e => {
        e.preventDefault();
        this.props.gerarOcorrencia();
    }

    buscarOcorrencia = e => {
        e.preventDefault();
        this.props.buscarOcorrencia();
    }

    listarOcorrencias = e => {
        e.preventDefault();
        this.props.listarOcorrencias();
    }

    indicadores = e => {
        e.preventDefault();
        this.props.indicadores();
    }

    render() {
        return (
            <div className="container">
                <img src={Logo} alt="logo" className="Logo hide-on-small-only"></img>
                <img src={Logo} alt="logo" className="Logo-mobile hide-on-med-and-up"></img>
                <div className="col s10">
                    <div className="row">
                        <div className="espaco">
                            <button onClick={this.gerarOcorrencia} className="waves-effect waves-light btn-large red App col s8 offset-s2"><i className="material-icons left large">add_box</i>Registrar Ocorrência</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="espaco">
                            <button onClick={this.buscarOcorrencia} className="waves-effect waves-light btn-large red App col s8 offset-s2"><i className="material-icons left large">search</i>Buscar Ocorrência</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="espaco">
                            <button onClick={this.listarOcorrencias} className="waves-effect waves-light btn-large red App col s8 offset-s2"><i className="material-icons left large">view_list</i>Listar Ocorrências</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="espaco">
                            <button onClick={this.indicadores} className="waves-effect waves-light btn-large red App col s8 offset-s2"><i className="material-icons left large">assignment</i>Indicadores</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}