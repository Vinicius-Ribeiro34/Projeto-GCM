import React, { Component } from 'react';
import { getOcorrenciaById } from './services/ocorrencia';
import axios from 'axios';
import Table from './Table'
import PopUp from './components/PopUp'

export default class BuscarOcorrencia extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ocorrencia: {},
            id: '',
            show: 0,
        }

        this.handleChange = this.handleChange.bind(this)
        this.ocorrenciaGet = this.ocorrenciaGet.bind(this)
    }
    
    componentDidMount() {
        console.log(this.props.online ? 'Está online' : 'Não está')
    }

    ocorrenciaGet = id => e => {
        e.preventDefault();

        const online = this.props.online;

        if (online === false) {
            getOcorrenciaById((ocorrencia) => {
                if (ocorrencia !== this.state.ocorrencia) {
                    this.setState({
                        ocorrencia: ocorrencia,
                        show: 2
                    })
                } else {
                    PopUp.exibeMensagem('error', 'Batata')
                }

                console.log(this.state.ocorrencia)
            }, id)
        } else {
            const id = this.state.id;
            axios.get("https://cors-anywhere.herokuapp.com/https://gcm-mogi.herokuapp.com/boletins/" + id)
                .then(res => {
                    this.setState({
                        ocorrencia: res.data,
                        show: 2
                    })
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }

    handleChange(e) {
        e.preventDefault();

        this.setState({
            id: parseInt(e.target.value)
        })

        this.setState({
            show: !this.state.show
        })
    }

    render() {
        
        return (
            <div className="container">
                <p className="titulo">Buscar Ocorrência</p>
                <form className="col s10">
                    <div className="row">
                        <div className="input-field col s6 offset-s2">
                            <input name='id' onChange={this.handleChange} type="number" id="buscaId" />
                            <label htmlFor="buscaId">ID da Ocorrência</label>
                        </div>
                        <div className="input-field col s1">
                        <button onClick={this.ocorrenciaGet(this.state.id)} className="waves-effect waves-light btn red darken-1"><i className="material-icons">search</i></button>
                        </div>
                        <br />
                    </div>
                </form>

                {this.state.show === 2 ? <Table values={this.state.ocorrencia} /> : null}

            </div>
        );
    }
}