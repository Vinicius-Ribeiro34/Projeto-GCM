import React, { Component } from 'react';
import axios from 'axios';
import M from 'materialize-css';
import { Link } from 'react-router-dom';

export default class Indicadores extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ocorrencias: [],
        }
    }

    indicadoresRegiao = e => {
        e.preventDefault();
        this.props.regiao();
    }

    indicadoresOcorrencias = e => {
        e.preventDefault();
        this.props.ocorrencias();
    }

    componentDidMount() {
        M.AutoInit();

        axios.get("https://cors-anywhere.herokuapp.com/http://gcm-mogi.herokuapp.com/bairros/top5-com-mais-boletins")
            .then(res => {
                this.setState({ ocorrencias: res.data });
            })
            .catch(error => {
                console.log(error);
            })
    }

    // onClick={this.indicadoresRegiao}
    // onClick={this.indicadoresOcorrencias}

    render() {
        return (
            <div className="container">
                <p className="titulo">Indicadores</p>
                <form className="col s10">
                    <div className="row">
                        <Link to='/indicadores-regiao'>
                            <button className="waves-effect waves-light btn red darken-1 col s4 offset-s1">Região</button>
                        </Link>
                        <Link to='/indicadores-ocorrencia'>
                            <button className="waves-effect waves-light btn red darken-1 col s4 offset-s2">Ocorrências</button>
                        </Link>
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
                                        <tr><td>Quantidade de Boletins: {oc.quantidadeDeBO}</td></tr>
                                        <tr><td>Percentual: {oc.percentual}</td></tr>
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