import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import './style.css';
import logoHeader from '../../assets/logo-header.png';
import arrow from '../../assets/arrow.png';
import api from '../../services/api';
import ModalCreate from '../../components/ModalCreate';

export default function AdicionarNaver() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    
    const history = useHistory();

    const [name, setName] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [project, setProject] = useState('');
    const [job_role, setJob_role] = useState('');
    const [admission_date, setAdmission_date] = useState('');
    const [url, setUrl] = useState('');

    function logout(){
        localStorage.clear();
        history.push('/users/login');
    }

    function backIndex(){
        history.push('/navers');
    }

    async function handleCreate(e){
        e.preventDefault();

        const token = 'Bearer ' + localStorage.getItem('token');

        const data = {
            job_role,
            admission_date,
            birthdate,
            project,
            name,
            url,
        }

        try {
            await api.post('/navers', data, {headers: {
                Authorization: token,
            }});

            setIsModalVisible(true);

        } catch (err){
            alert('Falha no Cadastro');
        }
    }

    return(
        <div className='adicionarNaver'>

            <header className='header'>
                <img src={logoHeader} alt='nave.rs'/>
                <button onClick={logout}>Sair</button>
            </header>

            {isModalVisible && <ModalCreate onClose={() => {setIsModalVisible(false)}}/>}
            
            <div>
                <section>
                    <button onClick={backIndex}>
                        <img src={arrow} alt='arrow'/>
                    </button>
                    <h1>Adicionar Naver</h1> 
                </section>
                
                <form onSubmit={handleCreate}>
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