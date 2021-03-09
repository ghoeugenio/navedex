import styled from 'styled-components';

export const Modal = styled.div`
    margin-top: 15.25rem;

    display: grid;
    grid-template-rows: 2rem 4rem 4rem;

    width: 37rem;
    height: 10rem;
    justify-content: space-between;

    background-color: #fff;

    @media(max-height: 600px) {
        margin-top: 14.25rem;
    }

    @media(max-height: 550px) {
        margin-top: 13.25rem;
    }
`;

export const Buttons = styled.button`
    position: relative;
    margin-top: 1rem;
    margin-left: 35rem;
    border: none;
    background-color: transparent;
    cursor:pointer;
    overflow: hidden;
    outline:none;
    
    &:hover{
        opacity: 0.9;
    }
`;

export const Title = styled.h1`
    margin-left: 2rem;
    font-weight: 600;
    color: #212121;
`;

export const Message = styled.p`
    margin-left: 2rem;

    font-weight: 400;
    color: #212121;
`;