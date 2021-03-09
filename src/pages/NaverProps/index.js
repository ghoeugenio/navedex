import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import {Container, Headers, Body, Section, Forms, Columns, Buttons} from './style';
import logoHeader from '../../assets/logo-header.png';
import arrow from '../../assets/arrow.png';
import api from '../../services/api';

import ModalAlert from '../../components/ModalAlert';

const NaverProps = (props) => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const history = useHistory();

    const [name, setName] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [project, setProject] = useState('');
    const [job_role, setJob_role] = useState('');
    const [admission_date, setAdmission_date] = useState('');
    const [url, setUrl] = useState('');

    const propsType = (JSON.parse(props.onType));

    const [title, setTitle] = useState(propsType ? 'Adicionar Naver' : 'Editar Naver');
    
    function logout(){
        localStorage.clear();
        history.push('/');
    }

    function backIndex(){
        props.onClose();
    }

    async function handleSubmit(e){

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

        if(propsType){       

            try {
                await api.post('/navers', data, 
                    {headers: {
                        Authorization: token,
                        }
                    }
                );
                setIsModalVisible(true);
                localStorage.setItem('array_size', localStorage.getItem('array_size') + 1);

            } catch (err){
                alert('Falha no Cadastro');
            }
        } else {

            const updateId = localStorage.getItem('update_id');
    
            try {
                await api.put(`/navers/${updateId}`, data,
                    {headers: {
                        Authorization: token,
                        }
                    }
                );
                localStorage.removeItem('update_id');
                setIsModalVisible(true);
    
            } catch (err){
                alert('Falha na Atualizacao');
            }
        }
    }

    return(
        <Container>

            <Headers>
                <img src={logoHeader} alt='nave.rs'/>
                <button onClick={logout}>Sair</button>
            </Headers>

            {isModalVisible ? <ModalAlert 
            onType = {props.onType}
            onCloseProps = {() => {props.onClose()}}
            onCloseModal={() => {setIsModalVisible(false)}}
            /> : null}
            
            <Body>
                <Section>
                    <button onClick={backIndex}>
                        <img src={arrow} alt='arrow'/>
                    </button>
                    <h1>{title}</h1> 
                </Section>
                
                <Forms onSubmit={handleSubmit}>
                    <Columns>
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

                    </Columns>

                    <Columns>

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
                    </Columns>

                    <div>
                        {/*Organizando grid*/}
                    </div>

                    <Buttons type='submit'>
                        Salvar
                    </Buttons> 
                </Forms>
                 
            </Body>
        </Container>
    );
}

export default NaverProps;