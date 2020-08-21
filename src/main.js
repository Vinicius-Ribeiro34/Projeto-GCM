import React, { Component } from "react";
import TelaInicial from "./pages/TelaInicial";
import BuscarOcorrencia from "./pages/BuscarOcorrencia";
import ListarBoletins from "./pages/ListarBoletins";
import MeusBoletins from "./pages/MeusBoletins";
import PopUp from "./components/PopUp";
import { addBairros, getBairros } from "./services/bairros";
import { addCodNat, getCodNat } from "./services/codNat";
import Indicadores from "./pages/Indicadores";
import IndicadoresRegiao from "./pages/IndicadoresRegiao";
import IndicadoresOcorrencias from "./pages/IndicadoresOcorrencias";
import Header from "./components/Header";
import { BrowserRouter, Routes, Navigate } from "react-router-dom";
import Registra from "./pages/Registra";
import Login from "./login/Login";
import Cadastro from "./login/Cadastro";
import Route from "./routes/Route";
import api from "./services/api";

export default class Main extends Component {
  state = {
    step: 1,

    online: true,
    token: "",
    oficial: {},

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

    if (this.state.online === false) return <Navigate to="/" />;

    this.setState({
      token: window.localStorage.getItem("token"),
    });

    window.addEventListener("online", this.online);
    window.addEventListener("offline", this.offline);

    if (this.state.online === true) {
      getCodNat((cod) => {
        if (cod.length === 0) {
          this.fetchOcorrencias();
        } else {
          console.log("Banco existente");
        }
      });

      getBairros((bairro) => {
        if (bairro.length === 0) {
          this.fetchBairros();
        } else {
          console.log("Banco existente");
        }
      });
    }
  }

  async setOficial() {
    try {
      const token = window.localStorage.getItem("token");
      const response = await api.get("oficiais/meus-dados", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      this.setState({
        oficial: { ...response.data },
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  fetchBairros() {
    api
      .get("bairros", {
        headers: {
          Authorization: "Bearer " + this.state.token,
        },
      })
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
    api
      .get("ocorrencias")
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

    // get((ocorrencia) => {
    //   this.setState({
    //     getOcorrencias: ocorrencia,
    //   });
    //   this.boletimPost();
    // });
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
    if (this.state.online === false) {
      return (
        <BrowserRouter>
          <Routes>
            <Route
              isPrivate={false}
              path="*"
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
          </Routes>
        </BrowserRouter>
      );
    } else {
      return (
        <BrowserRouter>
          <Header oficial={this.state.oficial} />
          <Routes>
            <Route
              path="/login"
              element={<Login online={this.state.online} />}
              isPrivate={false}
              redirectTo={"/registrar-ocorrencia"}
            />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route
              path="/"
              element={<TelaInicial boletimPost={this.boletimPost} />}
            />
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
            <Route
              path="/buscar-ocorrencia"
              element={<BuscarOcorrencia online={this.state.online} />}
            />
            <Route path="/meus-boletins" element={<MeusBoletins />} />
            <Route path="/listar-boletins" element={<ListarBoletins />} />
            <Route path="/indicadores" element={<Indicadores />} />
            <Route path="/indicadores-regiao" element={<IndicadoresRegiao />} />
            <Route
              path="/indicadores-ocorrencia"
              element={<IndicadoresOcorrencias />}
            />
            <Route path="*" element={<h1>404: Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      );
    }
  }
}
