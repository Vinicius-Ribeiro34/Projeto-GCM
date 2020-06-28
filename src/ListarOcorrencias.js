import React, { Component } from 'react';
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
        this.testeGet();
    }

    testeGet() {
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
            <div>
                <h1>Teste - Pull de Ocorrencias</h1>
                <br/>
                <div>
                    {this.state.ocorrencias.map((oc, index) => {
                        return (
                            <div key={index}>
                                <p>Número da Ocorrência: {oc.numeroDaOcorrencia}</p>{oc.ocorrencias.map((o, index) => {
                                    return (
                                    <div>
                                        <p>Natureza: {o.naturezaDaOcorrencia}</p> 
                                        <p>Código da Ocorrencia: {o.codigoDaOcorrencia}</p></div>
                                    ) 
                                })}
                                <br/>
                            </div>
                                )
                    })}
                </div>
            </div>
        
        );
    }

}