import React, { Component } from "react";
import api from "../services/api";

class Cadastro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: "",
      senha: "",
      nome: "",
      time: "",
      viatura: "",
      email: "",
      perfis: [],
    };

    this.userPost = this.userPost.bind(this);
  }

  handleChange = (e) => {
    const { name, value, type } = e.target;

    if (name === "perfis") {
      this.setState({
        perfis: [...this.state.perfis, value],
      });
    } else {
      if (type === "number") {
        this.setState({
          [name]: Number(value),
        });
      } else {
        this.setState({
          [name]: value,
        });
      }
    }
  };

  async userPost(e) {
    e.preventDefault();
    try {
      const token = window.localStorage.getItem("token");
      const response = await api.post("oficiais", this.state, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  }

  render() {
    return (
      <form onSubmit={this.userPost}>
        <input
          value={this.state.login}
          name="login"
          onChange={this.handleChange}
          type="text"
          placeholder="Usuário"
        />
        <input
          value={this.state.senha}
          name="senha"
          onChange={this.handleChange}
          type="text"
          placeholder="Senha"
        />
        <input
          value={this.state.nome}
          name="nome"
          onChange={this.handleChange}
          type="text"
          placeholder="Nome"
        />
        <input
          value={this.state.time}
          name="time"
          onChange={this.handleChange}
          type="text"
          placeholder="Time"
        />
        <input
          value={this.state.viatura}
          name="viatura"
          onChange={this.handleChange}
          type="number"
          placeholder="Viatura"
        />
        <input
          value={this.state.email}
          name="email"
          onChange={this.handleChange}
          type="text"
          placeholder="Email"
        />
        <select
          className="browser-default"
          onChange={this.handleChange}
          name="perfis"
          value={this.state.perfis}
        >
          <option value="ADMINISTRATIVO">Administrativo</option>
          <option value="EM_CAMPO">Campo</option>
        </select>
        <button type="submit">Cadastrar</button>
      </form>
    );
  }
}

export default Cadastro;
