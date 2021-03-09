import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import api from '../../services/api';

import {Container, Forms} from './styles';
import logo from '../../assets/logo.png';

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
        <Container>
            <Forms onSubmit={handleLogin}>
                <img src={logo} alt='nave'/>

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
                type='password'
                placeholder='Senha'
                />
                
                <button type='submit'>Entrar</button>

            </Forms>

        </Container>
        
    );
}