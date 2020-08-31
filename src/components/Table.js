import React, { Component, Fragment } from "react";
import M from "materialize-css";
import TableOcorrencia from "./TableOcorrencia";
import TableEnvolvidos from "./TableEnvolvidos";
import TableVeiculos from "./TableVeiculos";
import TableGerais from "./TableGerais";
import TableIrrad from "./TableIrrad";
import TableCompleta from "./TableCompleta";

export default class Table extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    const { values } = this.props;

    return (
      <Fragment>
        <div class="row">
          <div class="col s12">
            <ul class="tabs">
              <li class="tab">
                <a class="active" href="#completo">Completo</a>
              </li>
              <li class="tab">
                <a href="#gerais">Gerais</a>
              </li>
              <li class="tab">
                <a href="#irradiacao">Irradiação</a>
              </li>
              <li class="tab">
                <a href="#ocorrencias">Ocorrências</a>
              </li>
              <li class="tab">
                <a href="#envolvidos">Envolvidos</a>
              </li>
              <li className="tab">
                <a href="#veiculos">Veículos</a>
              </li>
            </ul>
          </div>
          <div id="completo">
            <TableCompleta values={values} />
          </div>
          <div id="gerais">
            <TableGerais values={values} />
          </div>
          <div id="irradiacao">
            <TableIrrad values={values} />
          </div>
          <div id="ocorrencias">
            <TableOcorrencia values={values} />
          </div>
          <div id="envolvidos">
            <TableEnvolvidos values={values} />
          </div>
          <div id="veiculos">
            <TableVeiculos values={values} />
          </div>
        </div>
      </Fragment>
    );
  }
}
