import React, { Component } from 'react';
import axios from 'axios';

export default class BuscarOcorrencia extends Component {

    componentDidMount() {
        axios.get("https://gcm-mogi.herokuapp.com/boletins/1")
        .then(res => {
            const dados = res.data;
            console.log(dados);
        })
        .catch(error => {
            console.log(error);
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
                        <button className="waves-effect waves-light btn red darken-1"><i className="material-icons">search</i></button>
                    </div>
                </form>
            </div>
        );
    }

}