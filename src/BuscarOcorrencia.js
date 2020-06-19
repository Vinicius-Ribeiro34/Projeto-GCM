import React, { Component } from 'react';

export default class BuscarOcorrencia extends Component {

    render() {

        return (
            <div className="container">
                <p className="titulo">Buscar Ocorrência</p>
                <form className="col s10">
                    <div className="row">
                        <div className="input-field col s6 offset-s2">
                            <input type="text" id="buscaId" />
                            <label htmlFor="buscaId">Digite o numero da ocorrência</label>
                        </div>
                        <button className="waves-effect waves-light btn green darken-1 col s1"><i className="material-icons">search</i></button>
                    </div>
                </form>
            </div>
        );
    }

}