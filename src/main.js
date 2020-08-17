import React, { Component } from "react";
import TelaInicial from "./pages/TelaInicial";
import BuscarOcorrencia from "./pages/BuscarOcorrencia";
import ListarOcorrencias from "./pages/ListarOcorrencias";
import PopUp from "./components/PopUp";
import { addBairros } from "./services/bairros";
import { addCodNat } from "./services/codNat";
import { clearOcorrencia, get } from "./services/ocorrencia";
import axios from "axios";
import Indicadores from "./pages/Indicadores";
import IndicadoresRegiao from "./pages/IndicadoresRegiao";
import IndicadoresOcorrencias from "./pages/IndicadoresOcorrencias";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registra from "./pages/Registra";

export default class Main extends Component {
  state = {
    step: 1,

    online: false,

    bairros: [],
    ocorrenciasOnline: [],
    getOcorrencias: [],
  };

  componentDidMount() {
    if (navigator.onLine) {
      this.setState({
        online: true,
      });
    } else {
      this.setState({
        online: false,
      });
    }

    window.addEventListener("online", this.online);
    window.addEventListener("offline", this.offline);

    this.fetchBairros();
    this.fetchOcorrencias();

    if (this.state.online === true) {
      get((ocorrencia) => {
        this.setState({
          getOcorrencias: ocorrencia,
        });
        this.boletimPost();
      });

      clearOcorrencia();
    }
  }

  boletimPost() {
    this.state.getOcorrencias.map((oc) => {
      return axios
        .post(
          "https://cors-anywhere.herokuapp.com/https://gcm-mogi.herokuapp.com/boletins",
          oc,
          { headers: { "Content-Type": "application/json" } }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error.response));
    });
  }

  fetchBairros() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://gcm-mogi.herokuapp.com/bairros/"
      )
      .then((res) => {
        this.setState({
          bairros: res.data,
        });
        this.mBairros();
      })
      .catch((res) => {
        console.log(res);
      });
  }

  fetchOcorrencias() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://gcm-mogi.herokuapp.com/ocorrencias/"
      )
      .then((res) => {
        this.setState({
          ocorrenciasOnline: res.data,
        });
        this.mOcorrencias();
      })
      .catch((res) => {
        console.log(res);
      });
  }

  mBairros = () => {
    this.state.bairros.map((bairro) => {
      return addBairros(bairro);
    });
  };

  mOcorrencias = () => {
    this.state.ocorrenciasOnline.map((ocorrencia) => {
      return addCodNat(ocorrencia);
    });
  };

  online = () => {
    PopUp.exibeMensagem("success", "Você está online");
    this.setState({
      online: true,
    });

    get((ocorrencia) => {
      this.setState({
        getOcorrencias: ocorrencia,
      });
      this.boletimPost();
    });

    clearOcorrencia();
  };

  offline = () => {
    PopUp.exibeMensagem("error", "Você está offline");
    this.setState({
      online: false,
    });
  };

  nextStep = () => {
    const { step } = this.state;

    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;

    this.setState({
      step: step - 1,
    });
  };

  resetStep = () => {
    this.setState({
      step: 1,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<TelaInicial />} />
          <Route
            path="/registrar-ocorrencia"
            element={
              <Registra
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                resetStep={this.resetStep}
                step={this.state.step}
                online={this.state.online}
              />
            }
          />
          <Route path="/buscar-ocorrencia" element={<BuscarOcorrencia />} />
          <Route path="/listar-ocorrencia" element={<ListarOcorrencias />} />
          <Route path="/indicadores" element={<Indicadores />} />
          <Route path="/indicadores-regiao" element={<IndicadoresRegiao />} />
          <Route
            path="/indicadores-ocorrencia"
            element={<IndicadoresOcorrencias />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
