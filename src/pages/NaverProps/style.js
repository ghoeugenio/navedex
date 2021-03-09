import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex: 1;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: #fff;

    align-items: center;
    flex-direction: column;
`;

export const Headers = styled.header`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    height: 5.3rem;

    img{
        max-width: 100%;
        margin-left: 2rem;
        max-width:9rem;
        max-height:2.3rem;
        width: auto;
        height: auto;
    }

    button {
        margin-top: 2rem;
        padding-bottom: 2rem;
        position: fixed;
        right: 0;
        margin-right: 2rem;

        font-weight: 600;
        color: #000;

        background-color: transparent;
        border: none;
        cursor:pointer;
        overflow: hidden;
        outline:none;
    }
`;

export const Body = styled.div`
    width: 37.5rem;
    height: 24rem;
    margin-top: 2.3rem;
`;

export const Section = styled.div`
    display: flex;
    align-items: center;

    button{
        border: none;
        cursor: pointer;
        background-color: transparent;
    }

    h1{
        margin-left: 1.4rem;
        margin-bottom: 0.1rem;

        font-size: 1.5rem;
        color: #212121;
    }
`;

export const Forms = styled.form`
    display: grid;
    grid-template-rows: 19rem 3rem;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
`;

export const Columns = styled.div`
    height: 21rem;

    p{
        margin-top: 2rem;
        margin-bottom: 0.25rem;
        
        font-weight: 600;
        color: #212121;
    }

    input{
        width: 17.5rem;
        height: 2.5rem;

        padding-left: 0.5rem;
        font-weight: 400;
        font-size: 1.125rem;

        border-color: #424242;
        border-style: solid;
        border-width: 1px;
    }
`;

export const Buttons = styled.button`
    width: 11rem;
    height: 2.5rem;

    margin-left: 6.5rem;
    margin-top: 1rem;
        
    background-color: #212121;
    color: #fff;
    font-weight: 600;
    cursor:pointer;
`;