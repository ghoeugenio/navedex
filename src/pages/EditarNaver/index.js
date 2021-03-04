import React from 'react';
import {Link} from 'react-router-dom';

import './style.css';

export default function EditarNaver() {
    return(
        <div className='editarNaver'>
            <header>
                <img src='logo.png' alt='Nave'/>
            </header>
            
            <div>
                <ul>
                    <Link to='/home'>
                        <img src='Vector.png' alt='Vector'/>
                    </Link>
                    <h1>Editar Naver</h1> 
                </ul>
                
                <div>
                    <div>
                        <p>Nome</p>
                        <input placeholder='Nome'/>

                        <p>Idade</p>
                        <input placeholder='Idade'/>

                        <p>Projetos que participou</p>
                        <input placeholder='Projetos que participou'/>
                    </div>

                    <div>
                        <p>Cargo</p>
                        <input placeholder='Cargo'/>

                        <p>Tempo na empresa</p>
                        <input placeholder='Tempo na empresa'/>

                        <p>URL da foto do Naver</p>
                        <input placeholder='URL da foto do Naver'/>
                    </div>
                </div>
                

                <div className='button'>
                    <button>
                        Salvar
                    </button>
                </div>
                
                
            </div>
        </div>
    );
}