import React, { Component } from 'react'

export default class PassoFinal extends Component {
    state = {
        dados: []
    }

    back = e => {
        e.preventDefault()
        this.props.prevStep();
    }

    salvar = e => {
        e.preventDefault()

        this.setState({
            dados: [...this.state.dados, this.props.values]
        })

        console.log(JSON.stringify(this.state.dados))
    }

    render() {
        const { values } = this.props;

        return (
            <div className="container">
                <div className="section">
                    <div className="progress">
                        <div className="determinate blue darken-3" style={{ width: "100%" }}></div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="section ">
                    <p className="titulo">Ocorrência: {values.numeroDaOcorrencia}</p>
                    <div className="hide-on-small">
                        <table className="striped centered">
                            <tbody>
                                <tr>
                                    <td>Data:</td>
                                    <td><strong>{values.data}</strong></td>
                                    <td>Hora Fato:</td>
                                    <td><strong>{values.horaFato}</strong></td>
                                </tr>
                                <tr>
                                    <td>Numero do Talão:</td>
                                    <td><strong>{values.numTalao}</strong></td>
                                    <td>Viatura:</td>
                                    <td><strong>{values.viatura}</strong></td>
                                </tr>
                                <tr>
                                    <td>Hora Irradiação:</td>
                                    <td><strong>{values.horaIrradiacao}</strong></td>
                                    <td>Hora Local:</td>
                                    <td><strong>{values.horaLocal}</strong></td>
                                </tr>
                                <tr>
                                    <td>Primeiro Termino:</td>
                                    <td><strong>{values.primeiroTermino}</strong></td>
                                    <td>Segundo Termino:</td>
                                    <td><strong>{values.segundoTermino}</strong></td>
                                </tr>
                                <tr>
                                    <td>Km Irradiação:</td>
                                    <td><strong>{values.kmIrradiacao}</strong></td>
                                    <td>Km Local:</td>
                                    <td><strong>{values.kmLocal}</strong></td>
                                </tr>
                                <tr>
                                    <td>Km Primeiro Termino:</td>
                                    <td><strong>{values.kmPrimeiroTermino}</strong></td>
                                    <td>Km Segundo Termino:</td>
                                    <td><strong>{values.kmSegundoTermino}</strong></td>
                                </tr>
                                <tr>
                                    <td>Natureza da Ocorrência:</td>
                                    <td><strong>{values.naturezaDaOcorrencia}</strong></td>
                                    <td>Código:</td>
                                    <td><strong>{values.codigoDaOcorrencia}</strong></td>
                                </tr>
                                <tr>
                                    <td>Local:</td>
                                    <td><strong>{values.local}</strong></td>
                                    <td>Bairro:</td>
                                    <td><strong>{values.bairro}</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h3>Envolvidos: </h3>
                    {values.envolvidos.map(function (e, index) {
                        return (
                            <div key={e.id}>
                                <p className="titulo">Envolvido {index + 1}: {e.nome}</p>
                                <table className="striped centered">
                                    <tbody>
                                        <tr>
                                            <td>Condição da Parte:</td>
                                            <td><strong>{e.condicaoDaParte}</strong></td>
                                            <td>Conduzido:</td>
                                            <td><strong>{e.conduzido}</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Data Nascimento:</td>
                                            <td><strong>{e.dataNascimento}</strong></td>
                                            <td>Residencia:</td>
                                            <td><strong>{e.endereco.residencia}</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Numero:</td>
                                            <td><strong>{e.endereco.numero}</strong></td>
                                            <td>Bairro:</td>
                                            <td><strong>{e.endereco.bairro}</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Complemento:</td>
                                            <td><strong>{e.endereco.complemento}</strong></td>
                                            <td>Cidade:</td>
                                            <td><strong>{e.endereco.cidade}</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Estado:</td>
                                            <td><strong>{e.endereco.estado}</strong></td>
                                            <td>RG:</td>
                                            <td><strong>{e.rg.numeroRg}</strong></td>
                                        </tr>
                                        <tr>
                                            <td>UF:</td>
                                            <td>{e.rg.estado}<strong></strong></td>
                                            <td>Nacionalidade:</td>
                                            <td><strong>{e.nacionalidade}</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Naturalidade Cidade:</td>
                                            <td><strong>{e.naturalidadeCidade}</strong></td>
                                            <td>Naturalidade Estado:</td>
                                            <td><strong>{e.naturalidadeEstado}</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Pai:</td>
                                            <td><strong>{e.pai}</strong></td>
                                            <td>Mãe:</td>
                                            <td><strong>{e.mae}</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Local de Trabalho:</td>
                                            <td><strong>{e.localDeTrabalho}</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Versão do Envolvido:</td>
                                            <td><strong>{e.versaoDoEnvolvido}</strong></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )
                    })}
                    <p className="titulo">Veiculos: </p>
                    {values.veiculos.map(function (v, index) {
                        return (
                            <div key={v.id}>
                                <p className="titulo">Veículo {index + 1}</p>
                                <table className="striped centered">
                                    <tbody>
                                        <tr>
                                            <td>Placa:</td>
                                            <td><strong>{v.placa}</strong></td>
                                            <td>Modelo:</td>
                                            <td><strong>{v.modelo}</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Ano:</td>
                                            <td><strong>{v.ano}</strong></td>
                                            <td>Cor:</td>
                                            <td><strong>{v.cor}</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Código Renavam:</td>
                                            <td><strong>{v.codigoRenavam}</strong></td>
                                            <td>Dano:</td>
                                            <td><strong>{v.dano}</strong></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )
                    })}
                </div>
                <br />
                <button className="waves-effect waves-light btn red darken-1 col s3 offset-s2">Editar</button>
                <button onClick={this.salvar} className="waves-effect waves-light btn green darken-1 col s3 offset-s2">
                    Salvar
                </button>

            </div>
        )
    }
}