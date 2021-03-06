import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import api from '../../services/api';

import './style.css';
import logoHeader from '../../assets/logo-header.png';
import updateIcon from '../../assets/update.png';
import deleteIcon from '../../assets/delete.png';

export default function Home(){

    const [index, setIndex] = useState([]);
    const history = useHistory();

    const token = 'Bearer ' + localStorage.getItem('token');

    useEffect(() => {
        api.get('/navers',{
            headers: {
                Authorization: token,
            }
        }).then(response => {
            setIndex(response.data);
        })
    },[token]);

    function logout(){
        localStorage.clear();
        history.push('/users/login');
    }

    function createNaver(){
        history.push('/navers/create');
    }

    function updateNaver(id){
        localStorage.setItem('update_id', id)
        history.push('/navers/update');
    }

    function deleteNaver(id){
        api.delete(`/navers/${id}`,{
            headers: {
                Authorization: token,
            }});
    }

    return (
        <div className='home'>

            <header>
                <img src={logoHeader} alt='nave.rs'/>
                <button onClick={logout}>Sair</button>
            </header>

            <div>
                <h1>Navers</h1>
                <button onClick={createNaver}>Adicionar Naver</button>
            </div>

            <ul>
                {index.map(index => (
                    <li key={index.id}>
                        <img src={index.url} alt='user'/>
                        <p>{index.name}</p>
                        <p>{index.job_role}</p>
                        <div>
                            <button onClick={() => {updateNaver(index.id)}}>
                                <img src={updateIcon} alt='update'/>
                            </button>
                            <button onClick={() => {deleteNaver(index.id)}}>
                                <img src={deleteIcon} alt='delete'/>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        
    );
}