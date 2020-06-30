import React, { Component } from 'react'
import M from 'materialize-css';
import PopUp from './components/PopUp'
import { getBairros } from './services/bairros'

export default class AdicionarEnvolvido extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bairros: [],
            envolvido: {
                nome: '',
                condicaoDaParte: '',
                conduzido: false,
                dataNascimento: '',
                pai: '',
                mae: '',
                nacionalidade: '',
                naturalidadeCidade: '',
                naturalidadeEstado: '',
                telefone: '',
                localDeTrabalho: '',
                versaoDoEnvolvido: '',
                rg: {
                    numeroDoRG: '',
                    orgaoExpedidor: '',
                    estado: ''
                },
                endereco: {
                    residencia: '',
                    numero: '',
                    bairro: '',
                    cidade: '',
                    estado: '',
                    complemento: ''
                }
            }
        }

        this.cadastrar = this.cadastrar.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleListCondicao = this.handleListCondicao.bind(this)
        this.handleListBairros = this.handleListBairros.bind(this)
    }

    componentDidMount() {
        M.AutoInit();

        getBairros(bairro => {
            this.setState({
                bairros: bairro
            });
          })
    }

    handleListCondicao(event) {
        const envolvido = {...this.state.envolvido}
        envolvido.condicaoDaParte = event.target.value;

        this.setState({
            envolvido
        })
    }

    handleListBairros(event) {
        const envolvido = {...this.state.envolvido};
        envolvido.endereco.bairro = parseInt(event.target.value);

        this.setState({
            envolvido
        })
    }

    handleChange(event) {
        event.preventDefault()
        let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
        const { name } = event.target
        const envolvido = this.state.envolvido
        const separadorIndex = name.indexOf('_')
        const inicial = name.substring(0, separadorIndex)
        const atributo = name.substring(separadorIndex + 1, name.length)

        if(this.identificadorInt(atributo)) {
            value = parseInt(value)
        }

        if (inicial === 'rg') {
            envolvido.rg[atributo] = value
        }
        else if (inicial === 'endereco') {
            envolvido.endereco[atributo] = value
        }
        else {
            envolvido[atributo] = value
        }

        this.setState(
            envolvido
        )
    }

    identificadorInt(value) {
        const campos = ['numero'];

        return !(campos.indexOf(value) === -1)
    }

    cadastrar(e) {
        e.preventDefault()
        const { values, handleChange } = this.props;
        values.envolvidos.push(this.state.envolvido);
        handleChange('envolvido')

        this.props.adicionarEnvolvido();

        PopUp.exibeMensagem('success', "Envolvido cadastrado");
    }

    mountOptions() {
        return (
            this.state.bairros.map((bairro) => {
                return <option key={bairro.id} value={bairro.id}>{bairro.nome}</option>
            })
        )
    }

    render() {

        return (
            
                <div className="section">
                    <form className="col s10">
                        <div className="row">
                            <div className="input-field col s5 offset-s1">
                                <input
                                    name='_nome'
                                    id="nome"
                                    type="text"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.envolvido.nome}
                                />
                                <label htmlFor="nome">Nome Envolvido</label>
                            </div>
                            <div className="input-field col s5">
                                <input
                                    name='_dataNascimento'
                                    id="nascimento"
                                    type="date"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.envolvido.dataNascimento}
                                />
                                <label htmlFor="nascimento">Data de Nascimento</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s5 offset-s1">
                                <select value={this.state.envolvido.condicaoDaParte} onChange={this.handleListCondicao}>
                                    <option value="">Selecione</option>
                                    <option value="VITIMA">Vítima</option>
                                    <option value="AUTOR">Autor</option>
                                    <option value="INDICIADO">Indiciado</option>
                                    <option value="SINDICADO">Sindicado</option>
                                    <option value="TESTEMUNHA">Testemunha</option>
                                    <option value="CONDUTOR">Condutor</option>
                                    <option value="PROPRIETARIO">Proprietário</option>
                                    <option value="PASSAGEIRO">Passageiro</option>
                                    <option value="PEDESTRE">Pedestre</option>
                                    <option value="PARTE">Parte</option>
                                    <option value="INDEFINIDA">Indefinida</option>  
                                </select>
                                <label>Condição da parte</label>
                            </div>
                            <div className="input-field col s5">
                                <p>
                                    <label>
                                        <input name='_conduzido'
                                            id="conduzido"
                                            type="checkbox"
                                            className="filled-in validate"
                                            onChange={this.handleChange}
                                            value={this.state.envolvido.conduzido} />
                                        <span>Conduzido</span>
                                    </label>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s5 offset-s1">
                                <input
                                    name='_telefone'
                                    id="telefone"
                                    type="number"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.envolvido.telefone}
                                />
                                <label htmlFor="telefone">Telefone</label>
                            </div>
                            <div className="input-field col s5">
                                <input
                                    name='rg_numeroDoRG'
                                    id="rg"
                                    type="number"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.envolvido.rg.numeroDoRG}
                                />
                                <label htmlFor="rg">Numero RG</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s5 offset-s1">
                                <input
                                    name='rg_orgaoExpedidor'
                                    id="orgaoExpedidor"
                                    type="text"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.envolvido.rg.orgaoExpedidor}
                                />
                                <label htmlFor="orgaoExpedidor">Orgão Expedidor</label>
                            </div>
                            <div className="input-field col s5">
                                <input
                                    name='rg_estado'
                                    id="estado"
                                    type="text"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.envolvido.rg.estado}
                                />
                                <label htmlFor="estado">Estado</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s5 offset-s1">
                                <input
                                    name='_nacionalidade'
                                    id="nacionalidade"
                                    type="text"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.envolvido.nacionalidade}
                                />
                                <label htmlFor="nacionalidade">Nacionalidade</label>
                            </div>
                            <div className="input-field col s5">
                                <input
                                    name='_naturalidadeEstado'
                                    id="naturalidadeEstado"
                                    type="text"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.envolvido.naturalidadeEstado}
                                />
                                <label htmlFor="naturalidadeEstado">Naturalidade Estado</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s5 offset-s1">
                                <input
                                    name='_naturalidadeCidade'
                                    id="naturalidadeCidade"
                                    type="text"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.envolvido.naturalidadeCidade}
                                />
                                <label htmlFor="naturalidadeCidade">Naturalidade Cidade</label>
                            </div>
                            <div className="input-field col s5">
                                <input
                                    name='_localDeTrabalho'
                                    id="localDeTrabalho"
                                    type="text"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.envolvido.localDeTrabalho}
                                />
                                <label htmlFor="localDeTrabalho">Local de Trabalho</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s5 offset-s1">
                                <input
                                    name='_pai'
                                    id="pai"
                                    type="text"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.envolvido.pai}
                                />
                                <label htmlFor="pai">Pai</label>
                            </div>
                            <div className="input-field col s5">
                                <input
                                    name='_mae'
                                    id="mae"
                                    type="text"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.envolvido.mae}
                                />
                                <label htmlFor="mae">Mae</label>
                            </div>
                            <div className="row">
                                <div className="input-field col s10 offset-s1">
                                    <textarea
                                        name='_versaoDoEnvolvido'
                                        id="versaoDoEnvolvido"
                                        className="validate materialize-textarea"
                                        onChange={this.handleChange}
                                        value={this.state.envolvido.versaoDoEnvolvido}
                                    />
                                    <label htmlFor="versaoDoEnvolvido">Versão do Envolvido</label>
                                </div>
                            </div>
                        </div>
                        <p className="titulo">Endereço:</p>
                        <div className="row">
                            <div className="input-field col s5 offset-s1">
                                <input
                                    name='endereco_estado'
                                    id="enderecoEstado"
                                    type="text"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.envolvido.endereco.estado}
                                />
                                <label htmlFor="enderecoEstado">Estado</label>
                            </div>
                            <div className="input-field col s5">
                                <input
                                    name='endereco_cidade'
                                    id="enderecoCidade"
                                    type="text"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.envolvido.endereco.cidade}
                                />
                                <label htmlFor="enderecoCidade">Cidade</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s5 offset-s1">
                                <input
                                    name='endereco_residencia'
                                    id="enderecoResidencia"
                                    type="text"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.envolvido.endereco.residencia}
                                />
                                <label htmlFor="enderecoResidencia">Residencia</label>
                            </div>
                            <div className="input-field col s5">
                                <select className="browser-default" value={this.state.envolvido.endereco.bairro} onChange={this.handleListBairros}>
                                    {this.mountOptions()}
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s5 offset-s1">
                                <input
                                    name='endereco_numero'
                                    id="enderecoNumero"
                                    type="number"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.envolvido.endereco.numero}
                                />
                                <label htmlFor="enderecoNumero">Numero</label>
                            </div>
                            <div className="input-field col s5">
                                <input
                                    name='endereco_complemento'
                                    id="enderecoComplemento"
                                    type="text"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.envolvido.endereco.complemento}
                                />
                                <label htmlFor="enderecoComplemento">Complemento</label>
                            </div>
                        </div>
                        <div className="row">
                            <button onClick={this.cadastrar} className="waves-effect waves-light btn green darken-1 col s4 offset-s4" href="/">Cadastrar</button>
                        </div>
                    </form>
                </div>
            
        )
    }
}