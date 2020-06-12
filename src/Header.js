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
                    <a href="/" className="brand-logo">GCM</a>
                    <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="sass.html">Consultar</a></li>
                        <li><a href="badges.html">Ocorrências</a></li>
                        <li><a href="collapsible.html">Viatura</a></li>
                        <li><a href="mobile.html">Conta</a></li>
                    </ul>
                    <ul className="sidenav" id="mobile-demo">
                        <li><a href="sass.html">Consultar</a></li>
                        <li><a href="badges.html">Ocorrências</a></li>
                        <li><a href="collapsible.html">Viatura</a></li>
                        <li><a href="mobile.html">Conta</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;