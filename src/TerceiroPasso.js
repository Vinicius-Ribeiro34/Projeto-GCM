import React, { Component, Fragment } from 'react';
import Header from './Header';

class TerceiroPasso extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <div className="container">
                    <div className="section">
                        <p className="titulo">Passo 3 de 6:</p>
                        <div className="progress">
                            <div className="determinate blue darken-3" style={{ width: "50%" }}></div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="section">
                        <form className="col s10">
                            <div className="row">
                                <div className="input-field col s10 offset-s1">
                                    <input id="natureza" type="text" className="validate" />
                                    <label htmlFor="natureza">Natureza da ocorrência</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s10 offset-s1">
                                    <input id="codigo" type="number" className="validate" />
                                    <label htmlFor="codigo">Código</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s10 offset-s1">
                                    <input id="local" type="text" className="validate" />
                                    <label htmlFor="local">Local</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s10 offset-s1">
                                    <input id="Bairro" type="text" className="validate" />
                                    <label htmlFor="Bairro">Bairro</label>
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

export default TerceiroPasso;