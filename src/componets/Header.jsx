import React, { useContext } from "react";

import { themes, ThemeContext } from '../context/theme'


import "./Header.css"

export default function Header(){
    const { theme, setTheme } = useContext(ThemeContext)    


    return (
        <div className="header">
            <h2 style={ {
                backgroundColor: theme.colors.background,
                color: theme.colors.text,
            } }
            >Usuários</h2>
            <p>Cadastro de usuários: incluir, Listar, Alterar e Excluir !</p>
        </div>
    )
}