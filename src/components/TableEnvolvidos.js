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
                                        <td><p><b>Condição da Parte:</b></p></td>
                                        <td><p><strong>{e.condicaoDaParte}</strong></p></td>
                                    </tr>
                                    <tr>
                                        <td><p><b>Conduzido:</b></p></td>
                                        <td><p><strong>{e.conduzido ? "Sim" : "Não"}</strong></p></td>
                                    </tr>
                                    <tr>
                                        <td><p><b>Data Nascimento:</b></p></td>
                                        <td><p><strong>{e.dataNascimento}</strong></p></td>
                                    </tr>
                                    <tr>
                                        <td><p><b>Residencia:</b></p></td>
                                        <td><p><strong>{e.endereco.residencia}</strong></p></td>
                                    </tr>
                                    <tr>
                                        <td><p><b>Numero:</b></p></td>
                                        <td><p><strong>{e.endereco.numero}</strong></p></td>
                                    </tr>
                                    <tr>
                                        <td><p><b>Bairro:</b></p></td>
                                        <td><p><strong>{e.endereco.bairro}</strong></p></td>
                                    </tr>
                                    <tr>
                                        <td><p><b>Complemento:</b></p></td>
                                        <td><p><strong>{e.endereco.complemento}</strong></p></td>
                                    </tr>
                                    <tr>
                                        <td><p><b>Cidade:</b></p></td>
                                        <td><p><strong>{e.endereco.cidade}</strong></p></td>
                                    </tr>
                                    <tr>
                                        <td><p><b>Estado:</b></p></td>
                                        <td><p><strong>{e.endereco.estado}</strong></p></td>
                                    </tr>
                                    <tr>
                                        <td><p><b>RG:</b></p></td>
                                        <td><p><strong>{e.rg.numeroDoRG}</strong></p></td>
                                    </tr>
                                    <tr>
                                        <td><p><b>UF:</b></p></td>
                                        <td><p><strong>{e.rg.estado}</strong></p></td>
                                    </tr>
                                    <tr>
                                        <td><p><b>Nacionalidade:</b></p></td>
                                        <td><p><strong>{e.nacionalidade}</strong></p></td>
                                    </tr>
                                    <tr>
                                        <td><p><b>Naturalidade Cidade:</b></p></td>
                                        <td><p><strong>{e.naturalidadeCidade}</strong></p></td>
                                    </tr>
                                    <tr>
                                        <td><p><b>Naturalidade Estado:</b></p></td>
                                        <td><p><strong>{e.naturalidadeEstado}</strong></p></td>
                                    </tr>
                                    <tr>
                                        <td><p><b>Pai:</b></p></td>
                                        <td><p><strong>{e.pai}</strong></p></td>
                                    </tr>
                                    <tr>
                                        <td><p><b>Mãe:</b></p></td>
                                        <td><p><strong>{e.mae}</strong></p></td>
                                    </tr>
                                    <tr>
                                        <td><p><b>Local de Trabalho:</b></p></td>
                                        <td><p><strong>{e.localDeTrabalho}</strong></p></td>
                                    </tr>
                                    <tr>
                                        <td><p><b>Versão do Envolvido:</b></p></td>
                                        <td><p><strong>{e.versaoDoEnvolvido}</strong></p></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div >
                    )
                })
                }
            </Fragment >
        );
    }
}