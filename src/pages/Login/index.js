import React from 'react';

import './style.css';

export default function Login(){
    return(
        <div className="loginContainer">
            <div>
                <img src='logo.png' alt='Nave'/>

                <p>E-mail</p>
                <input placeholder='E-mail'/>

                <p>Senha</p>
                <input placeholder='Senha'/>
                
                <div>
                    <button>Entrar</button>
                </div>

            </div>

        </div>
        
    );
}