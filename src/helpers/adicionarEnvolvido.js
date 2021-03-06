import React, { Component } from "react";
import M from "materialize-css";
import PopUp from "../components/PopUp";

export default class AdicionarEnvolvido extends Component {
  constructor(props) {
    super(props);

    this.state = {
      envolvido: {
        nome: "",
        condicaoDaParte: "",
        conduzido: false,
        dataNascimento: "",
        pai: "",
        mae: "",
        nacionalidade: "",
        naturalidadeCidade: "",
        naturalidadeEstado: "",
        telefone: "",
        localDeTrabalho: "",
        versaoDoEnvolvido: "",
        rg: {
          numeroDoRG: "",
          orgaoExpedidor: "",
          estado: "",
        },
        endereco: {
          residencia: "",
          numero: "",
          bairro: "",
          cidade: "",
          estado: "",
          complemento: "",
        },
      },
    };

    this.cadastrar = this.cadastrar.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleListCondicao = this.handleListCondicao.bind(this);
  }

  componentDidMount() {
    M.AutoInit();
  }

  handleListCondicao(event) {
    const envolvido = { ...this.state.envolvido };
    envolvido.condicaoDaParte = event.target.value;

    this.setState({
      envolvido,
    });
  }

  handleChange(event) {
    event.preventDefault();
    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    const { name } = event.target;
    const envolvido = this.state.envolvido;
    const separadorIndex = name.indexOf("_");
    const inicial = name.substring(0, separadorIndex);
    const atributo = name.substring(separadorIndex + 1, name.length);

    if (this.identificadorInt(atributo)) {
      value = parseInt(value);
    }

    if (inicial === "rg") {
      envolvido.rg[atributo] = value;
    } else if (inicial === "endereco") {
      envolvido.endereco[atributo] = value;
    } else {
      envolvido[atributo] = value;
    }

    this.setState(envolvido);
  }

  identificadorInt(value) {
    const campos = ["numero"];

    return !(campos.indexOf(value) === -1);
  }

  cadastrar(e) {
    e.preventDefault();
    const { values, handleChange } = this.props;
    values.envolvidos.push(this.state.envolvido);
    handleChange("envolvido");

    this.props.adicionarEnvolvido();

    PopUp.exibeMensagem("success", "Envolvido cadastrado");
  }

  render() {
    return (
      <div className="section">
        <form onSubmit={this.cadastrar} className="col s10">
          <div className="row">
            <div className="input-field col s5 offset-s1">
              <input
                name="_nome"
                id="nome"
                type="text"
                className="validate"
                onChange={this.handleChange}
                value={this.state.envolvido.nome}
                required
              />
              <label htmlFor="nome">Nome Envolvido</label>
            </div>
            <div className="input-field col s5">
              <input
                name="_dataNascimento"
                id="nascimento"
                type="date"
                className="validate"
                onChange={this.handleChange}
                value={this.state.envolvido.dataNascimento}
                required
              />
              <label htmlFor="nascimento">Data de Nascimento</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s5 offset-s1">
              <select
                className="browser-default"
                value={this.state.envolvido.condicaoDaParte}
                onChange={this.handleListCondicao}
              >
                <option disabled value="">
                  Condição da Parte
                </option>
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
            </div>
            <div className="input-field col s5">
              <p>
                <label>
                  <input
                    name="_conduzido"
                    id="conduzido"
                    type="checkbox"
                    className="filled-in validate"
                    onChange={this.handleChange}
                    value={this.state.envolvido.conduzido}
                    required
                  />
                  <span>Conduzido</span>
                </label>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s5 offset-s1">
              <input
                name="_telefone"
                id="telefone"
                type="number"
                className="validate"
                onChange={this.handleChange}
                value={this.state.envolvido.telefone}
                required
              />
              <label htmlFor="telefone">Telefone</label>
            </div>
            <div className="input-field col s5">
              <input
                name="rg_numeroDoRG"
                id="rg"
                type="number"
                className="validate"
                onChange={this.handleChange}
                value={this.state.envolvido.rg.numeroDoRG}
                required
              />
              <label htmlFor="rg">Numero RG</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s5 offset-s1">
              <input
                name="rg_orgaoExpedidor"
                id="orgaoExpedidor"
                type="text"
                className="validate"
                onChange={this.handleChange}
                value={this.state.envolvido.rg.orgaoExpedidor}
                required
              />
              <label htmlFor="orgaoExpedidor">Orgão Expedidor</label>
            </div>
            <div className="input-field col s5">
              <input
                name="rg_estado"
                id="estado"
                type="text"
                className="validate"
                onChange={this.handleChange}
                value={this.state.envolvido.rg.estado}
                required
              />
              <label htmlFor="estado">Estado</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s5 offset-s1">
              <input
                name="_nacionalidade"
                id="nacionalidade"
                type="text"
                className="validate"
                onChange={this.handleChange}
                value={this.state.envolvido.nacionalidade}
                required
              />
              <label htmlFor="nacionalidade">Nacionalidade</label>
            </div>
            <div className="input-field col s5">
              <input
                name="_naturalidadeEstado"
                id="naturalidadeEstado"
                type="text"
                className="validate"
                onChange={this.handleChange}
                value={this.state.envolvido.naturalidadeEstado}
                required
              />
              <label htmlFor="naturalidadeEstado">Naturalidade Estado</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s5 offset-s1">
              <input
                name="_naturalidadeCidade"
                id="naturalidadeCidade"
                type="text"
                className="validate"
                onChange={this.handleChange}
                value={this.state.envolvido.naturalidadeCidade}
                required
              />
              <label htmlFor="naturalidadeCidade">Naturalidade Cidade</label>
            </div>
            <div className="input-field col s5">
              <input
                name="_localDeTrabalho"
                id="localDeTrabalho"
                type="text"
                className="validate"
                onChange={this.handleChange}
                value={this.state.envolvido.localDeTrabalho}
                required
              />
              <label htmlFor="localDeTrabalho">Local de Trabalho</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s5 offset-s1">
              <input
                name="_pai"
                id="pai"
                type="text"
                className="validate"
                onChange={this.handleChange}
                value={this.state.envolvido.pai}
                required
              />
              <label htmlFor="pai">Pai</label>
            </div>
            <div className="input-field col s5">
              <input
                name="_mae"
                id="mae"
                type="text"
                className="validate"
                onChange={this.handleChange}
                value={this.state.envolvido.mae}
                required
              />
              <label htmlFor="mae">Mae</label>
            </div>
            <div className="row">
              <div className="input-field col s10 offset-s1">
                <textarea
                  name="_versaoDoEnvolvido"
                  id="versaoDoEnvolvido"
                  className="validate materialize-textarea"
                  onChange={this.handleChange}
                  value={this.state.envolvido.versaoDoEnvolvido}
                  required
                />
                <label htmlFor="versaoDoEnvolvido">Versão do Envolvido</label>
              </div>
            </div>
          </div>
          <p className="titulo">Endereço:</p>
          <div className="row">
            <div className="input-field col s5 offset-s1">
              <input
                name="endereco_estado"
                id="enderecoEstado"
                type="text"
                className="validate"
                onChange={this.handleChange}
                value={this.state.envolvido.endereco.estado}
                required
              />
              <label htmlFor="enderecoEstado">Estado</label>
            </div>
            <div className="input-field col s5">
              <input
                name="endereco_cidade"
                id="enderecoCidade"
                type="text"
                className="validate"
                onChange={this.handleChange}
                value={this.state.envolvido.endereco.cidade}
                required
              />
              <label htmlFor="enderecoCidade">Cidade</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s5 offset-s1">
              <input
                name="endereco_residencia"
                id="enderecoResidencia"
                type="text"
                className="validate"
                onChange={this.handleChange}
                value={this.state.envolvido.endereco.residencia}
                required
              />
              <label htmlFor="enderecoResidencia">Residencia</label>
            </div>
            <div className="input-field col s5">
              <input
                name="endereco_bairro"
                id="enderecoBairro"
                type="text"
                className="validate"
                onChange={this.handleChange}
                value={this.state.envolvido.endereco.bairro}
                required
              />
              <label htmlFor="enderecoBairro">Bairro</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s5 offset-s1">
              <input
                name="endereco_numero"
                id="enderecoNumero"
                type="number"
                className="validate"
                onChange={this.handleChange}
                value={this.state.envolvido.endereco.numero}
                required
              />
              <label htmlFor="enderecoNumero">Numero</label>
            </div>
            <div className="input-field col s5">
              <input
                name="endereco_complemento"
                id="enderecoComplemento"
                type="text"
                className="validate"
                onChange={this.handleChange}
                value={this.state.envolvido.endereco.complemento}
                required
              />
              <label htmlFor="enderecoComplemento">Complemento</label>
            </div>
          </div>
          <div className="row">
            <button
              type="submit"
              className="waves-effect waves-light btn green darken-1 col s4 offset-s4"
              href="/"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    );
  }
}
