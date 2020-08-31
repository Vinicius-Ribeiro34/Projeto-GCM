import React, { Component, Fragment } from "react";
import EditarGerais from "./EditarGerais";
import EditarIrradiacao from "./EditarIrradiacao";
import EditarOcorrencias from "./EditarOcorrencias";
import EditarEnvolvidos from "./EditarEnvolvidos";
import EditarVeiculos from "./EditarVeiculos";

export default class EditarCompleto extends Component {
  render() {
    const {
      boletim,
      handleOcorrencias,
      handleChange,
      handleBairro,
      handleEnvolvidos,
      handleEndereco,
      handleRg,
      handleVeiculos,
    } = this.props;
    return (
      <Fragment>
        <EditarGerais boletins={boletim.boletins} handleChange={handleChange} />
        <EditarIrradiacao
          boletins={boletim.boletins}
          handleChange={handleChange}
        />
        <EditarOcorrencias
          bairros={boletim.bairros}
          boletim={boletim.boletins}
          ocorrencias={boletim.ocorrencias}
          handleOcorrencias={handleOcorrencias}
          handleBairro={handleBairro}
          handleChange={handleChange}
        />
        <EditarEnvolvidos
          envolvidos={boletim.envolvidos}
          handleEnvolvidos={handleEnvolvidos}
          handleRg={handleRg}
          handleEndereco={handleEndereco}
        />
        <EditarVeiculos
          veiculos={boletim.veiculos}
          handleVeiculos={handleVeiculos}
        />
      </Fragment>
    );
  }
}
