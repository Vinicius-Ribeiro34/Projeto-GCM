import React, { Component } from "react";
import PrimeiroPasso from "../Passos/PrimeiroPasso";
import TerceiroPasso from "../Passos/TerceiroPasso";
import QuartoPasso from "../Passos/QuartoPasso";
import QuintoPasso from "../Passos/QuintoPasso";
import PassoFinal from "../Passos/PassoFinal";
import TelaInicial from "./TelaInicial";
import SegundoPasso from "../Passos/SegundoPasso";
import api from "../services/api";

export default class Registra extends Component {
  initialState = {
    numeroDaOcorrencia: "",
    data: "",
    horaFato: "",
    numTalao: "",
    viatura: "",
    horaDeIrradiacao: "",
    horaLocal: "",
    primeiroTermino: "",
    segundoTermino: "",
    kmDeIrradiacao: "",
    kmLocal: "",
    kmPrimeiroTermino: "",
    kmSegundoTermino: "",
    relatorioDaGCM: "",
    oficial: {
      id: "",
    },
    ocorrencias: [],
    local: "",
    bairro: {
      id: "",
    },
    envolvidos: [],
    veiculos: [],
  };

  constructor(props) {
    super(props);

    this.state = this.initialState;
  }

  async componentDidMount() {
    try {
      const token = window.localStorage.getItem("token");
      const response = await api.get("oficiais/meus-dados", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      this.setState((prev) => ({
        ...prev,
        oficial: {
          ...prev.oficial,
          id: response.data.id,
        },
      }));
    } catch (err) {
      console.log(err.message);
    }
  }

  componentWillUnmount() {
    this.props.resetStep();
  }

  clearState = () => {
    this.setState(this.initialState);
  };

  handleChange = (input) => (e) => {
    if (this.identificadorInt(input)) {
      this.setState({
        [input]: parseInt(e.target.value),
      });
    } else {
      this.setState({
        [input]: e.target.value,
      });
    }
  };

  identificadorInt(value) {
    const campos = [
      "numTalao",
      "viatura",
      "numeroDaOcorrencia",
      "kmIrradiacao",
      "kmLocal",
      "kmPrimeiroTermino",
      "kmSegundoTermino",
    ];

    return !(campos.indexOf(value) === -1);
  }

  render() {
    switch (this.props.step) {
      case 1:
        return (
          <div>
            <p className="titulo"> Passo {this.props.step} de 6:</p>
            <PrimeiroPasso
              prevStep={this.props.prevStep}
              nextStep={this.props.nextStep}
              values={this.state}
              handleChange={this.handleChange}
              resetStep={this.props.resetStep}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <p className="titulo"> Passo {this.props.step} de 6:</p>
            <SegundoPasso
              prevStep={this.props.prevStep}
              nextStep={this.props.nextStep}
              values={this.state}
              handleChange={this.handleChange}
            />
          </div>
        );
      case 3:
        return (
          <div>
            <p className="titulo"> Passo {this.props.step} de 6:</p>
            <TerceiroPasso
              prevStep={this.props.prevStep}
              nextStep={this.props.nextStep}
              values={this.state}
              handleChange={this.handleChange}
            />
          </div>
        );
      case 4:
        return (
          <div>
            <p className="titulo"> Passo {this.props.step} de 6:</p>
            <QuartoPasso
              prevStep={this.props.prevStep}
              nextStep={this.props.nextStep}
              values={this.state}
              handleChange={this.handleChange}
            />
          </div>
        );
      case 5:
        return (
          <div>
            <p className="titulo"> Passo {this.props.step} de 6:</p>
            <QuintoPasso
              prevStep={this.props.prevStep}
              nextStep={this.props.nextStep}
              values={this.state}
              handleChange={this.handleChange}
            />
          </div>
        );
      case 6:
        return (
          <div>
            <p className="titulo"> Passo {this.props.step} de 6:</p>
            <PassoFinal
              prevStep={this.props.prevStep}
              nextStep={this.props.nextStep}
              values={this.state}
              handleChange={this.handleChange}
              online={this.props.online}
              clearState={this.clearState}
              step={this.props.step}
              resetStep={this.props.resetStep}
            />
          </div>
        );
      default:
        return <TelaInicial />;
    }
  }
}
