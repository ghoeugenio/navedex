import React, {useState} from 'react';

import {Modal, Buttons, Title, Message} from './style'
import {ContainerModal} from '../../styles/global';
import closeIcon from '../../assets/close.png';

const ModalAlert = (props) => {

    document.body.style.overflow = 'hidden';

    const modalType = (JSON.parse(props.onType));

    const [title, setTitle] = useState(modalType ? 'Naver criado' : 'Naver atualizado');

    const messageData = ['Naver criado com sucesso!', 'Naver atualizado com sucesso!'];

    const [message, setMessage] = useState(modalType ? messageData[0] : messageData[1]);

    function close() {
        document.body.style.overflow = 'auto';
        props.onCloseProps();
        props.onCloseModal();
    }

    return(
        <ContainerModal>
            <Modal>
                <Buttons onClick={close}>
                    <img src={closeIcon} alt='close'/>
                </Buttons>
                <Title>{title}</Title>
                <Message>{message}</Message>
                
            </Modal>
        </ContainerModal>
    );
}

export default ModalAlert;