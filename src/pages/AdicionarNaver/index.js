import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './style.css';

export default function AdicionarNaver() {

    const [name, setName] = useState('');
    const [idade, setIdade] = useState('');
    const [pqp, setPqp] = useState('');
    const [cargo, setCargo] = useState('');
    const [tne, setTne] = useState('');
    const [urlfoto, setUrlfoto] = useState('');

    return(
        <div className='adicionarNaver'>
            <header>
                <img src='logo-header.png' alt='nave.rs'/>
                <button>Sair</button>
            </header>
            
            <div>
                <ul>
                    <Link to='/home'>
                        <img src='arrow.png' alt='arrow'/>
                    </Link>
                    <h1>Adicionar Naver</h1> 
                </ul>
                
                <form>
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
                </form>
                
                <button>
                    Salvar
                </button> 
                
            </div>
        </div>
    );
}