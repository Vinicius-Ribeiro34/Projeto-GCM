import React, { Component } from 'react';
import M from 'materialize-css';


class Header extends Component {

    componentDidMount() {
        var options = {
            edge: 'left',
        }
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, options);
    }

    inicio = () => {
        this.props.inicio();
    }

    gerarOcorrencia = () => {
        this.props.gerarOcorrencia();
    }

    buscarOcorrencia = () => {
        this.props.buscarOcorrencia();
    }

    listarOcorrencias = () => {
        this.props.listarOcorrencias();
    }

    indicadores = () => {
        this.props.indicadores();
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper red darken-1">
                    <a onClick={this.inicio} className="brand-logo hide-on-med-and-down" id="header-logo">GCM</a>
                    <a onClick={this.inicio} className="brand-logo hide-on-large-only">GCM</a>
                    <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a onClick={this.gerarOcorrencia}>Registrar Ocorrência</a></li>
                        <li><a onClick={this.buscarOcorrencia}>Buscar Ocorrência</a></li>
                        <li><a onClick={this.listarOcorrencias}>Listar Ocorrências</a></li>
                        <li><a onClick={this.indicadores}>Indicadores</a></li>
                    </ul>
                    <ul className="sidenav" id="mobile-demo">
                        <li><a onClick={this.gerarOcorrencia}>Registrar Ocorrência</a></li>
                        <li><a onClick={this.buscarOcorrencia}>Buscar Ocorrência</a></li>
                        <li><a onClick={this.listarOcorrencias}>Listar Ocorrências</a></li>
                        <li><a onClick={this.indicadores}>Indicadores</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;