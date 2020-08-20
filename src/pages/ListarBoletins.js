import React, { Component } from "react";
import api from "../services/api";

export default class ListarBoletins extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ocorrencias: [],
      ocorrencia: "",
    };
  }

  componentDidMount() {
    this.get();
  }

  get() {
    const token = window.localStorage.getItem("token");
    api
      .get("boletins", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(res);
        this.setState({
          ocorrencias: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container">
        <p className="titulo">Listar Boletins</p>
        <br />
        <div>
          {this.state.ocorrencias.map((oc, index) => {
            return (
              <div key={index}>
                <table className="striped centered">
                  <thead>
                    <tr>
                      <th>Oficial: {oc.oficial}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <b>Ocorrencias:</b> {oc.ocorrencias}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Bairro:</b> {oc.bairro}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Envolvidos:</b> {oc.envolvidos}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <br />
                <div className="divider"></div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}