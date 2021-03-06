import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import api from '../../services/api';

import './style.css';
import logoHeader from '../../assets/logo-header.png';
import arrow from '../../assets/arrow.png';

export default function EditarNaver() {

    const history = useHistory();

    const [name, setName] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [project, setProject] = useState('');
    const [job_role, setJob_role] = useState('');
    const [admission_date, setAdmission_date] = useState('');
    const [url, setUrl] = useState('');

    function backIndex(){
        localStorage.removeItem('update_id');
        history.push('/navers');
    }

    function logout(){
        localStorage.clear();
        history.push('/users/login');
    }

    async function handleUpdate(e){
        e.preventDefault();

        const token = 'Bearer ' + localStorage.getItem('token');
        const updateId = localStorage.getItem('update_id');

        const data = {
            job_role,
            admission_date,
            birthdate,
            project,
            name,
            url,
        }

        try {
            await api.put(`/navers/${updateId}`, data,
                {headers: {
                    Authorization: token,
                }});

            localStorage.removeItem('update_id');
            history.push('/navers');

        } catch (err){
            alert('Falha na Atualizacao');
        }
    }

    return(
        <div className='editarNaver'>
            <header>
                <img src={logoHeader} alt='nave.rs'/>
                <button onClick={logout}>Sair</button>
            </header>
            
            <div>
                <section>
                    <button onClick={backIndex}>
                        <img src={arrow} alt='arrow'/>
                    </button>
                    <h1>Editar Naver</h1> 
                </section>
                
                <form onSubmit={handleUpdate}>
                    <div>
                        <p>Nome</p>
                        <input
                            placeholder='Nome'
                            value={name}
                            onChange={e => setName(e.target.value)}
                         />

                        <p>Idade</p>
                        <input
                            placeholder='Idade'
                            value={birthdate}
                            onChange={e => setBirthdate(e.target.value)}
                         />

                        <p>Projetos que participou</p>
                        <input
                            placeholder='Projetos que participou'
                            value={project}
                            onChange={e => setProject(e.target.value)}
                         />

                    </div>

                    <div>

                        <p>Cargo</p>
                        <input 
                            placeholder='Cargo'
                            value={job_role}
                            onChange={e => setJob_role(e.target.value)}
                        />

                        <p>Tempo de empresa</p>
                        <input 
                            placeholder='Tempo de empresa'
                            value={admission_date}
                            onChange={e => setAdmission_date(e.target.value)}
                        />

                        <p>URL da foto do Naver</p>
                        <input
                            placeholder='URL da foto do Naver'
                            value={url}
                            onChange={e => setUrl(e.target.value)}
                        />
                    </div>

                    <div>
                        {/*Organizando grid*/}
                    </div>

                    <button type='submit'>
                        Salvar
                    </button> 
                </form>
                
                
                
            </div>
        </div>
    );
}