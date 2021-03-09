import styled from 'styled-components';

export const Modal = styled.div`
    width: 62.875rem;
    height: 31.5rem;

    margin-top: 6.8rem;

    display: grid;
    grid-template-columns: 31.5rem 31.5rem;

    background-color: #fff;

    img {
        width: 31.5rem;
        height: 31.5rem;
    }
`;

export const ModalText = styled.div`
    margin-left: 1.89rem;

    p {
        margin-top: 0.625rem;
        margin-bottom: 1.5rem;
    }

    span {
        
        font-weight: 600;
    }

`;

export const Close = styled.button`
    
    margin-top: 1.3rem;
    margin-left: 27.31rem;

    border:none;
    background-color: transparent;
    cursor: pointer;

    img{
        width: 0.875rem;
        height: 0.875rem;
    }
`;

export const DockerButton = styled.div`
margin-top: 6.875rem;
`;