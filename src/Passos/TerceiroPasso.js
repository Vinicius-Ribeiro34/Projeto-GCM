import React, { Component } from 'react'

export default class TerceiroPasso extends Component {
    back = e => {
        e.preventDefault()
        this.props.prevStep();
    }

    continue = e => {
        e.preventDefault()
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;

        return (
            <div className="container">
                <div className="section">
                    <div className="progress">
                        <div className="determinate blue darken-3" style={{ width: "50%" }}></div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="section">
                    <form className="col s10">
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <input
                                name='naturezaDaOcorrencia'
                                id="natureza"
                                type="text"
                                className="validate"
                                onChange={handleChange('naturezaDaOcorrencia')}
                                value={values.naturezaDaOcorrencia}
                                />
                                <label htmlFor="natureza">Natureza da ocorrência</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <input
                                name='codigoDaOcorrencia'
                                id="codigo"
                                type="text"
                                className="validate"
                                onChange={handleChange('codigoDaOcorrencia')}
                                value={values.codigoDaOcorrencia}
                                />
                                <label htmlFor="codigo">Código</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <input
                                name='local'
                                id="local"
                                type="text"
                                className="validate"
                                onChange={handleChange('local')}
                                value={values.local}
                                />
                                <label htmlFor="local">Local</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <input
                                name='bairro'
                                id="Bairro"
                                type="text"
                                className="validate"
                                onChange={handleChange('bairro')}
                                value={values.bairro}
                                />
                                <label htmlFor="Bairro">Bairro</label>
                            </div>
                        </div>
                        <div className="row">
                            <button onClick={this.back} className="waves-effect waves-light btn red darken-1 col s3 offset-s2" href="/">Voltar</button>
                            <button onClick={this.continue} className="waves-effect waves-light btn green darken-1 col s3 offset-s2" href="/">Proximo</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}