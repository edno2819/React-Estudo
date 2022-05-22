import React from "react";

import "./Navbar.css"
import Clock from "./Clock";
import ButtonTheme from "./ButtonTheme";
import ButtonThemeContext from './ButtonThemeContext'



export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="headerNav">
                <img src="http://files.cod3r.com.br/curso-web/logo.png" alt="Logo" className="logo" />
                <Clock />
                <ButtonTheme />
                <ButtonThemeContext />
            </div>
            <hr />
            <ul>
                <li><a>Início</a></li>
                <li><a>Usuários</a></li>
            </ul>
        </nav>
    )
}