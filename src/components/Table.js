import React, { Component } from "react";
import TableOcorrencia from "./TableOcorrencia";
import TableEnvolvidos from "./TableEnvolvidos";
import TableVeiculos from "./TableVeiculos";

export default class Table extends Component {
  render() {
    const { values } = this.props;

    return (
      <div>
        <TableOcorrencia values={values} />
        <TableEnvolvidos values={values} />
        <TableVeiculos values={values} />
      </div>
    );
  }
}
