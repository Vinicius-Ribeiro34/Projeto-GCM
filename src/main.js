import React, { Component } from 'react'
import PrimeiroPasso from './Passos/PrimeiroPasso'
import SegundoPasso from './Passos/SegundoPasso'
import TerceiroPasso from './Passos/TerceiroPasso'
import QuartoPasso from './Passos/QuartoPasso'
import QuintoPasso from './Passos/QuintoPasso'
import PassoFinal from './Passos/PassoFinal'
import TelaInicial from './TelaInicial'
import BuscarOcorrencia from './BuscarOcorrencia'
import ListarOcorrencias from './ListarOcorrencias'
import PopUp from './components/PopUp'
import { addBairros } from './services/bairros'
import { addCodNat } from './services/codNat'
import { clearOcorrencia, get } from './services/ocorrencia'
import axios from 'axios'
import Indicadores from './Indicadores'
import IndicadoresRegiao from './IndicadoresRegiao'
import IndicadoresOcorrencias from './IndicadoresOcorrencias'
import Header from './components/Header'

export default class Main extends Component {

    state = {
        step: 7,

        //step - 1
        numeroDaOcorrencia: '',
        data: '',
        horaFato: '',
        numTalao: '',
        viatura: '',

        //step - 2
        horaDeIrradiacao: '',
        horaLocal: '',
        primeiroTermino: '',
        segundoTermino: '',
        kmDeIrradiacao: '',
        kmLocal: '',
        kmPrimeiroTermino: '',
        kmSegundoTermino: '',
        relatorioDaGCM: '',
        oficial: {
            id: 1
        },

        //step - 3
        ocorrencias: [],
        local: '',
        bairro: {
            id: ''
        },

        envolvidos: [],
        veiculos: [],

        online: true,

        bairros: [],
        ocorrenciasOnline: [],
        getOcorrencias: []
    }

    componentDidMount() {
        window.addEventListener('online', this.online)
        window.addEventListener('offline', this.offline)

        this.fetchBairros();
        this.fetchOcorrencias();

        if (this.state.online === true) {
            get(ocorrencia => {
                this.setState({
                    getOcorrencias: ocorrencia
                }); this.boletimPost();
            })

            clearOcorrencia();
        }
    }

    boletimPost() {
        this.state.getOcorrencias.map(oc => {
            return axios.post("https://cors-anywhere.herokuapp.com/https://gcm-mogi.herokuapp.com/boletins", oc,
            { headers: { 'Content-Type': 'application/json' } })
            .then(response => {
                console.log(response)
            }).catch((error) => console.log(error.response));
        })
    }

    fetchBairros() {
        axios.get('https://cors-anywhere.herokuapp.com/https://gcm-mogi.herokuapp.com/bairros/')
            .then(res => {
                this.setState({
                    bairros: res.data
                });
                this.testeBairros()
            }).catch(res => {
                console.log(res);
            });
    }

    fetchOcorrencias() {
        axios.get('https://cors-anywhere.herokuapp.com/https://gcm-mogi.herokuapp.com/ocorrencias/')
            .then(res => {
                this.setState({
                    ocorrenciasOnline: res.data
                });
                this.testeOcorrencias()
            }).catch(res => {
                console.log(res);
            });
    }

    testeBairros = () => {
        this.state.bairros.map(bairro => {
            return addBairros(bairro)
        })
    }

    testeOcorrencias = () => {
        this.state.ocorrenciasOnline.map(ocorrencia => {
            return addCodNat(ocorrencia)
        })
    }

    online = () => {
        PopUp.exibeMensagem('success', 'Você está online');
        this.setState({
            online: true
        })
    }

    offline = () => {
        PopUp.exibeMensagem('error', 'Você está offline');
        this.setState({
            online: false
        })
    }

    handleChange = input => e => {
        if (this.identificadorInt(input)) {
            this.setState({
                [input]: parseInt(e.target.value)
            })
        } else {
            this.setState({
                [input]: e.target.value
            })
        }
    }

    identificadorInt(value) {
        const campos = ['numTalao', 'viatura', 'numeroDaOcorrencia',
            'kmIrradiacao', 'kmLocal', 'kmPrimeiroTermino', 'kmSegundoTermino'];

        return !(campos.indexOf(value) === -1)
    }

    inicio = () => {

        this.setState({
            step: 7
        })
    }

    gerarOcorrencia = () => {

        this.setState({
            step: 1
        })
    }

    buscarOcorrencia = () => {

        this.setState({
            step: 8
        })
    }

    listarOcorrencias = () => {

        this.setState({
            step: 9
        })
    }

    indicadores = () => {
        this.setState({
            step: 10
        })
    }

    indicadoresRegiao = () => {
        this.setState({
            step: 11
        })
    }

    indicadoresOcorrencias = () => {
        this.setState({
            step: 12
        })
    }

    nextStep = () => {
        const { step } = this.state;

        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state;

        this.setState({
            step: step - 1
        })
    }

    showPage = () => {
        const {
            step, numeroDaOcorrencia, data, horaFato, numTalao,
            viatura, horaDeIrradiacao, horaLocal, primeiroTermino,
            segundoTermino, kmDeIrradiacao, kmLocal, kmPrimeiroTermino,
            kmSegundoTermino, ocorrencias, local, bairro, envolvidos, veiculos, oficial, relatorioDaGCM
        } = this.state;

        const values = {
            numeroDaOcorrencia, data, horaFato, numTalao,
            viatura, horaDeIrradiacao, horaLocal, primeiroTermino,
            segundoTermino, kmDeIrradiacao, kmLocal, kmPrimeiroTermino,
            kmSegundoTermino, ocorrencias, local, bairro, envolvidos, veiculos, oficial, relatorioDaGCM
        };

        if (step === 1) {
            return (
                <div>
                    <p className="titulo"> Passo {step} de 6:</p>
                    <PrimeiroPasso
                        handleChange={this.handleChange}
                        nextStep={this.nextStep}
                        values={values}
                    />
                </div>
            )
        }

        if (step === 2) {
            return (
                <div>
                    <p className="titulo"> Passo {step} de 6:</p>
                    <SegundoPasso
                        handleChange={this.handleChange}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                </div>
            )
        }

        if (step === 3) {
            return (
                <div>
                    <p className="titulo"> Passo {step} de 6:</p>
                    <TerceiroPasso
                        handleChange={this.handleChange}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                </div>
            )
        }

        if (step === 4) {
            return (
                <div>
                    <p className="titulo"> Passo {step} de 6:</p>
                    <QuartoPasso
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                </div>
            )
        }

        if (step === 5) {
            return (
                <div>
                    <p className="titulo"> Passo {step} de 6:</p>
                    <QuintoPasso
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                </div>
            )
        }

        if (step === 6) {
            return (
                <div>
                    <p className="titulo"> Passo {step} de 6:</p>
                    <PassoFinal
                        prevStep={this.prevStep}
                        values={values}
                        online={this.state.online}
                        step={this.state.step}
                    />
                </div>
            )
        }

        if (step === 7) {
            return (
                <TelaInicial
                    gerarOcorrencia={this.gerarOcorrencia}
                    buscarOcorrencia={this.buscarOcorrencia}
                    listarOcorrencias={this.listarOcorrencias}
                    indicadores={this.indicadores}
                    values={values}
                />
            )
        }

        if (step === 8) {
            return (
                <BuscarOcorrencia
                    online={this.state.online}
                />
            )
        }

        if (step === 9) {
            return (
                <ListarOcorrencias
                    online={this.state.online}
                />
            )
        }

        if (step === 10) {
            return (
                <Indicadores
                    regiao={this.indicadoresRegiao}
                    ocorrencias={this.indicadoresOcorrencias}
                />
            )
        }

        if (step === 11) {
            return (
                <IndicadoresRegiao />
            )
        }

        if (step === 12) {
            return (
                <IndicadoresOcorrencias />
            )
        }

    }

    render() {
        return (
            <div>
                <Header
                    inicio={this.inicio}
                    gerarOcorrencia={this.gerarOcorrencia}
                    buscarOcorrencia={this.buscarOcorrencia}
                    listarOcorrencias={this.listarOcorrencias}
                    indicadores={this.indicadores}
                />
                {this.showPage()}
            </div>
        )
    }
}
