import React, { Component } from 'react';

export default class TableEnvolvidos extends Component {

    render() {
        const { values } = this.props;

        return (
            <div>
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
                                        <td><strong>{e.conduzido ? "Sim" : "Não"}</strong></td>
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
            </div>
        );
    }
}