import React, { Component, Fragment } from 'react';
import Header from './Header';

class PrimeiroPasso extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <div className="container">
                    <div className="section">
                        <p className="titulo">Passo 1 de 6:</p>
                        <div className="progress">
                            <div className="determinate blue darken-3" style={{ width: "16%" }}></div>
                        </div>
                    </div>
                    <div className="divider"></div>

                    <div className="section">
                        <form className="col s10">
                            <div className="row">
                                <div className="input-field col s8 offset-s2">
                                    <input id="numero" type="number" className="validate" />
                                    <label htmlFor="numero">Nº</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s5 offset-s1">
                                    <input id="data" type="date" className="validate" />
                                    <label htmlFor="data">Data</label>
                                </div>
                                <div className="input-field col s5">
                                    <input id="hora" type="time" className="validate" />
                                    <label htmlFor="hora">Hora</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s5 offset-s1">
                                    <input id="talao" type="number" className="validate" />
                                    <label htmlFor="talao">Nº Talão</label>
                                </div>
                                <div className="input-field col s5">
                                    <input id="viatura" type="number" className="validate" />
                                    <label htmlFor="viatura">Viatura</label>
                                </div>
                            </div>
                            <div className="row">
                                <a className="waves-effect waves-light btn red darken-1 col s3 offset-s2" href="/">Voltar</a>
                                <a className="waves-effect waves-light btn green darken-1 col s3 offset-s2" href="/">Proximo</a>
                            </div>
                        </form>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default PrimeiroPasso;