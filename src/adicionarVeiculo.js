import React, { Component } from 'react'

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

        this.handleChange = this.handleChange.bind(this)
        this.cadastrar = this.cadastrar.bind(this)
    }

    cadastrar(e) {
        e.preventDefault();
        const { values } = this.props;
        values.veiculos.push(this.state);
    }

    handleChange(e) {
        e.preventDefault();
        const {name, value} = e.target

        this.setState({
            [name]: value
        })

    }

    render() {
        
        return(
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
                                <label htmlFor="natureza">Placa</label>
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
                                <label htmlFor="codigo">Modelo</label>
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
                                <label htmlFor="local">Ano</label>
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
                                <label htmlFor="local">Cor</label>
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
                                <label htmlFor="local">Código Renavam</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <input
                                name='dano'
                                id="dano"
                                type="text"
                                className="validate"
                                onChange={this.handleChange}
                                value={this.state.dano}
                                />
                                <label htmlFor="local">Dano</label>
                            </div>
                        </div>
                        <div className="row">
                            <button onClick={this.cadastrar} className="waves-effect waves-light btn green darken-1 col s4 offset-s2" href="/">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}