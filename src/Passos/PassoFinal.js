import React, { Component } from 'react'
import {add, get} from '../services/ocorrencia'
import Table from '../Table'

export default class PassoFinal extends Component {
    state = {
        ocorrencia: {}
    }

    back = e => {
        e.preventDefault()
        this.props.prevStep();
    }

    salvar = (e) => {
        e.preventDefault()
        add(this.props.values)
        console.log(this.props.values)
    }

    testeGet() {

        get((ocorrencia) => {
            this.setState({
                ocorrencia: ocorrencia
            })
        })

        console.log(this.state.ocorrencia)

    }

    render() {
        const { values } = this.props;

        return (
            <div className="container">
                <div className="section">
                    <div className="progress">
                        <div className="determinate blue darken-3" style={{ width: "100%" }}></div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="section ">
                    <Table values={values}/>
                    
                </div>
                <br />
                <form className="col s10">
                    <div className="row">
                <button onClick={this.back} className="waves-effect waves-light btn red darken-1 col s3 offset-s2 espaco">Voltar</button>
                <button onClick={this.salvar} className="waves-effect waves-light btn green darken-1 col s3 offset-s2 espaco">Concluir</button>
                </div>
                </form>
            </div>
        )
    }
}