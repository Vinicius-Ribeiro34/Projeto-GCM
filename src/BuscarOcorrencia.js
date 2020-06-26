import React, { Component,Fragment } from 'react';
import { get } from './services/ocorrencia';
import axios from 'axios';
import Table from './Table';

export default class BuscarOcorrencia extends Component {
    constructor(props) {
        super(props)

        this.state = {
            renderizar: false,
            ocorrencia: {}
        }

        this.testeGet = this.testeGet.bind(this)
    }

    teste = e => {
        e.preventDefault();
        const validacao = this.props.validacao;
        if (validacao === true) {
            axios.get("https://cors-anywhere.herokuapp.com/https://gcm-mogi.herokuapp.com/boletins/1")
                .then(res => {
                    const dados = res.data;
                    this.setState({ocorrencia: dados});
                    this.setState({renderizar: true});
                    console.log(this.state.ocorrencia);
                })
                .catch(error => {
                    console.log(error);
                })

        } else {
            get((ocorrencia) => {
                this.setState({
                    ocorrencia: ocorrencia
                })

                console.log(this.state.ocorrencia)
            })
        }
    }

    tabela = () => {
        if(this.state.renderizar === true){
            const values = this.state.ocorrencia;
            return(
                <Fragment>
                    <Table values = {values} />
                </Fragment>
            )
        }
        
    }

    testeGet(e) {
        e.preventDefault()

    }

    teste(e) {
        e.preventDefault()
        const validacao = this.props.online;
        console.log(validacao);
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

                        <button onClick={this.teste} className="waves-effect waves-light btn red darken-1 col s1"><i className="material-icons">search</i></button>
                    </div>
                    <div className="row">
                        {this.tabela()}
                    </div>
                </form>
            </div>
        );
    }
}