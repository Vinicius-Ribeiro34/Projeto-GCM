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
            horaIrradiacao: '',
            horaLocal: '',
            primeiroTermino: '',
            segundoTermino: '',
            kmIrradiacao: '',
            kmLocal: '',
            kmPrimeiroTermino: '',
            kmSegundoTermino: '',
    
            //step - 3
            naturezaDaOcorrencia: '',
            codigoDaOcorrencia: '',
            local: '',
            bairro: '',
            nome: '',

            envolvidos: [],
            veiculos: [],
        }

    handleChange = input => e =>{
        this.setState({
            [input]: e.target.value
        })
    }

    gerarOcorrencia = () => {

        this.setState({
            step : 1
        })
    }

    buscarOcorrencia = () => {

        this.setState({
            step : 8
        })
    }

    listarOcorrencias = () => {

        this.setState({
            step : 9
        })
    }

    nextStep = () => {
        const {step} = this.state;

        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const {step} = this.state;

        this.setState({
            step: step - 1
        })
    }

    showStep = () => {
        const {
            step, numeroDaOcorrencia, data, horaFato, numTalao, 
            viatura, horaIrradiacao, horaLocal, primeiroTermino,
            segundoTermino, kmIrradiacao, kmLocal, kmPrimeiroTermino,
            kmSegundoTermino, naturezaDaOcorrencia, codigoDaOcorrencia,
            local, bairro, envolvidos, veiculos
            } = this.state; 

        const values = { numeroDaOcorrencia, data, horaFato, numTalao, 
            viatura, horaIrradiacao, horaLocal, primeiroTermino,
            segundoTermino, kmIrradiacao, kmLocal, kmPrimeiroTermino,
            kmSegundoTermino, naturezaDaOcorrencia, codigoDaOcorrencia,
            local, bairro, envolvidos, veiculos};

        if(step === 1) {
            return(
                <div>
                <p className="titulo"> Passo {step} de 6:</p>
                <PrimeiroPasso
                    handleChange = {this.handleChange}
                    nextStep = {this.nextStep}
                    values = {values}
                />
                </div>
            )
        }

        if(step === 2) {
            return(
                <div>
                <p className="titulo"> Passo {step} de 6:</p>
                <SegundoPasso
                    handleChange = {this.handleChange}
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    values = {values}
                />
                </div>
            )
        }

        if(step === 3) {
            return(
                <div>
                <p className="titulo"> Passo {step} de 6:</p>
                <TerceiroPasso 
                    handleChange = {this.handleChange}
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    values = {values}
                />
                </div>
            )
        }

        if(step === 4) {
            return(
                <div>
                <p className="titulo"> Passo {step} de 6:</p>
                <QuartoPasso 
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    handleChange = {this.handleChange}
                    values = {values}
                />
                </div>
            )
        }

        if(step === 5) {
            return(
                <div>
                <p className="titulo"> Passo {step} de 6:</p>
                <QuintoPasso 
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    handleChange = {this.handleChange}
                    values = {values}
                />
                </div>
            )
        }

        if(step === 6) {
            return(
                <div>
                <p className="titulo"> Passo {step} de 6:</p>
                <PassoFinal 
                    prevStep = {this.prevStep}
                    values = {values}
                />
                </div>
            )
        }

        if(step === 7) {
            return (
                <TelaInicial 
                gerarOcorrencia = {this.gerarOcorrencia}
                buscarOcorrencia = {this.buscarOcorrencia}
                listarOcorrencias = {this.listarOcorrencias}
                values = {values}
                 />
            )
        }

        if(step === 8) {
            return(
                <BuscarOcorrencia />
            )
        }

        if(step === 9) {
            return(
                <ListarOcorrencias />
            )
        }

    }

    render(){

        return(
            <div>
                {this.showStep()}
            </div>   
        )
    }
}
