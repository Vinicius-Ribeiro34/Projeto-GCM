import React, { Component } from "react";
import api from "../services/api";
import { Navigate } from "react-router-dom";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      senha: "",
      ok: false,
      error: "",
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
        error: "Dados incorretos",
      });
    }
  }

  render() {
    if (this.state.ok) return <Navigate to="/" />;

    return (
      <form onSubmit={this.userLogin}>
        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="senha"
          value={this.state.senha}
          onChange={this.handleChange}
          placeholder="Senha"
        />
        <p style={{ color: "red" }}>{this.state.error}</p>
        <button type="submit">Entrar</button>
      </form>
    );
  }
}

export default LoginForm;
