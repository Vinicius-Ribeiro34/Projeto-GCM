import React from 'react';
import Logo from './img/logo-gcm.png';
import './main.css';

const Login = () => {
    
    return (
        <div className="container">
            <img src={Logo} alt="logo" className="Logo"></img>
            <h2 className="texto-centralizado">GCM</h2>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix" id="icon-black">account_circle</i>
                            <input id="usuario" type="text" className="validate" />
                            <label htmlFor="usuario">Usuário</label>
                        </div>
                        <div className="input-field col s12">
                            <i className="material-icons prefix" id="icon-black">lock</i>
                            <input id="senha" type="password" className="validate" />
                            <label htmlFor="senha">Senha</label>
                        </div>
                    </div>
                    <a className="waves-effect waves-light btn red darken-1" id="botao" href="/">Enviar</a>
                </form>
            </div>
        </div>
    );
}

export default Login;