import React, { Component } from "react";
import { getCodNat } from "../../services/codNat";
import { getBairros } from "../../services/bairros";

export default class EditarOcorrencias extends Component {
  state = {
    nat: [],
    bairrosOffline: [],
  };

  componentDidMount() {
    getCodNat((codNat) => {
      this.setState({
        nat: codNat,
      });
    });

    getBairros((bairro) => {
      this.setState({
        bairrosOffline: bairro,
      });
    });
  }
  
  mountOptions() {
    return this.state.bairrosOffline.map((bairro) => {
      return (
        <option key={bairro.id} value={bairro.id}>
          {bairro.nome}
        </option>
      );
    });
  }

  mountOptionsCodigo() {
    return this.state.nat.map((oc) => {
      return (
        <option key={oc.id} value={oc.id}>
          {oc.codigoDaOcorrencia}
        </option>
      );
    });
  }

  mountOptionsNatureza() {
    return this.state.nat.map((oc) => {
      return (
        <option key={oc.id} value={oc.id}>
          {oc.naturezaDaOcorrencia}
        </option>
      );
    });
  }

  render() {
    const {
      ocorrencias,
      boletim,
      bairros,
      handleOcorrencias,
      handleChange,
      handleBairro,
    } = this.props;

    return (
      <div>
        <p className="titulo">Ocorrências</p>
        <form className="col-s10">
          {ocorrencias.map((ocorrencia, index) => {
            return (
              <div className="row a" key={index}>
                <select
                  className="browser-default input-field col s5 offset-s1"
                  id="selectCodigo"
                  value={ocorrencia.id}
                  onChange={handleOcorrencias("id", index)}
                  required
                >
                  <option value="">Código</option>
                  {this.mountOptionsCodigo()}
                </select>

                <select
                  className="browser-default input-field col s5"
                  id="selectCodigo"
                  style={{ marginLeft: "10px" }}
                  value={ocorrencia.id}
                  onChange={handleOcorrencias("id", index)}
                  required
                >
                  <option value="">Natureza</option>
                  {this.mountOptionsNatureza()}
                </select>
              </div>
            );
          })}

          <div className="row">
            <div className="input-field col s5 offset-s1">
              <input
                name="local"
                id="local"
                type="text"
                className="validate"
                onChange={handleChange("local")}
                value={boletim.local}
                required
              />
              <label htmlFor="local">Local</label>
            </div>

            <div className="input-field col s5">
              <select
                className="browser-default"
                value={bairros.id}
                onChange={handleBairro("id")}
                required
              >
                <option disabled value="">
                  Bairro
                </option>
                {this.mountOptions()}
              </select>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
