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
      <div className="container">
        <br /> <br />
        <form onSubmit={this.userPost} className="col s10">
          <div className="row">
            <div className="input-field col s5 offset-s1">
              <input
                value={this.state.login}
                name="login"
                onChange={this.handleChange}
                type="text"
                placeholder="Usuário"
              />
            </div>
            <div className="input-field col s5">
              <input
                value={this.state.senha}
                name="senha"
                onChange={this.handleChange}
                type="text"
                placeholder="Senha"
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s5 offset-s1">
              <input
                value={this.state.nome}
                name="nome"
                onChange={this.handleChange}
                type="text"
                placeholder="Nome"
              />
            </div>

            <div className="input-field col s5">
              <input
                value={this.state.time}
                name="time"
                onChange={this.handleChange}
                type="text"
                placeholder="Time"
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s5 offset-s1">
              <input
                value={this.state.viatura}
                name="viatura"
                onChange={this.handleChange}
                type="number"
                placeholder="Viatura"
              />
            </div>
            <div className="input-field col s5">
              <input
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
                type="text"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="row">
          <div className="input-field col s8 offset-s2">
          <select
            className="browser-default"
            onChange={this.handleChange}
            name="perfis"
            value={this.state.perfis}
          >
            <option value="ADMINISTRATIVO">Administrativo</option>
            <option value="EM_CAMPO">Campo</option>
          </select>
          </div>
          </div>
          <button type="submit" className="waves-effect waves-light btn blue darken-4 col s3 offset-s2">Cadastrar</button>
        </form>
      </div>
    );
  }
}

export default Cadastro;
