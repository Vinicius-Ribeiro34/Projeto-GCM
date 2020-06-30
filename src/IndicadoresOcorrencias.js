import React, { Component } from 'react';
import axios from 'axios';
import {getCodNat} from './services/codNat'
import PopUp from './components/PopUp'


export default class IndicadoresOcorrencias extends Component {

    constructor(props) {
        super(props);

        this.state = {
            natureza: [],
            codigo: '',
            ocorrencias: [],
        }

        this.handleList = this.handleList.bind(this);
    }

    componentDidMount() {
        getCodNat(cod => {
            this.setState({
                natureza: cod,
            });
        })
    }

    handleList(event) {

        this.setState({
            codigo: event.target.value
        })
    }

    mountOptionsNatureza() {
        return (
            this.state.natureza.map((oc) => {
                return <option key={oc.id} value={oc.id}>{oc.naturezaDaOcorrencia}</option>
            })
        )
    }

    get = e => {
        e.preventDefault();
        const id = this.state.codigo;

        axios.get('https://cors-anywhere.herokuapp.com/http://gcm-mogi.herokuapp.com/ocorrencias/indicadores/' + id)
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
        return(
            <div className="container">
                <p className="titulo">Buscar por Ocorrência</p>

                <form className="col s10">
                    <div className="row">
                        <div className="input-field col s8 offset-s1">
                            <select className="browser-default" value={this.state.codigo} onChange={this.handleList}>
                                {this.mountOptionsNatureza()}
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
                                            <th><p>Bairro: {oc.nome}</p></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><p>Quantidade de Boletins: {oc.quantidade}</p></tr>
                                        <tr><p>Percentual: {oc.percentual}</p></tr>
                                    </tbody>
                                </table>
                                <br />
                                <div className="divider"></div>
                            </div>
                        )
                    })}

                </div>
            </div>
        );
    }

}