import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: 1;

    justify-content: center;
    align-items: center;
`;

export const Forms = styled.form`
    margin-top: 9.75rem;
    flex-direction: column;

    width: 26rem;
    height: 25.5rem;

    border: 1px solid;
    border-color: #212121;

    img {
    margin-top: 2.5rem;
    margin-left: 6rem;
    }

    p {
    margin-left: 2rem;
    margin-top: 2.5rem;
    margin-bottom: 0.25rem;

    font-weight: 600;
    color: #212121;
    }

    input {
    margin-left: 2rem;
    border-color: #424242;

    width: 22rem;
    height: 2.5rem;
    
    padding-left: 0.5rem;
    font-weight: 400;
    font-size: 1.125rem;
    }

    button{
    width: 22rem;
    height: 2.5rem;
    
    margin-left: 2rem;
    margin-top: 2rem;

    background-color: #212121;
    color: #ffffff;

    font-weight: 600;
    }
`