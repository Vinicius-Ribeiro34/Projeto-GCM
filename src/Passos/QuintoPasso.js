import React, { Component } from 'react'
import AdicionarVeiculo from '../adicionarVeiculo';

export default class QuintoPasso extends Component {

    state = {
        show: false,
        show2: true,

        dados: []
    }

    back = e => {
        e.preventDefault()
        this.props.prevStep();
    }

    continue = e => {
        e.preventDefault()
        this.props.nextStep();
    }

    adicionarVeiculo = () => {

        this.setState({
            show: !this.state.show,
            show2: !this.state.show2
        })
    }

    render() {

        const {values} = this.props;

        return(
            <div className="container">
                    <div className="section">
                        <div className="progress">
                            <div className="determinate blue darken-3" style={{ width: "80%" }}></div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="section">
                        <div className="center-align">
                            {this.state.show2 && <button onClick={this.adicionarVeiculo} className="waves-effect waves-light btn-large grey App"><i className="material-icons left large">add</i>Adicionar Veiculo</button>}
                        </div>
                        <br/>
                        {this.state.show && <AdicionarVeiculo adicionarVeiculo={this.adicionarVeiculo} values={values} />}
                        <br/>
                    </div>
                    <form className="col s10">
                        <div className="row">
                            <button onClick={this.back} className="waves-effect waves-light btn red darken-1 col s3 offset-s2" href="/">Voltar</button>
                            <button onClick={this.continue} className="waves-effect waves-light btn green darken-1 col s3 offset-s2" href="/">Proximo</button>
                        </div>
                    </form>
                </div>
        )
    }
}