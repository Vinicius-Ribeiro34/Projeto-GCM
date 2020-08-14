import React, { Component, Fragment } from 'react';
import axios from 'axios'


export default class ListarOcorrencia extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ocorrencias: [],
            ocorrencia: ''
        }
    }

    componentDidMount() {
        this.get();
    }

    get() {
        axios.get("https://cors-anywhere.herokuapp.com/https://gcm-mogi.herokuapp.com/boletins/")
            .then(res => {
                this.setState({
                    ocorrencias: res.data,
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {

        return (
            <div className="container">
                <p className="titulo">Lista de Ocorrências</p>
                <br />
                <div>
                    {this.state.ocorrencias.map((oc, index) => {
                        return (
                            <div key={index}>
                                <table className="striped centered">
                                    <thead>
                                        <tr>
                                            <th>Número da Ocorrência: {oc.numeroDaOcorrencia}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><b>ID da Ocorrência: {oc.id}</b></td>
                                        </tr>
                                        {oc.ocorrencias.map((o, index) => {
                                            return (
                                                <Fragment key={index}>
                                                <tr><td>Natureza: {o.naturezaDaOcorrencia}</td></tr>
                                                <tr><td>Código da Ocorrencia: {o.codigoDaOcorrencia}</td></tr>
                                                </Fragment>
                                        )
                                        })}
                                    </tbody>
                                </table>
                                <br />
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