import React, { Component, Fragment } from 'react';
import TableOcorrencia from "./TableOcorrencia";
import TableEnvolvidos from "./TableEnvolvidos";
import TableVeiculos from "./TableVeiculos";
import TableGerais from "./TableGerais";
import TableIrrad from "./TableIrrad";

export default class TableCompleta extends Component {
    render() {
        const { values } = this.props;

        return(
            <Fragment>
                <TableGerais values={values} />
                <TableIrrad values={values} />
                <TableOcorrencia values={values} />
                <TableEnvolvidos values={values} />
                <TableVeiculos values={values} />
            </Fragment>
        );
    }
}