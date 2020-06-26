import React, { Component } from 'react'
import M from 'materialize-css'

export default class AdicionarVeiculo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            placa: '',
            modelo: '',
            ano: '',
            cor: '',
            codRenavam: '',
            dano: '',
        }

        this.handleList = this.handleList.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.cadastrar = this.cadastrar.bind(this)
    }

    componentDidMount() {
        M.AutoInit();
    }

    cadastrar(e) {
        e.preventDefault();
        const { values } = this.props;
        values.veiculos.push(this.state);

        this.props.adicionarVeiculo();
    }

    handleList(event) {

        this.setState({
            dano: event.target.value
        })
    }

    handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    render() {

        return (
            <div className="container">
                <div className="divider"></div>
                <div className="section">
                    <form className="col s10">
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <input
                                    name='placa'
                                    id="placa"
                                    type="text"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.placa}
                                />
                                <label htmlFor="placa">Placa</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <input
                                    name='modelo'
                                    id="modelo"
                                    type="text"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.modelo}
                                />
                                <label htmlFor="modelo">Modelo</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <input
                                    name='ano'
                                    id="ano"
                                    type="number"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.ano}
                                />
                                <label htmlFor="ano">Ano</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <input
                                    name='cor'
                                    id="cor"
                                    type="text"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.cor}
                                />
                                <label htmlFor="cor">Cor</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <input
                                    name='codRenavam'
                                    id="codigoRenavam"
                                    type="number"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.codRenavam}
                                />
                                <label htmlFor="codigoRenavam">Código Renavam</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <select value={this.state.dano} onChange={this.handleList}>
                                    <option value="">Selecione</option>
                                    <option value="PEQUENA_MONTA">Pequeno</option>
                                    <option value="MEDIA_MONTA">Médio</option>
                                    <option value="GRANDE_MONTA">Grande</option>
                                </select>
                                <label>Dano</label>
                            </div>
                        </div>
                        <div className="row">
                            <button onClick={this.cadastrar} className="waves-effect waves-light btn green darken-1 col s4 offset-s4" href="/">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}