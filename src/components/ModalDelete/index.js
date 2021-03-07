import React from 'react';
import api from '../../services/api';

import './style.css';

const ModalDelete = ({onClose = () => {}}) => {

    document.body.style.overflow = 'hidden';

    function close() {
        document.body.style.overflow = 'auto';
        localStorage.removeItem('delete_id');
        onClose();  
    }

    function del() {

        const id = localStorage.getItem('delete_id');
        const token = 'Bearer ' + localStorage.getItem('token');
        
        try {api.delete(`/navers/${id}`,{
            headers: {
                Authorization: token,
            }});

            localStorage.removeItem('delete_id');
            document.body.style.overflow = 'auto';
            onClose();

        } catch (err){
                alert('Erro');
            }
    }

    return(
        <section className='modalDelete'>
            <div>
                <h1>Excluir Naver</h1>
                <p>Tem certeza que deseja excluir esse naver?</p>
                <div>
                    <button onClick={close}>
                        Cancelar
                    </button>

                    <button onClick={del}>
                        Excluir
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ModalDelete;