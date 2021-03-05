import React, {useState, useEffect} from 'react';
import api from '../../services/api';

import './style.css';

export default function Home(){

    const [index, setIndex] = useState([]);

    const token = 'Bearer ' + localStorage.getItem('token');

    api.get('/navers',{
            headers: {
                Authorization: token,
            }
        }).then(response => {
            setIndex(response.data);
    });

    return (
        <div className='home'>

            <header>
                <img src='logo-header.png' alt='nave.rs'/>
                <button>Sair</button>
            </header>

            <div>
                <h1>Navers</h1>
                <button>Adicionar Naver</button>
            </div>

            <ul>
                {index.map(index => (
                    <li key={index.id}>
                        <img src={index.url} alt='user'/>
                        <p>{index.name}</p>
                        <p>{index.job_role}</p>
                        <div>
                            <button>
                                <img src='update.png' alt='update'/>
                            </button>
                            <button>
                                <img src='delete.png' alt='delete'/>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        
    );
}