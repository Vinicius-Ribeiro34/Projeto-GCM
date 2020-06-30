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
                                            <th><p>Número da Ocorrência: {oc.numeroDaOcorrencia}</p></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <p><b>ID da Ocorrência: {oc.id}</b></p>
                                        </tr>
                                        {oc.ocorrencias.map((o, index) => {
                                            return (
                                                <Fragment>
                                                <tr><p>Natureza: {o.naturezaDaOcorrencia}</p></tr>
                                                <tr><p>Código da Ocorrencia: {o.codigoDaOcorrencia}</p></tr>
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