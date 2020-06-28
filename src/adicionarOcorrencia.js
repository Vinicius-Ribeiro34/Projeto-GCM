import React, { Component } from 'react'
import M from 'materialize-css'
import axios from 'axios'

export default class AdicionarVeiculo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ocorrencias: [],
            ocorrencia: {
                id: ''
            }
        }

        this.handleList = this.handleList.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.cadastrar = this.cadastrar.bind(this)
    }

    componentDidMount() {
        M.AutoInit();

        this.fetchOcorrencias();
    }

    cadastrar(e) {
        e.preventDefault();
        const { values } = this.props;
        values.ocorrencias.push(this.state.ocorrencia);

        this.props.adicionarOcorrencia();
    }

    handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handleList(event) {

        const ocorrencia = {...this.state.ocorrencia};
        ocorrencia.id = parseInt(event.target.value)

        this.setState({
            ocorrencia
        })
    }

    fetchOcorrencias() {
        axios.get('https://cors-anywhere.herokuapp.com/https://gcm-mogi.herokuapp.com/ocorrencias/')
            .then(res => {
                this.setState({
                    ocorrencias: res.data
                });
            }).catch(res => {
                console.log(res);
            });
    }

    mountOptions() {
        return (
            this.state.ocorrencias.map((oc) => {
                return <option key={oc.id} value={oc.id}>{oc.codigoDaOcorrencia}</option>
            })
        )
    }

    render() {

        return (
            <div className="container">
                <div className="divider"></div>
                <div className="section">
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <input
                                    name='naturezaDaOcorrencia'
                                    id="natureza"
                                    type="text"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.naturezaDaOcorrencia}
                                />
                                <label htmlFor="natureza">Natureza da ocorrência</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <select className="browser-default" value={this.state.ocorrencia.id} onChange={this.handleList}>
                                    {this.mountOptions()}
                                </select>
                                {this.state.ocorrencia.id}
                            </div>
                        </div>
                        <div className="row">
                            <button onClick={this.cadastrar} className="waves-effect waves-light btn green darken-1 col s4 offset-s2" href="/">Cadastrar</button>
                        </div>
                </div>
            </div>
        )
    }
}