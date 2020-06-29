import React, { Component, Fragment } from 'react';

export default class TableEnvolvidos extends Component {

    render() {
        const { values } = this.props;

        return (
            <Fragment>
                {values.envolvidos.map(function (e, index) {
                    return (
                        <div key={e.id}>
                            <p className="titulo">Envolvido {index + 1}: {e.nome}</p>
                            <table className="striped centered">
                                <tbody>
                                    <tr>
                                        <p>Condição da Parte: <strong>{e.condicaoDaParte}</strong></p>
                                    </tr>
                                    <tr>
                                        <p>Conduzido: <strong>{e.conduzido ? "Sim" : "Não"}</strong></p>
                                    </tr>
                                    <tr>
                                        <p>Data Nascimento: <strong>{e.dataNascimento}</strong></p>
                                    </tr>
                                    <tr>
                                        <p>Residencia: <strong>{e.endereco.residencia}</strong></p>
                                    </tr>
                                    <tr>
                                        <p>Numero: <strong>{e.endereco.numero}</strong></p>
                                    </tr>
                                    <tr>
                                        <p>Bairro: <strong>{e.endereco.bairro}</strong></p>
                                    </tr>
                                    <tr>
                                        <p>Complemento: <strong>{e.endereco.complemento}</strong></p>
                                    </tr>
                                    <tr>
                                        <p>Cidade: <strong>{e.endereco.cidade}</strong></p>
                                    </tr>
                                    <tr>
                                        <p>Estado: <strong>{e.endereco.estado}</strong></p>
                                    </tr>
                                    <tr>
                                        <p>RG: <strong>{e.rg.numeroDoRG}</strong></p>
                                    </tr>
                                    <tr>
                                        <p>UF: <strong>{e.rg.estado}</strong></p>
                                    </tr>
                                    <tr>
                                        <p>Nacionalidade: <strong>{e.nacionalidade}</strong></p>
                                    </tr>
                                    <tr>
                                        <p>Naturalidade Cidade: <strong>{e.naturalidadeCidade}</strong></p>
                                    </tr>
                                    <tr>
                                        <p>Naturalidade Estado: <strong>{e.naturalidadeEstado}</strong></p>
                                    </tr>
                                    <tr>
                                        <p>Pai: <strong>{e.pai}</strong></p>
                                    </tr>
                                    <tr>
                                        <p>Mãe: <strong>{e.mae}</strong></p>
                                    </tr>
                                    <tr>
                                        <p>Local de Trabalho: <strong>{e.localDeTrabalho}</strong></p>
                                    </tr>
                                    <tr>
                                        <p>Versão do Envolvido: <strong>{e.versaoDoEnvolvido}</strong></p>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                })}
            </Fragment>
        );
    }
}