import React, { Component } from 'react';
import { getBairros } from './services/bairros';
import axios from 'axios';
import PopUp from './components/PopUp'
import { Link } from 'react-router-dom';

export default class IndicadoresRegiao extends Component {

    constructor(props) {
        super(props);

        this.state = {
            regiao: [],
            bairro: '',
            ocorrencias: [],
        }

        this.handleList = this.handleList.bind(this);
    }

    indicadores = e => {
        e.preventDefault();
        this.props.indicadores();
    }

    componentDidMount() {
        getBairros(bairros => {
            this.setState({
                regiao: bairros,
            });
        })
    }

    handleList(event) {

        this.setState({
            bairro: event.target.value
        })
    }

    mountOptionsBairros() {
        return (
            this.state.regiao.map((oc) => {
                return <option key={oc.id} value={oc.id}>{oc.nome}</option>
            })
        )
    }

    get = e => {
        e.preventDefault();
        const id = this.state.bairro;

        axios.get('https://cors-anywhere.herokuapp.com/http://gcm-mogi.herokuapp.com/bairros/indicadores/' + id)
            .then(res => {
                this.setState({
                    ocorrencias: res.data,
                })
            })
            .catch(error => {
                PopUp.exibeMensagem('error', "Falha ao carregar bairros")
            })
    }

    render() {
        return (
            <div className="container">
                <p className="titulo">Buscar por Região</p>

                <form className="col s10">
                    <div className="row">
                        <div className="input-field col s8 offset-s1">
                            <select className="browser-default" value={this.state.bairro} onChange={this.handleList}>
                                {this.mountOptionsBairros()}
                            </select>
                        </div>
                        <div className="input-field col s1">
                            <button onClick={this.get} className="waves-effect waves-light btn red darken-1"><i className="material-icons">search</i></button>
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
                                            <th>Natureza da Ocorrência: {oc.naturezaDaOcorrencia}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td><b>Código da Ocorrência {oc.codigoDaOcorrencia}</b></td></tr>
                                        <tr><td>Quantidade de Boletins: {oc.quantidade}</td></tr>
                                        <tr><td>Percentual: {oc.percentual}</td></tr>
                                    </tbody>
                                </table>
                                <br />
                                <div className="divider"></div>
                            </div>
                        )
                    })}

                </div>
                <br />
                
                    <div className="centered">
                        <Link to='/indicadores'>
                            <button className="waves-effect waves-light btn red darken-1 col s3" href="/">Voltar</button>
                        </Link>
                    </div>
                
            </div>

        );
    }

}