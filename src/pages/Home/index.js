import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import api from '../../services/api';
import ModalConfirm from '../../components/ModalConfirm';
import ModalView from '../../components/ModalView';
import NaverProps from '../NaverProps';

import {MiniButton} from '../../styles/global';
import {Container, Headers, Title, List, View} from './styles';
import logoHeader from '../../assets/logo-header.png';
import updateIcon from '../../assets/update.png';
import deleteIcon from '../../assets/delete.png';

export default function Home(){

    const [naverPropSettings, setNaverPropsSettings] = useState('');
    const [isShow, setIsShow] = useState(false);

    const [users, setusers] = useState([]);
    const history = useHistory();
    const [viewUser, setViewUser] = useState([]);

    const [isViewVisible, setIsViewVisible] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const token = 'Bearer ' + localStorage.getItem('token');

    api.get('/navers',{
        headers: {
            Authorization: token,
        }
    }).then(response => {
        setusers(response.data);
    })

    function logout(){
        localStorage.clear();
        history.push('/');
    }

    function createNaver(){
        setNaverPropsSettings('true');
        setIsShow(true);
    }

    function viewNaver(id) {
        const newArray = users.filter((users) => id === users.id);
        setViewUser(newArray);
        setIsViewVisible(true);
    }

    function updateNaver(id){  
        localStorage.setItem('update_id', id)
        setNaverPropsSettings('false');
        setIsShow(true);
    }

    function deleteNaver(id){
        localStorage.setItem('delete_id', id);
        setIsModalVisible(true);
    }

    return (
        <Container>

            <Headers>
                <img src={logoHeader} alt='nave.rs'/>
                <button className='logoutbutton' onClick={logout}>Sair</button>
            </Headers>

            <Title>
                <h1>Navers</h1>
                <button onClick={createNaver}>Adicionar Naver</button>
            </Title>

            {isShow && <NaverProps 
            onType = {naverPropSettings} onClose = {() => {setIsShow(false)}} />}

            
            {isModalVisible ? <ModalConfirm onClose={() => {setIsModalVisible(false)}}/> : null}
            
            {isViewVisible ? <ModalView
            indexUser = {viewUser} onCloseView = {() => {setIsViewVisible(false)}} /> 
            : null}

            <List>
                {users.map((users) => (
                    <li key={users.id}>
                        <View onClick={() => {viewNaver(users.id)}}>
                            <img src={users.url} alt='user'/>
                        </View>
                        <p>{users.name}</p>
                        <p>{users.job_role}</p>
                        <div>
                            <MiniButton onClick={() => {deleteNaver(users.id)}}>
                                <img src={deleteIcon} alt='delete'/>
                            </MiniButton>
                            <MiniButton onClick={() => {updateNaver(users.id)}}>
                                <img src={updateIcon} alt='update'/>
                            </MiniButton>
                        </div>
                    </li>
                ))}
            </List>
        </Container>
        
    );
}