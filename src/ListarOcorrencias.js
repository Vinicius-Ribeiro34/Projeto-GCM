import React, { Component } from 'react';


export default class ListarOcorrencia extends Component {

    testeGet = () =>{
        const validacao = this.props.validacao;
        if(validacao === true){
            console.log('online');
        } else {
            console.log('offline');
        }
        
    }

    render() {
        return(
            <button onClick={this.testeGet}>AAAA</button>
        );
    }

}