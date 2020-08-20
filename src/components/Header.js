import React, { Component } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";
import api from "../services/api";

class Header extends Component {
  state = {
    usuario: "",
  };

  componentDidMount() {
    var options = {
      edge: "left",
    };
    var elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, options);

    this.setPerfil();
  }

  async setPerfil() {
    try {
      const token = window.localStorage.getItem("token");
      const response = await api.get("oficiais/meus-dados", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      this.setState({
        usuario: response.data.perfis,
      });
      console.log(this.state.usuario);
    } catch (err) {
      console.log(err.message);
    }
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
            <>
              <li>
                <Link to="/meus-boletins">Meus Boletins</Link>
              </li>
              <li>
                <Link to="/buscar-ocorrencia">Buscar Ocorrência</Link>
              </li>
              <li>
                <Link to="/listar-boletins">Listar Boletins</Link>
              </li>
            </>
            )
            <li>
              <Link to="/indicadores">Indicadores</Link>
            </li>
            <li>
              <Link to="/login" onClick={this.logOut}>
                Sair
              </Link>
            </li>
          </ul>
          <ul className="sidenav" id="mobile-demo">
            <li>
              <Link to="/registrar-ocorrencia">Registrar Ocorrência</Link>
            </li>
            <li>
              <Link to="/meus-boletins">Meus Boletins</Link>
            </li>
            <li>
              <Link to="/buscar-ocorrencia">Buscar Ocorrência</Link>
            </li>
            <li>
              <Link to="/listar-boletins">Listar Boletins</Link>
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
