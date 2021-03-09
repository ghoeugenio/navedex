import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    
`;

export const Headers = styled.header`
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    height: 5.3rem;

    button {
        margin-top: 1.875rem;
        padding-bottom: 2rem;
        margin-right: 2rem;

        font-weight: 600;
        color: #000;

        background-color: transparent;
        border: none;
        cursor:pointer;
        overflow: hidden;
        outline:none;
        }

    img {
        max-width: 100%;
        margin-top: 1.5rem;
        margin-left: 2rem;
        max-width: 9rem;
        max-height: 2.3rem;
        width: auto;
        height: auto;
    }
`;

export const Title = styled.div`
    display: flex;
    justify-content: space-between;

    margin-top: 2.5rem;
    margin-bottom: 1.25rem;

    h1 {
        margin-left: 2rem;
        
        font-weight: 600;
        font-size: 2.5rem;
        color: #212121;
    }

    button {
        width: 11rem;
        height: 2.5rem;
        margin-right: 2rem;

        background-color: #212121;
        transition: all 0.2s;
        cursor: pointer;

        font-weight: 600;
        font-size: 0.875rem;
        color: #fff;

        &:hover{
            opacity: 0.9;
        }
    }
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    list-style-type: none;

    @media(max-width: 1230px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media(max-width: 890px) {
        grid-template-columns: repeat(2, 1fr);
    }

    li {
        width: 17.5rem;
        height: 23.5rem;

        margin-left: 2rem;
        margin-bottom: 2rem;
    }

    p {
        &:first-of-type{
            font-weight: 600;
            margin-top: 1rem;
            margin-bottom: 0.25rem;
        }

        &:last-of-type{
            font-weight: 400;
            margin-bottom: 0.5rem;
        }
    }
`;

export const View = styled.button`
        width: 17rem;
        height: 17rem;

        margin-top: 0.75rem;

        background-color: transparent;
        border: none;
        cursor:pointer;
        overflow: hidden;
        outline:none;

        img {
            width: 17rem;
            height: 17rem;
        }
`;
