import React from "react";
import { Link } from "react-router-dom";
import logo from './Logo.png'
import {NavBar, Nav, NavItem} from 'react-bootstrap';

const Navbar = () => {
    return (<nav class="navbar navbar-inverse">
        <div class="border-bottom">
           
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <a href="/"><img src={logo} alt="Logo" /></a>
                
                <li className="nav-item" role="presentation">
                    <Link to="/Filmy" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                          aria-controls="pills-home" aria-selected="true">Films</Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link to="/signin" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                          aria-controls="pills-home" aria-selected="true">Account Login</Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link to="/signup" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                          aria-controls="pills-home" aria-selected="true">Create Account</Link>
                </li>
            </ul>
        </div></nav>
    );
};

export default Navbar;
