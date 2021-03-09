import styled, { createGlobalStyle } from 'styled-components';
import {css} from 'styled-components';

const Montserrat = css`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
`

export default createGlobalStyle`
    ${Montserrat}
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
}

    &::-webkit-scrollbar{
        display: none;
    }

@media(max-width: 1080px) {
    html {
        font-size: 93.75%;
    }
}

@media(max-width: 720px) {
    html {
        font-size: 85.25%;
    }
}

body {
    background: #ffffff;
}

body,
input,
textarea,
button {
    font: 400 1rem Montserrat, sans-serif;
}
`;

export const ContainerModal = styled.section`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.8);

    justify-content: center;
    align-content: center;
    display: flex;
`;

export const MiniButton = styled.button`
    border: none;
    margin-right: 1rem;
    cursor: pointer;
    background-color: transparent;

    &:first-of-type{
        img {
            height: 1.125rem;
            width: 0.875rem;
        }
    }  

    &:last-of-type{
        img{
            height: 1.15rem;
            width: 1.15rem;
        } 
    }
`;
