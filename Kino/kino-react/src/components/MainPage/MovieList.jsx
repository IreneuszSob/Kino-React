import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { paginate } from "../../utils/paginate";
import Item from "./Item";
import SelectPage from "./SelectPage";
const axios = require('axios');



class MovieList extends Component{

    constructor(){
        super();
        this.state = {
            pageSize: 4,
            currentPage: 1
        }
        this.handlePageChange = this.handlePageChange.bind(this);
        this.films = [];
        this.posts = [];
    }

    handlePageChange(page){
        this.setState({currentPage: page});
        this.forceUpdate();
        console.log("Aktualna strona:" + this.state.currentPage)
    };

    async componentDidMount() {
        await axios.get('https://pr-movies.herokuapp.com/api/movies')
            .then(res => {
                const film = res.data;
                this.films = film ;
            });
        this.setState(this.films);
    }

    render(){
        if (!this.films.length) return <p>Brak filmów do wyświetlenia</p>;
        this.posts = [];
        this.posts = paginate(this.films, this.state.currentPage, this.state.pageSize)
        return(
            <div>
                <div style={styles.title}>Lista Filmów</div> 
                {this.posts.map((item, i) => {
                                return (
                                    <div key={i} style={styles.items}><Item id = {item.id} title={item.title} desc={item.content} pic = {item.image} ></Item></div>
                                );
                            })}
                <div style={styles.centrum}>
                    <SelectPage itemsCount={this.films.length} pageSize={this.state.pageSize} currentPage={this.state.currentPage} onPageChange={this.handlePageChange}/>
                </div>
            </div>
        )
    }
}

var styles={
    items:{
        padding: 20,
    },
    title:{
        backgroundColor: "black",
        padding: "10px",
        borderRadius: 10,
        borderWidth: 5,
        textAlign: 'center',
        fontSize: 50,
        color: 'white',
        margin: 10,
    },
    centrum:{
        textAlign: 'center',
    }
}
export default MovieList;