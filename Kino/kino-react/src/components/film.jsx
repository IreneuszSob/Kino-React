
import React, { Component } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap'


class Film extends Component {

	constructor(props) {
		super(props);
		this.Id = this.props.match.params.id;
		this.film = require('./data.json').Filmy.find((m) => m.id === Number(this.Id));
	}

    render() {
        return (
            <table className="table">
            <thead>
            <tr>
                <th scope="col">Tytuł</th>
                <th scope="col">Plakat</th>
                <th scope="col">Opis</th>
                <th scope="col">Ocena</th>
                
                
                
            </tr>
            </thead>
            <tbody>
            
            
            <td><img style={{width: '150px', height: '250px'}} src={this.film.image} alt="1"/></td>
            <td>{this.film.title}</td>
            <td>{this.film.text}</td>
            <td>{this.film.mark}</td>
                        
            </tbody>
        </table>
                

        )}
}

export default Film;