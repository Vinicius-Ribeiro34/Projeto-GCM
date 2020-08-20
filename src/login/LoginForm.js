import React, { Component } from "react";
import api from "../services/api";
import Logo from '../img/logo-gcm.png';
import { Navigate } from "react-router-dom";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      senha: "",
      ok: false,
    };

    this.userLogin = this.userLogin.bind(this);
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  async userLogin(e) {
    e.preventDefault();
    try {
      const { email, senha } = this.state;
      const response = await api.post("login", { email: email, senha: senha });
      console.log(response);
      const tokenArray = response.headers.authorization;
      const token = tokenArray.split(" ");
      window.localStorage.setItem("token", token[1]);
      this.setState({
        ok: true,
      });
    } catch (err) {
      console.log(err.message);
      this.setState({
        ok: false,
      });
    }
  }

  render() {
    // if (this.state.ok) return <Navigate to="/home" />;
    if (this.state.ok) return <Navigate to="/" />;

    return (
      <div className="container">
        <img src={Logo} alt="logo" className="Logo hide-on-small-only"></img>
        <img
          src={Logo}
          alt="logo"
          className="Logo-mobile hide-on-med-and-up"
        ></img>
        <form className="col s10" onSubmit={this.userLogin}>
          <div className="row">
            <div className="input-field col s8 offset-s2">
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Email"
              />
            </div>
          </div>

          <div className="row">
            <div className="input-field col s8 offset-s2">
              <input
                type="password"
                name="senha"
                value={this.state.senha}
                onChange={this.handleChange}
                placeholder="Senha"
              />
            </div>
          </div>
          <button 
          className="waves-effect waves-light btn blue darken-4 col s4 offset-s4"
          type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
