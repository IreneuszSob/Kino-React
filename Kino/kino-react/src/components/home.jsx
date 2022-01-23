import React from "react";
import bootstrap from "bootstrap"
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";


const Home = () => {
    return <Container style={{width: '100%',height:'600px'}}>
        <div className="jumbotron jumbotron-fluid" style={{marginTop:100}}>
            <div className="container" style={{marginTop: 250}}>
                <div className="display-4" style={{fontsize:60,color:'white'}}>MovieWEB</div>
                <div className="lead" style={{fontsize:40,color:'white',padding: 50}}>Witamy na MovieWEB.pl  </div>  
                <Link to='/'>
                    <button type="submit" class="btn btn-primary" >Zobacz filmy</button>
                </Link>
            </div>
        </div>
    </Container>
};



export default Home;
