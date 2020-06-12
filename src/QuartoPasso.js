import React, { Component, Fragment } from 'react';
import Header from './Header';

class QuartoPasso extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <div className="container">
                    <div className="section">
                        <p className="titulo">Passo 4 de 6:</p>
                        <div className="progress">
                            <div className="determinate blue darken-3" style={{ width: "65%" }}></div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="section">
                        <div className="center-align">
                            <a className="waves-effect waves-light btn-large grey App" href="/"><i className="material-icons left large">add</i>Adicionar Envolvido</a>
                        </div>
                    </div>
                    <form className="col s10">
                        <div className="row">
                            <a className="waves-effect waves-light btn red darken-1 col s3 offset-s2" href="/">Voltar</a>
                            <a className="waves-effect waves-light btn green darken-1 col s3 offset-s2" href="/">Proximo</a>
                        </div>
                    </form>
                </div>

            </Fragment>
        );
    }
}

export default QuartoPasso;