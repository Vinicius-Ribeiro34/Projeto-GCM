import React, { Component, Fragment } from "react";

export default class EditarEnvolvidos extends Component {
  render() {
    const { envolvidos, handleEnvolvidos, handleRg, handleEndereco } = this.props;
    return (
      <Fragment>
        <p className="titulo">Envolvidos</p>

        {envolvidos.map((envolvido, index) => {
          return (
            <div key={index}>
              <h4>Envolvido {index + 1}:</h4>
              <br />
              <div className="row">
                <div className="input-field col s5 offset-s1">
                  <input
                    name="_nome"
                    id="nome"
                    type="text"
                    className="validate"
                    onChange={handleEnvolvidos("nome", index)}
                    value={envolvido.nome}
                  />
                  <label htmlFor="nome">Nome Envolvido</label>
                </div>
                <div className="input-field col s5">
                  <input
                    name="_dataNascimento"
                    id="nascimento"
                    type="date"
                    className="validate"
                    onChange={handleEnvolvidos("dataNascimento", index)}
                    value={envolvido.dataNascimento}
                  />
                  <label htmlFor="nascimento">Data de Nascimento</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s5 offset-s1">
                  <select
                    className="browser-default"
                    onChange={handleEnvolvidos("condicaoDaParte", index)}
                    value={envolvido.condicaoDaParte}
                  >
                    <option value="">Condição da Parte</option>
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
                        onChange={handleEnvolvidos("conduzido", index)}
                        checked={envolvido.conduzido}
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
                    onChange={handleEnvolvidos("telefone", index)}
                    value={envolvido.telefone}
                  />
                  <label htmlFor="telefone">Telefone</label>
                </div>
                <div className="input-field col s5">
                  <input
                    name="rg_numeroDoRG"
                    id="rg"
                    type="number"
                    className="validate"
                    onChange={handleRg("numeroDoRG", index)}
                    value={envolvido.rg.numeroDoRG}
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
                    value={envolvido.rg.orgaoExpedidor}
                  />
                  <label htmlFor="orgaoExpedidor">Orgão Expedidor</label>
                </div>
                <div className="input-field col s5">
                  <input
                    name="rg_estado"
                    id="estado"
                    type="text"
                    className="validate"
                    value={envolvido.rg.estado}
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
                    onChange={handleEnvolvidos("nacionalidade", index)}
                    value={envolvido.nacionalidade}
                  />
                  <label htmlFor="nacionalidade">Nacionalidade</label>
                </div>
                <div className="input-field col s5">
                  <input
                    name="_naturalidadeEstado"
                    id="naturalidadeEstado"
                    type="text"
                    className="validate"
                    onChange={handleEnvolvidos("naturalidadeEstado", index)}
                    value={envolvido.naturalidadeEstado}
                  />
                  <label htmlFor="naturalidadeEstado">
                    Naturalidade Estado
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s5 offset-s1">
                  <input
                    name="_naturalidadeCidade"
                    id="naturalidadeCidade"
                    type="text"
                    className="validate"
                    onChange={handleEnvolvidos("naturalidadeCidade", index)}
                    value={envolvido.naturalidadeCidade}
                  />
                  <label htmlFor="naturalidadeCidade">
                    Naturalidade Cidade
                  </label>
                </div>
                <div className="input-field col s5">
                  <input
                    name="_localDeTrabalho"
                    id="localDeTrabalho"
                    type="text"
                    className="validate"
                    onChange={handleEnvolvidos("localDeTrabalho", index)}
                    value={envolvido.localDeTrabalho}
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
                    onChange={handleEnvolvidos("pai", index)}
                    value={envolvido.pai}
                  />
                  <label htmlFor="pai">Pai</label>
                </div>
                <div className="input-field col s5">
                  <input
                    name="_mae"
                    id="mae"
                    type="text"
                    className="validate"
                    onChange={handleEnvolvidos("mae", index)}
                    value={envolvido.mae}
                  />
                  <label htmlFor="mae">Mae</label>
                </div>
                <div className="row">
                  <div className="input-field col s10 offset-s1">
                    <textarea
                      name="_versaoDoEnvolvido"
                      id="versaoDoEnvolvido"
                      className="validate materialize-textarea"
                      onChange={handleEnvolvidos("versaoDoEnvolvido", index)}
                      value={envolvido.versaoDoEnvolvido}
                    />
                    <label htmlFor="versaoDoEnvolvido">
                      Versão do Envolvido
                    </label>
                  </div>
                </div>
              </div>
              <h4>Endereço:</h4>
              <div className="row">
                <div className="input-field col s5 offset-s1">
                  <input
                    name="endereco_estado"
                    id="enderecoEstado"
                    type="text"
                    className="validate"
                    onChange={handleEndereco("estado", index)}
                    value={envolvido.endereco.estado}
                  />
                  <label htmlFor="enderecoEstado">Estado</label>
                </div>
                <div className="input-field col s5">
                  <input
                    name="endereco_cidade"
                    id="enderecoCidade"
                    type="text"
                    className="validate"
                    onChange={handleEndereco("cidade", index)}
                    value={envolvido.endereco.cidade}
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
                    onChange={handleEndereco("residencia", index)}
                    value={envolvido.endereco.residencia}
                  />
                  <label htmlFor="enderecoResidencia">Residencia</label>
                </div>
                <div className="input-field col s5">
                  <input
                    name="endereco_bairro"
                    id="enderecoBairro"
                    type="text"
                    className="validate"
                    onChange={handleEndereco("bairro", index)}
                    value={envolvido.endereco.bairro}
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
                    onChange={handleEndereco("numero", index)}
                    value={envolvido.endereco.numero}
                  />
                  <label htmlFor="enderecoNumero">Numero</label>
                </div>
                <div className="input-field col s5">
                  <input
                    name="endereco_complemento"
                    id="enderecoComplemento"
                    type="text"
                    className="validate"
                    onChange={handleEndereco("complemento", index)}
                    value={envolvido.endereco.complemento}
                  />
                  <label htmlFor="enderecoComplemento">Complemento</label>
                </div>
              </div>
            </div>
          );
        })}
      </Fragment>
    );
  }
}
