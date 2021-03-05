import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import api from '../../services/api';

import './style.css';

export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        const data = {
            email,
            password,
        }

        try {
            const response = await api.post('users/login', data);

            localStorage.setItem('token', response.data.token);
            localStorage.setItem('id', response.data.id);

            history.push('/navers');

        } catch (err){
            alert('Falha no login');
        }

    }

    return(
        <div className="loginContainer">
            <form onSubmit={handleLogin}>
                <img src='logo.png' alt='Nave'/>

                <p>E-mail</p>
                <input 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type='email'
                    placeholder='E-mail'
                 />

                <p>Senha</p>
                <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                 placeholder='Senha'
                 />
                
                <button type='submit'>Entrar</button>

            </form>

        </div>
        
    );
}