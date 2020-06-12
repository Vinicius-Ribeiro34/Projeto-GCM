import React, { Component, Fragment } from 'react';
import Header from './Header';

class SegundoPasso extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <div className="container">
                    <div className="section">
                        <p className="titulo">Passo 2 de 6:</p>
                        <div className="progress">
                            <div className="determinate blue darken-3" style={{ width: "32%" }}></div>
                        </div>
                    </div>
                    <div className="divider"></div>

                    <div className="section">
                        <form className="col s10">
                            <div className="row">
                                <div className="input-field col s5 offset-s1">
                                    <input id="hora-irrad" type="time" className="validate" />
                                    <label htmlFor="hora-irrad">Hora Irrad</label>
                                </div>
                                <div className="input-field col s5">
                                    <input id="hora-local" type="time" className="validate" />
                                    <label htmlFor="hora-local">Hora Local</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s5 offset-s1">
                                    <input id="termino1" type="number" className="validate" />
                                    <label htmlFor="termino1">1º Término</label>
                                </div>
                                <div className="input-field col s5">
                                    <input id="termino2" type="number" className="validate" />
                                    <label htmlFor="termino2">2º Término</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s5 offset-s1">
                                    <input id="km-irrad" type="number" className="validate" />
                                    <label htmlFor="km-irrad">Km Irrad</label>
                                </div>
                                <div className="input-field col s5">
                                    <input id="km-local" type="number" className="validate" />
                                    <label htmlFor="km-local">Km Local</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s5 offset-s1">
                                    <input id="km-termino1" type="number" className="validate" />
                                    <label htmlFor="km-termino1">Km 1º Término</label>
                                </div>
                                <div className="input-field col s5">
                                    <input id="km-termino2" type="number" className="validate" />
                                    <label htmlFor="km-termino2">Km 2º Término</label>
                                </div>
                                <div className="row">
                                    <a className="waves-effect waves-light btn red darken-1 col s3 offset-s2" href="/">Voltar</a>
                                    <a className="waves-effect waves-light btn green darken-1 col s3 offset-s2" href="/">Proximo</a>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default SegundoPasso;