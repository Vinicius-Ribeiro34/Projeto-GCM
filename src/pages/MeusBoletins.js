import React, { Component } from "react";
import api from "../services/api";
import M from "materialize-css";
import { Link } from "react-router-dom";

export default class ListarBoletins extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boletins: [],
    };
  }

  componentDidMount() {
    M.AutoInit();
    this.get();
  }

  get() {
    const token = window.localStorage.getItem("token");
    api
      .get("boletins/meus-boletins", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        this.setState({
          boletins: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { editarId } = this.props;
    return (
      <div className="container">
        <p className="titulo">Meus Boletins</p>
        <br />
        <div>
          {this.state.boletins.map((oc, index) => {
            return (
              <div key={index}>
                <table className="striped centered">
                  <thead>
                    <tr>
                      <th>Número: {oc.numero}</th>
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
                    <tr>
                      <td>
                        <Link to="/editar">
                          <button
                            onClick={editarId(oc.id)}
                            className="waves-effect waves-light btn blue darken-4"
                          >
                            <i class="material-icons left large">edit</i>
                            Editar
                          </button>
                        </Link>
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
