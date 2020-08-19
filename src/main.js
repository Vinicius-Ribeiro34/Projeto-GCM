import React, { Component } from "react";
import TelaInicial from "./pages/TelaInicial";
import BuscarOcorrencia from "./pages/BuscarOcorrencia";
import ListarOcorrencias from "./pages/ListarOcorrencias";
import PopUp from "./components/PopUp";
import { addBairros, getBairros } from "./services/bairros";
import { addCodNat, getCodNat } from "./services/codNat";
import { clearOcorrencia, get } from "./services/ocorrencia";
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

      get((ocorrencia) => {
        if (ocorrencia.length === 0) {
          console.log("Sem ocorrências");
        } else {
          this.setState({
            getOcorrencias: ocorrencia,
          });
          this.boletimPost();
        }
      });
    }
  }

  boletimPost() {
    if (this.state.token) {
      this.state.getOcorrencias.map((oc) => {
        return api
          .post("boletins", oc, {
            headers: { Authorization: "Bearer " + this.state.token },
          })
          .then((response) => {
            console.log(response);
            clearOcorrencia();
          })
          .catch((error) => console.log(error.response));
      });
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

    get((ocorrencia) => {
      this.setState({
        getOcorrencias: ocorrencia,
      });
      this.boletimPost();
    });
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

  // render() {
  //   return (
  //     <BrowserRouter>
  //       <Header />
  //       <Routes history={history}>
  //         <Route path="//*" element={<Login />} />
  //         <Route path="/cadastro" element={<Cadastro />} />
  //         <Route path="/home" element={<TelaInicial />} />
  //         <Route
  //           path="/registrar-ocorrencia"
  //           element={
  //             <Registra
  //               prevStep={this.prevStep}
  //               nextStep={this.nextStep}
  //               resetStep={this.resetStep}
  //               step={this.state.step}
  //               online={this.state.online}
  //             />
  //           }
  //         />
  //         <Route path="/buscar-ocorrencia" element={<BuscarOcorrencia />} />
  //         <Route path="/listar-ocorrencia" element={<ListarOcorrencias />} />
  //         <Route path="/indicadores" element={<Indicadores />} />
  //         <Route path="/indicadores-regiao" element={<IndicadoresRegiao />} />
  //         <Route
  //           path="/indicadores-ocorrencia"
  //           element={<IndicadoresOcorrencias />}
  //         />
  //       </Routes>
  //     </BrowserRouter>
  //   );
  // }

  render() {
    if (this.state.online === false) {
      return (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
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
          <Header />
          <Routes>
            {/* <Route path="//*" element={<Login />} isPrivate={false} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/home" element={<TelaInicial />} redirectTo={"/"} /> */}
            <Route path="/login/*" element={<Login />} isPrivate={false} />
            <Route path="/cadastro" element={<Cadastro />} />
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
            <Route
              path="/buscar-ocorrencia"
              element={<BuscarOcorrencia online={this.state.online} />}
            />
            <Route path="/listar-ocorrencia" element={<ListarOcorrencias />} />
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
