import React, { Component } from 'react'
import TableOcorrencia from './components/TableOcorrencia'
import TableEnvolvidos from './components/TableEnvolvidos'
import TableVeiculos from './components/TableVeiculos'

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