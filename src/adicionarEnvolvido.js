import React, { Component } from 'react'
import M from 'materialize-css';

export default class AdicionarEnvolvido extends Component {
    constructor(props) {
        super(props)

        this.state = {
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
                    numeroRg: '',
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
            },

            dados: [],

        }

        this.cadastrar = this.cadastrar.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleList = this.handleList.bind(this)
    }

    componentDidMount() {
       
            M.AutoInit();

            var options= {
                data: {
                    "Aterrado": null,
                "Bairro Boa": null,
                "Cdhu": null,
                "Centro": null,
                "Chácara Ipe": null,
                "Chácara São Marcelo": null,
                "Chácara Sol Nascente": null,
                "Cob Brasil Cerealist": null,
                "Comeca Piteiras": null,
                "Condomínio Morro Vermelho": null,
                "Condomínio Santa Úrsula": null,
                "Conjunto Habitacional Jardim Europa": null,
                "Conjunto Residencial Anselmo Lopes Bueno": null,
                "Distrito Industrial": null,
                "Distrito Industrial II": null,
                "Div Conchal Araras": null,
                "Fazenda B Vista Distrito Indu": null,
                "Ind Mira Martim Fco": null,
                "Jacuba": null,
                "Jardim 31 de Marco": null,
                "Jardim 31 Marco": null,
                "Jardim Alvorada": null,
                "Jardim América": null,
                "Jardim Áurea": null,
                "Jardim Aurora": null,
                "Jardim Bela Vista": null,
                "Jardim Bi-centenario": null,
                "Jardim Brasília": null,
                "Jardim Califórnia": null,
                "Jardim Carlos Gomes": null,
                "Jardim Cintra": null,
                "Jardim Copacabana": null,
                "Jardim Elite": null,
                "Jardim Europa": null,
                "Jardim Flamboyant": null,
                "Jardim Flórida": null,
                "Jardim Getúlio Vargas": null,
                "Jardim Guacu-mirim": null,
                "Jardim Guarnieri": null,
                "Jardim Helena": null,
                "Jardim Itapema": null,
                "Jardim Lago": null,
                "Jardim Linda Chaib": null,
                "Jardim Longatto": null,
                "Jardim Maria Antonieta": null,
                "Jardim Maria Beatriz": null,
                "Jardim Maria Bonati Bordignon": null,
                "Jardim Mogi Mirim II": null,
                "Jardim Murayama": null,
                "Jardim Nazareth": null,
                "Jardim Nossa Senhora Aparecida": null,
                "Jardim Panorama": null,
                "Jardim Patrícia": null,
                "Jardim Paulista": null,
                "Jardim Pissinatti": null,
                "Jardim Planalto": null,
                "Jardim Planalto Mirim": null,
                "Jardim Primavera": null,
                "Jardim Quartieri": null,
                "Jardim Santa Ana": null,
                "Jardim Santa Clara": null,
                "Jardim Santa Cruz": null,
                "Jardim Santa Helena": null,
                "Jardim Santa Júlia": null,
                "Jardim Sbeghen": null,
                "Jardim Scomparim": null,
                "Jardim Silvânia": null,
                "Jardim Tropical": null,
                "Loteamento Dionízio Linares": null,
                "Loteamento Inocoop": null,
                "Loteamento Linda Chaib": null,
                "Loteamento Nossa Senhora Graças": null,
                "Loteamento Nova Mogi": null,
                "Loteamento Santa Ana": null,
                "Loteamento São Jerônimo": null,
                "Martim Francisco": null,
                "Mirante": null,
                "Mirim": null,
                "Mogi Mirim II": null,
                "Mogi-mirim Ii": null,
                "Morro Vermelho": null,
                "Nova Mogi": null,
                "Paraíso Cachoeira": null,
                "Parque da Imprensa": null,
                "Parque das Laranjeiras": null,
                "Parque Empresa": null,
                "Parque Esperança": null,
                "Parque Estado II": null,
                "Parque Imprensa": null,
                "Parque Laranjeiras": null,
                "Parque Novacoop": null,
                "Parque Real": null,
                "Parque Real Ii": null,
                "Parque Residencial Murayama": null,
                "Piteiras": null,
                "Planalto Bela Vista": null,
                "Portal Luíza": null,
                "Prx Escola S Benedit": null,
                "Residencial Bosque": null,
                "Santa Cruz": null,
                "Saúde": null,
                "Sehac": null,
                "Soares": null,
                "Sobradinho": null,
                "Tucura": null,
                "Usina Esmeralda": null,
                "Vila Bianchi": null,
                "Vila Bordignon": null,
                "Vila Dias": null,
                "Vila Eunice": null,
                "Vila Melo": null,
                "Vila Morani": null,
                "Vila Oceania": null,
                "Vila Pichatelli": null,
                "Vila Primavera": null,
                "Vila Rádio": null,
                "Vila Santa Eliza": null,
                "Vila Santa Luzia": null,
                "Vila São João": null,
                "Vila São José": null,
                "Vila Universitária": null,
                },
                minLength:3
            }
            var elems = document.querySelectorAll('#enderecoBairro');
            M.Autocomplete.init(elems, options);
          }

    handleList(event) {
        const envolvido = {...this.state.envolvido}
        envolvido.condicaoDaParte = event.target.value;

        this.setState({
            envolvido
        })
    }

    handleChange(event) {
        event.preventDefault()
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
        const { name } = event.target
        const envolvido = this.state.envolvido
        const separadorIndex = name.indexOf('_')
        const inicial = name.substring(0, separadorIndex)
        const atributo = event.target.name.substring(separadorIndex + 1, name.length)

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

    mostrar = e => {
        e.preventDefault();
        console.log(JSON.stringify(this.state.envolvido))
    }

    cadastrar(e) {
        e.preventDefault()
        const { values, handleChange } = this.props;
        values.envolvidos.push(this.state.envolvido);
        handleChange('envolvido')

        this.props.adicionarEnvolvido();
    }

    render() {

        return (
            <div className="container">
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
                            <div className="input-field col s6">
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
                                <select value={this.state.envolvido.condicaoDaParte} onChange={this.handleList}>
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
                                    name='rg_numeroRg'
                                    id="rg"
                                    type="number"
                                    className="validate"
                                    onChange={this.handleChange}
                                    value={this.state.envolvido.rg.numeroRg}
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
                                <input
                                    name='endereco_bairro'
                                    id="enderecoBairro"
                                    type="text"
                                    className="validate no-autoinit autocomplete"
                                    onChange={this.handleChange}
                                    value={this.state.envolvido.endereco.bairro}
                                />
                                <label htmlFor="enderecoBairro">Bairro</label>
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
            </div>
        )
    }
}