import React, { Component } from 'react';
import M from 'materialize-css';
//import api from '../api.js'

export default class TerceiroPasso extends Component {
    back = e => {
        e.preventDefault()
        this.props.prevStep();
    }

    continue = e => {
        e.preventDefault()
        this.props.nextStep();
    }

    // state = {
    //     sugestoes: []
    // }

    componentDidMount() {
       
        M.AutoInit();

        var options= {
            data: {
                "Aterrado": null,
                "Bairro Boa": null,
                "Cdhu": null,
                "Centro": null,
                "Chácara Ipe": null,
                "Chácara São Marcelo": null,
                "Chácara Sol Nascente": null,
                "Cob Brasil Cerealist": null,
                "Comeca Piteiras": null,
                "Condomínio Morro Vermelho": null,
                "Condomínio Santa Úrsula": null,
                "Conjunto Habitacional Jardim Europa": null,
                "Conjunto Residencial Anselmo Lopes Bueno": null,
                "Distrito Industrial": null,
                "Distrito Industrial II": null,
                "Div Conchal Araras": null,
                "Fazenda B Vista Distrito Indu": null,
                "Ind Mira Martim Fco": null,
                "Jacuba": null,
                "Jardim 31 de Marco": null,
                "Jardim 31 Marco": null,
                "Jardim Alvorada": null,
                "Jardim América": null,
                "Jardim Áurea": null,
                "Jardim Aurora": null,
                "Jardim Bela Vista": null,
                "Jardim Bi-centenario": null,
                "Jardim Brasília": null,
                "Jardim Califórnia": null,
                "Jardim Carlos Gomes": null,
                "Jardim Cintra": null,
                "Jardim Copacabana": null,
                "Jardim Elite": null,
                "Jardim Europa": null,
                "Jardim Flamboyant": null,
                "Jardim Flórida": null,
                "Jardim Getúlio Vargas": null,
                "Jardim Guacu-mirim": null,
                "Jardim Guarnieri": null,
                "Jardim Helena": null,
                "Jardim Itapema": null,
                "Jardim Lago": null,
                "Jardim Linda Chaib": null,
                "Jardim Longatto": null,
                "Jardim Maria Antonieta": null,
                "Jardim Maria Beatriz": null,
                "Jardim Maria Bonati Bordignon": null,
                "Jardim Mogi Mirim II": null,
                "Jardim Murayama": null,
                "Jardim Nazareth": null,
                "Jardim Nossa Senhora Aparecida": null,
                "Jardim Panorama": null,
                "Jardim Patrícia": null,
                "Jardim Paulista": null,
                "Jardim Pissinatti": null,
                "Jardim Planalto": null,
                "Jardim Planalto Mirim": null,
                "Jardim Primavera": null,
                "Jardim Quartieri": null,
                "Jardim Santa Ana": null,
                "Jardim Santa Clara": null,
                "Jardim Santa Cruz": null,
                "Jardim Santa Helena": null,
                "Jardim Santa Júlia": null,
                "Jardim Sbeghen": null,
                "Jardim Scomparim": null,
                "Jardim Silvânia": null,
                "Jardim Tropical": null,
                "Loteamento Dionízio Linares": null,
                "Loteamento Inocoop": null,
                "Loteamento Linda Chaib": null,
                "Loteamento Nossa Senhora Graças": null,
                "Loteamento Nova Mogi": null,
                "Loteamento Santa Ana": null,
                "Loteamento São Jerônimo": null,
                "Martim Francisco": null,
                "Mirante": null,
                "Mirim": null,
                "Mogi Mirim II": null,
                "Mogi-mirim Ii": null,
                "Morro Vermelho": null,
                "Nova Mogi": null,
                "Paraíso Cachoeira": null,
                "Parque da Imprensa": null,
                "Parque das Laranjeiras": null,
                "Parque Empresa": null,
                "Parque Esperança": null,
                "Parque Estado II": null,
                "Parque Imprensa": null,
                "Parque Laranjeiras": null,
                "Parque Novacoop": null,
                "Parque Real": null,
                "Parque Real Ii": null,
                "Parque Residencial Murayama": null,
                "Piteiras": null,
                "Planalto Bela Vista": null,
                "Portal Luíza": null,
                "Prx Escola S Benedit": null,
                "Residencial Bosque": null,
                "Santa Cruz": null,
                "Saúde": null,
                "Sehac": null,
                "Soares": null,
                "Sobradinho": null,
                "Tucura": null,
                "Usina Esmeralda": null,
                "Vila Bianchi": null,
                "Vila Bordignon": null,
                "Vila Dias": null,
                "Vila Eunice": null,
                "Vila Melo": null,
                "Vila Morani": null,
                "Vila Oceania": null,
                "Vila Pichatelli": null,
                "Vila Primavera": null,
                "Vila Rádio": null,
                "Vila Santa Eliza": null,
                "Vila Santa Luzia": null,
                "Vila São João": null,
                "Vila São José": null,
                "Vila Universitária": null,
            },
            minLength:3
        }
        var elems = document.querySelectorAll('#Bairro');
        M.Autocomplete.init(elems, options);
      }

    // async componentDidMount(){
    //     const response = await api.get('');
    //     console.log(response.data);

    //     this.setState({ sugestoes: response.data });
    // }

    render() {
        const { values, handleChange } = this.props;    
        // const { sugestoes }  = this.state;
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
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <input
                                name='naturezaDaOcorrencia'
                                id="natureza"
                                type="text"
                                className="validate"
                                onChange={handleChange('naturezaDaOcorrencia')}
                                value={values.naturezaDaOcorrencia}
                                />
                                <label htmlFor="natureza">Natureza da ocorrência</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <input
                                name='codigoDaOcorrencia'
                                id="codigo"
                                type="text"
                                className="validate"
                                onChange={handleChange('codigoDaOcorrencia')}
                                value={values.codigoDaOcorrencia}
                                />
                                <label htmlFor="codigo">Código</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
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
                            <div className="input-field col s10 offset-s1">
                                <input
                                name='bairro'
                                id="Bairro"
                                type="text"
                                className="validate no-autoinit autocomplete"
                               // onChange={handleChange('bairro')}
                               // value={values.bairro}
                               />
                               {/* {console.log(elems.selectOption(data))} */}
                               
                                {/* {sugestoes.map((bairro, index) =>(
                                         // {bairro.id}
                                         bairro.nome
                                    ))} */}                                    
                                <label htmlFor="Bairro">Bairro</label>
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