import React, { Component } from 'react';
import {get} from './services/ocorrencia';
import axios from 'axios';

export default class BuscarOcorrencia extends Component {
    constructor(props){
        super(props)

        this.state = {
            ocorrencia: {}
        }

        this.testeGet = this.testeGet.bind(this)
    }

    componentDidMount() {
        axios.get("https://cors-anywhere.herokuapp.com/https://gcm-mogi.herokuapp.com/boletins/1")
        .then(res => {
            const dados = res.data;
            console.log(dados);
        })
        .catch(error => {
            console.log(error);
        })
    }

    testeGet(e) {
        e.preventDefault()
        get((ocorrencia) => {
            this.setState({
                ocorrencia: ocorrencia
            })

            console.log(this.state.ocorrencia)
        })  
    }
    
    render() {

        return (
            <div className="container">
                <p className="titulo">Buscar Ocorrência</p>
                <form className="col s10">
                    <div className="row">
                        <div className="input-field col s6 offset-s2">
                            <input type="number" id="buscaId" />
                            <label htmlFor="buscaId">Digite o numero da ocorrência</label>
                        </div>
                        <button onClick={this.testeGet} className="waves-effect waves-light btn red darken-1"><i className="material-icons">search</i></button>
                    </div>
                </form>
            </div>
        );
    }

}