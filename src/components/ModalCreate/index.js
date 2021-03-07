import React from 'react';
import {useHistory} from 'react-router-dom';

import './style.css';
import close_icon from '../../assets/close.png';

const ModalCreate = ({onClose = () => {}}) => {

    const history = useHistory();

    document.body.style.overflow = 'hidden';

    function close() {
        document.body.style.overflow = 'auto';
        onClose();
        history.push('/navers');  
    }

    return(
        <section className='modalCreate'>
            <div>
                <button onClick={close}>
                    close
                </button>
                <h1>Naver criado</h1>
                <p>Naver criado com sucesso!</p>
                
            </div>
        </section>
    );
}

export default ModalCreate;