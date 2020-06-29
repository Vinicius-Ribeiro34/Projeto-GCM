import React, { Component } from 'react'

export default class SegundoPasso extends Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault()
        this.props.prevStep();
    }

    render() {
        const { handleChange, values } = this.props;

        return (
            <div className="container">
                <div className="section">
                    <div className="progress">
                        <div className="determinate blue darken-3" style={{ width: "32%" }}></div>
                    </div>
                </div>
                <div className="divider"></div>

                <div className="section">
                    <form className="col s10">
                        <div className="row">
                            <div className="input-field col s5 offset-s1">
                                <input
                                name='horaDeIrradiacao'
                                id="hora-irrad"
                                type="time"
                                className="validate"
                                onChange={handleChange('horaDeIrradiacao')}
                                value={values.horaDeIrradiacao}
                                />
                                <label htmlFor="hora-irrad">Hora Irrad</label>
                            </div>
                            <div className="input-field col s5">
                                <input
                                name='horaLocal'
                                id="hora-local"
                                type="time"
                                className="validate"
                                onChange={handleChange('horaLocal')}
                                value={values.horaLocal}
                                />
                                <label htmlFor="hora-local">Hora Local</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s5 offset-s1">
                                <input
                                name='primeiroTermino'
                                id="termino1"
                                type="time"
                                className="validate"
                                onChange={handleChange('primeiroTermino')}
                                value={values.primeiroTermino}
                                />
                                <label htmlFor="termino1">1º Término</label>
                            </div>
                            <div className="input-field col s5">
                                <input
                                name='segundoTermino'
                                id="termino2"
                                type="time"
                                className="validate"
                                onChange={handleChange('segundoTermino')}
                                value={values.segundoTermino}
                                />
                                <label htmlFor="termino2">2º Término</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s5 offset-s1">
                                <input
                                name='kmDeIrradiacao'
                                id="km-irrad"
                                type="number"
                                className="validate"
                                onChange={handleChange('kmDeIrradiacao')}
                                value={values.kmDeIrradiacao}
                                />
                                <label htmlFor="km-irrad">Km Irrad</label>
                            </div>
                            <div className="input-field col s5">
                                <input
                                name='kmLocal'
                                id="km-local"
                                type="number"
                                className="validate"
                                onChange={handleChange('kmLocal')}
                                value={values.kmLocal}
                                />
                                <label htmlFor="km-local">Km Local</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s5 offset-s1">
                                <input
                                name='kmPrimeiroTermino'
                                id="km-termino1"
                                type="number"
                                className="validate"
                                onChange={handleChange('kmPrimeiroTermino')}
                                value={values.kmPrimeiroTermino}
                                />
                                <label htmlFor="km-termino1">Km 1º Término</label>
                            </div>
                            <div className="input-field col s5">
                                <input
                                name='kmSegundoTermino'
                                id="km-termino2"
                                type="number"
                                className="validate"
                                onChange={handleChange('kmSegundoTermino')}
                                value={values.kmSegundoTermino}
                                />
                                <label htmlFor="km-termino2">Km 2º Término</label>
                            </div>
                            <div className="row">
                                <button onClick={this.back} className="waves-effect waves-light btn red darken-1 col s3 offset-s2" href="/">Voltar</button>
                                <button onClick={this.continue} className="waves-effect waves-light btn green darken-1 col s3 offset-s2" href="/">Proximo</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}