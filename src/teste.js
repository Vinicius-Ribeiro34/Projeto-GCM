import React, { Component } from 'react'

export default class Teste extends Component {
    constructor(props) {
        super(props);

        this.state = {
            condicaoDaParte: 'batata'
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ condicaoDaParte: event.target.value });
    }

    handleSubmit(event) {
        alert('Seu sabor favorito é: ' + this.state.condicaoDaParte);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Escolha seu sabor favorito:
              <select value={this.state.condicaoDaParte} onChange={this.handleChange}>
                        <option value="laranja">Laranja</option>
                        <option value="limao">Limão</option>
                        <option value="coco">Coco</option>
                        <option value="manga">Manga</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
                <h1>{this.state.condicaoDaParte}</h1>
            </form>
        );
    }
}