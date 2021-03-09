import React, {useState} from 'react';

import NaverProps from '../../pages/NaverProps';
import ModalConfirm from '../ModalConfirm';

import {ContainerModal, MiniButton} from '../../styles/global';
import {Modal, ModalText, Close, DockerButton} from './style';
import closeIcon from '../../assets/close.png';
import deleteIcon from '../../assets/delete.png';
import updateIcon from '../../assets/update.png';

const ModalView = (props) => {

    document.body.style.overflow = 'hidden';

    const [naverPropSettings, setNaverPropsSettings] = useState('');
    const [isShow, setIsShow] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const today = new Date();
    
    console.log(today.getDay);

    function close() {
        document.body.style.overflow = 'scroll';
        props.onCloseView();
    }

    function updateNaver() {
        localStorage.setItem('update_id', props.indexUser[0].id)
        setNaverPropsSettings('false');
        setIsShow(true);
    }

    function deleteNaver() {
        localStorage.setItem('delete_id', props.indexUser[0].id);
        setIsModalVisible(true);
    }

    return(
        <ContainerModal>

            {isShow && <NaverProps 
            onType = {naverPropSettings} onClose = {() => {setIsShow(false)}} />}
            
            {isModalVisible ? <ModalConfirm 
                onCloseConfirm={() => props.onCloseView()}
                onClose={() => {setIsModalVisible(false)}}/> : null}

            <Modal>
                <img src={props.indexUser[0].url} alt='user'/>
                <ModalText>
                    <Close onClick={close}>
                        <img src={closeIcon} alt='close'/>
                    </Close>
                    <h1>{props.indexUser[0].name}</h1>
                    <p>{props.indexUser[0].job_role}</p>
                    <span>Idade</span>
                    <p>{props.indexUser[0].birthdate}</p>
                    <span>Tempo de empresa</span>
                    <p>{props.indexUser[0].admission_date}</p>
                    <span>Projetos que participou</span>
                    <p>{props.indexUser[0].project}</p>
                    <DockerButton>
                        <MiniButton onClick={deleteNaver}>
                            <img src={deleteIcon} alt='delete'/>
                        </MiniButton>
                        <MiniButton onClick={updateNaver}>
                            <img src={updateIcon} alt='update'/>
                        </MiniButton>
                    </DockerButton>
                </ModalText>
            </Modal>   
        </ContainerModal>
    );
}

export default ModalView;
