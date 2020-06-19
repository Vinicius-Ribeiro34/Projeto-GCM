import React, { Component } from 'react'
import Table from '../Table'

export default class PassoFinal extends Component {
    state = {
        dados: []
    }

    back = e => {
        e.preventDefault()
        this.props.prevStep();
    }

    salvar = e => {
        e.preventDefault()

        this.setState({
            dados: [...this.state.dados, this.props.values]
        })

        console.log(JSON.stringify(this.state.dados))
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
                <button className="waves-effect waves-light btn red darken-1 col s3 offset-s2 espaco">Editar</button>
                <button onClick={this.salvar} className="waves-effect waves-light btn green darken-1 col s3 offset-s2 espaco">Salvar</button>
                </div>
                </form>
            </div>
        )
    }
}