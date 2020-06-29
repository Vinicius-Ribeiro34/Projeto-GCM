import React, { Component } from 'react'
import AdicionarOcorrencia from '../adicionarOcorrencia'
import M from 'materialize-css'
import axios from 'axios'


export default class TerceiroPasso extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false,
            show2: true,
            bairro: '',
            bairros: [],
        }

        this.handleList = this.handleList.bind(this)
    }

    componentDidMount() {
        M.AutoInit();

        this.fetchBairros();
    }

    back = e => {
        e.preventDefault()
        this.props.prevStep();
    }

    continue = e => {
        e.preventDefault()

        const {values} = this.props;
        values.bairro.id = parseInt(this.state.bairro)

        this.props.nextStep();
    }

    handleList(event) {

        this.setState({
            bairro: event.target.value
        })
    }

    adicionarOcorrencia = () => {
        this.setState({
            show: !this.state.show,
            show2: !this.state.show2
        })
    }

    fetchBairros() {
        axios.get('https://cors-anywhere.herokuapp.com/https://gcm-mogi.herokuapp.com/bairros/')
            .then(res => {
                this.setState({
                    bairros: res.data
                });
            }).catch(res => {
                console.log(res);
            });
    }

    mountOptions() {
        return (
            this.state.bairros.map((bairro) => {
                return <option key={bairro.id} value={bairro.id}>{bairro.nome}</option>
            })
        )
    }

    render() {
        const { values, handleChange } = this.props; 
           
        return (
            <div className="container">
                <div className="section">
                    <div className="progress">
                        <div className="determinate blue darken-3" style={{ width: "50%" }}></div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="section">
                    <form className="col s10">
                        <div className="center-align">
                            {this.state.show2 && <button onClick={this.adicionarOcorrencia} className="waves-effect waves-light btn-large grey App"><i className="material-icons left large">add</i>Adicionar Ocorrencia</button>}
                        </div>
                        <br />
                        {this.state.show && <AdicionarOcorrencia adicionarOcorrencia={this.adicionarOcorrencia} values={values} />}
                        <br />
                        <div className="row">
                            <div className="input-field col s8 offset-s2">
                                <input
                                    name='local'
                                    id="local"
                                    type="text"
                                    className="validate"
                                    onChange={handleChange('local')}
                                    value={values.local}
                                />
                                <label htmlFor="local">Local</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s8 offset-s2">
                                <select className="browser-default" value={this.state.bairro} onChange={this.handleList}>
                                    {this.mountOptions()}
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <button onClick={this.back} className="waves-effect waves-light btn red darken-1 col s3 offset-s2" href="/">Voltar</button>
                            <button onClick={this.continue} className="waves-effect waves-light btn green darken-1 col s3 offset-s2" href="/">Proximo</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}