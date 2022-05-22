import React from "react";

import "./Body.css"
import Conversor from "./Conversor";

export default function Body(){
    return (
        <div className="body">

            <div className="formulario">

                <div className="inputs">
                    <div className="input">
                        <p>Nome</p>
                        <input type="text" placeholder="Digite aqui!" />
                    </div>
                    <div className="input">
                        <p>E-mail</p>
                        <input type="text" placeholder="Digite aqui!" />
                    </div>
                </div>

                <hr />

                <div className="buttons">
                    <button className="salvar">Salvar</button>
                    <button className="cancelar">Cancelar</button>
                </div>

                <hr/>

                <Conversor />

            </div>

           
        </div>
    )
}