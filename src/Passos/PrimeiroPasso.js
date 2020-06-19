import React, { Component } from 'react'

export default class PrimeiroPasso extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {

        const { values, handleChange } = this.props;

        return (
            <div className="container">
                <div className="section">
                    <div className="progress">
                        <div className="determinate blue darken-3" style={{ width: "16%" }}></div>
                    </div>
                </div>
                <div className="divider"></div>

                <div className="section">
                    <form className="col s10">
                        <div className="row">
                            <div className="input-field col s8 offset-s2">
                                <input 
                                name='numeroDaOcorrencia'
                                id="numero"
                                type="number"
                                className="validate"
                                onChange={handleChange('numeroDaOcorrencia')}
                                value={values.numeroDaOcorrencia}
                                />
                                <label htmlFor="numero">Nº</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s5 offset-s1">
                                <input
                                name='data'
                                id="data"
                                type="date"
                                className="validate"
                                onChange={handleChange('data')}
                                value={values.data}
                                />
                                <label htmlFor="data">Data</label>
                            </div>
                            <div className="input-field col s5">
                                <input
                                name='horaFato'
                                id="hora"
                                type="time"
                                className="validate"
                                onChange={handleChange('horaFato')}
                                value={values.horaFato}
                                />
                                <label htmlFor="hora">Hora</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s5 offset-s1">
                                <input
                                name='numTalao'
                                id="talao"
                                type="number"
                                className="validate"
                                onChange={handleChange('numTalao')}
                                value={values.numTalao}
                                />
                                <label htmlFor="talao">Nº Talão</label>
                            </div>
                            <div className="input-field col s5">
                                <input
                                name='viatura'
                                id="viatura"
                                type="number"
                                className="validate"
                                onChange={handleChange('viatura')}
                                value={values.viatura}
                                />
                                <label htmlFor="viatura">Viatura</label>
                            </div>
                        </div>
                        <div className="row">
                            <button className="waves-effect waves-light btn red darken-1 col s3 offset-s2" href="/">Voltar</button>
                            <button onClick={this.continue} className="waves-effect waves-light btn green darken-1 col s3 offset-s2" href="/">Proximo</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}