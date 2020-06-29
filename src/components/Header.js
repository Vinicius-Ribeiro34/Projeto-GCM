import React, { Component } from 'react';
import M from 'materialize-css';


class Header extends Component {

    componentDidMount() {
        M.AutoInit();
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper red darken-1">
                    <a href="/" className="brand-logo hide-on-med-and-down" id="header-logo">GCM</a>
                    <a href="/" className="brand-logo hide-on-large-only">GCM</a>
                    <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="/">Registrar Ocorrência</a></li>
                        <li><a href="/">Buscar Ocorrência</a></li>
                        <li><a href="/">Listar Ocorrências</a></li>
                        <li><a href="/">Indicadores</a></li>
                    </ul>
                    <ul className="sidenav" id="mobile-demo">
                        <li><a href="/">Registrar Ocorrência</a></li>
                        <li><a href="/">Buscar Ocorrência</a></li>
                        <li><a href="/">Listar Ocorrências</a></li>
                        <li><a href="/">Indicadores</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;