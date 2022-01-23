import React from "react";
import { Link } from "react-router-dom";
import logo from './Logo.png'
import {NavBar, Nav, NavItem} from 'react-bootstrap';
import { isExpired } from "react-jwt";
import { isWhiteSpaceLike } from "typescript";
const Navbar = () => {
    const loggedIn = !isExpired(localStorage.getItem('token'));


    const handleLogOut = () => {
        //axios({
        //    method: 'post',
        //    url: 'https://pr-movies.herokuapp.com/api/user/logout/:userId',
        //    data: {
        //        userId: id
        //    }
        //}).then((response) => {
        //    console.log(response);
        //}).catch((error) => {
        //    console.log(error);
        //});

        localStorage.removeItem('token')
        window.location.reload(false);
    }

    return (<nav class="navbar " style={styles.conteiner}>
        
            
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                
                <a href="/home"><img src={logo} alt="Logo" style={styles.logo}/></a>
                <li className="nav-item" role="presentation" style={styles.logotext}>
                        <Link to="/home" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                            aria-controls="pills-home" aria-selected="true" style={styles.text}>MovieWEB</Link></li>    
                    
                <li className="nav-item" role="presentation" style={styles.button}>
                    <Link to="/" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                        aria-controls="pills-home" aria-selected="true">Filmy</Link>
                </li>
                { !loggedIn ? <li className="nav-item" role="presentation" style={styles.button}>
                    <Link to="/signin" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                        aria-controls="pills-home" aria-selected="true">Zaloguj</Link>
                </li> : null}
                { !loggedIn ? <li className="nav-item" role="presentation" style={styles.button}>
                    <Link to="/signup" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                        aria-controls="pills-home" aria-selected="true">Utwórz konto</Link>
                </li> : null}
                { !loggedIn ? null : <li className="nav-item" role="presentation" aria-controls="pills-home" aria-selected="true"  onClick={handleLogOut }  style={styles.button} >
                    <Link className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                        aria-controls="pills-home" aria-selected="true">Wyloguj</Link></li>}
                { loggedIn ? <li className="nav-item" role="presentation" style={styles.button}>
                    <Link to="/add" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                        aria-controls="pills-home" aria-selected="true">Dodaj Film</Link>
                </li> : null}
            </ul>
        </nav>
    );
};

var styles = {
    headline: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 40,
        marginTop: 0,
        color: "white",
        padding:"20px",
        //width: 200,
        // backgroundColor: 'yellow',
    },
    text:{
        fontSize: 20,
        color: 'white',
    },
    picture:{
        width: '300px'
    },
    conteiner:{
        backgroundColor: "black",
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12

    },
    button:{
        width: '300px',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',

    },
    logo:{
        width: '50px',
        marginLeft: '100px',
        color: 'blue',
    },
    logotext:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    }
    


}


export default Navbar;
