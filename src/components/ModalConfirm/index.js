import React from 'react';
import api from '../../services/api';

import {Modal, Buttons} from './style';
import {ContainerModal} from '../../styles/global';

const ModalConfirm = (props) => {

    document.body.style.overflow = 'hidden';

    function close() {
        document.body.style.overflow = 'auto';
        localStorage.removeItem('delete_id');
        props.onClose();  
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
            props.onCloseConfirm();
            props.onClose();

        } catch (err){
                alert('Erro');
            }
    }

    return(
        <ContainerModal>
            <Modal>
                <h1>Excluir Naver</h1>
                <p>Tem certeza que deseja excluir esse naver?</p>
                <Buttons>
                    <button onClick={close}>
                        Cancelar
                    </button>

                    <button onClick={del}>
                        Excluir
                    </button>
                </Buttons>
            </Modal>
        </ContainerModal>
    );
}

export default ModalConfirm;