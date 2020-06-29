import React, { Component } from 'react';
import axios from 'axios';
import M from 'materialize-css';

export default class Indicadores extends Component {

    constructor(props) {
        super(props);

        this.state = {
            show: 1,
            ocorrencias: [],
        }
    }

    componentDidMount() {
        M.AutoInit();

        axios.get("https://cors-anywhere.herokuapp.com/http://gcm-mogi.herokuapp.com/bairros/top5-com-mais-boletins")
            .then(res => {
                this.setState({ ocorrencias: res.data });
                console.log(this.state.ocorrencias);
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="container">
                <p className="titulo">Indicadores</p>
                <form className="col s10">
                    <div className="row">
                        <button className="waves-effect waves-light btn red darken-1 col s4 offset-s1">Região</button>
                        <button className="waves-effect waves-light btn red darken-1 col s4 offset-s2">Ocorrências</button>
                    </div>
                </form>
                <div className="divider"></div>
                <p className="titulo">Maiores Ocorrências:</p>
                <div>
                    {this.state.ocorrencias.map((oc, index) => {
                        return (
                            <div key={index}>
                                <table className="striped centered">
                                    <thead>
                                        <tr>
                                            <th>Nome: {oc.nome}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><p>Quantidade de Boletins: {oc.quantidadeDeBO}</p></tr>
                                        <tr><p>Percentual: {oc.percentual}</p></tr>
                                    </tbody>
                                </table>
                                <div className="divider"></div>
                            </div>
                        )
                    })}

                </div>
            </div>
        );
    }

}