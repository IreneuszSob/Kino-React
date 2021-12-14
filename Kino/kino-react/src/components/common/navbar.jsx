import React from "react";
import { Link } from "react-router-dom";
import logo from './Logo.png'

const Navbar = () => {
    return (
        <div>
           
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <img src={logo} alt="Logo" />
                
                <li className="nav-item" role="presentation">
                    <Link to="/Filmy" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                          aria-controls="pills-home" aria-selected="true">Filmy</Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link to="/Filmy" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                          aria-controls="pills-home" aria-selected="true">Zaloguj</Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link to="/Filmy" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                          aria-controls="pills-home" aria-selected="true">Zarejestruj</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
