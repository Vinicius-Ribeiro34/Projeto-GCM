import React, { Component } from 'react'
import M from 'materialize-css'
import {getCodNat} from './services/codNat'
import PopUp from './components/PopUp'

export default class AdicionarVeiculo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ocorrenciasOffline: [],
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

        getCodNat(codNat => {
            this.setState({
                ocorrenciasOffline: codNat
            });
          })
    }

    cadastrar(e) {
        e.preventDefault();
        const { values } = this.props;
        values.ocorrencias.push(this.state.ocorrencia);
        this.props.adicionarOcorrencia();
        PopUp.exibeMensagem('success', "Ocorrência cadastrada");
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

    mountOptionsCodigo() {
        return (
            this.state.ocorrenciasOffline.map((oc) => {
                return <option key={oc.id} value={oc.id}>{oc.codigoDaOcorrencia}</option>
            })
        )
    }

    mountOptionsNatureza() {
        return (
            this.state.ocorrenciasOffline.map((oc) => {
                return <option key={oc.id} value={oc.id}>{oc.naturezaDaOcorrencia}</option>
            })
        )
    }

    render() {

        return (
            
                <div className="section">
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <select className="browser-default" value={this.state.ocorrencia.id} onChange={this.handleList}>
                                    {this.mountOptionsCodigo()}
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s8 offset-s2">
                                <select className="browser-default" value={this.state.ocorrencia.id} onChange={this.handleList}>
                                    {this.mountOptionsNatureza()}
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <button onClick={this.cadastrar} className="waves-effect waves-light btn green darken-1 col s4 offset-s4" href="/">Cadastrar</button>
                        </div>
                </div>
            
        )
    }
}