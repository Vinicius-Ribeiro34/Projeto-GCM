import React, { Component } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";

class Header extends Component {
  componentDidMount() {
    var options = {
      edge: "left",
    };
    var elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, options);
  }

  logOut = () => {
    window.localStorage.removeItem("token");
  };

  render() {
    return (
      <nav>
        <div className="nav-wrapper blue darken-4">
          <Link
            to="/"
            className="brand-logo hide-on-med-and-down"
            id="header-logo"
          >
            GCM
          </Link>
          <Link to="/home" className="brand-logo hide-on-large-only">
            GCM
          </Link>
          <a href="/" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/registrar-ocorrencia">Registrar Ocorrência</Link>
            </li>
            <li>
              <Link to="/buscar-ocorrencia">Buscar Ocorrência</Link>
            </li>
            <li>
              <Link to="/listar-ocorrencia">Listar Ocorrências</Link>
            </li>
            <li>
              <Link to="/indicadores">Indicadores</Link>
            </li>
            <li>
              <Link to="/login" onClick={this.logOut}>
                Sair
              </Link>
              {/* <Link to="/" onClick={this.logOut}>
                Sair
              </Link> */}
            </li>
          </ul>
          <ul className="sidenav" id="mobile-demo">
            <li>
              <Link to="/registrar-ocorrencia">Registrar Ocorrência</Link>
            </li>
            <li>
              <Link to="/buscar-ocorrencia">Buscar Ocorrência</Link>
            </li>
            <li>
              <Link to="/listar-ocorrencia">Listar Ocorrências</Link>
            </li>
            <li>
              <Link to="/indicadores">Indicadores</Link>
            </li>
            <li>
              <Link to="/" onClick={this.logOut}>
                Sair
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
