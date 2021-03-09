import styled from 'styled-components';

export const Modal = styled.section`
    margin-top: 15.25rem;

    width: 37rem;
    height: 13rem;

    background-color: #fff;

    @media(max-height: 600px) {
        margin-top: 14.25rem;
    }

    @media(max-height: 550px) {
        margin-top: 13.25rem;
    }

    h1 {
        padding-top: 2rem;
        margin-left: 2rem;

        font-weight: 600;
        color: #212121;
    }

    p {
        margin-top: 1.5rem;
        margin-left: 2rem;

        font-weight: 400;
        color: #212121;
    }
`;

export const Buttons = styled.div`
    margin-top: 2rem;
    margin-left: 11.5rem;

    button{
        &:first-of-type{
           width: 11rem;
           height: 2.5rem;
           margin-right: 1.5rem;

           font-weight: 600;
           font-size: 0.875rem;

            border: 1px solid #212121;
           background-color: #fff;
            cursor: pointer;
        }

        &:last-of-type{
           width: 11rem;
           height: 2.5rem;
           margin-right: 1.5rem;

           font-weight: 600;
           font-size: 0.875rem;

           border: 1px solid #212121;
           cursor: pointer;
           background-color: #212121;
           color: #fff;
        }

        &:hover{
            opacity: 0.9;
        }
    }
`;