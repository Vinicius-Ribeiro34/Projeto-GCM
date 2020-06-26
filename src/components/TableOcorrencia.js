import React, { Component,Fragment } from 'react';

export default class TableOcorrencia extends Component {


    render() {

        const { values } = this.props;

        return (
            <Fragment>
                <p className="titulo">Ocorrência: {values.numeroDaOcorrencia}</p>
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
            </Fragment>
        );
    }
}

