import styled from 'styled-components';

export const Card = styled.div`
    width: 190px;
    height: 100%;
    display: grid;
    grid-template-rows: 70% auto;
    gap: 10px;
`

export const Image = styled.span`
    width: 100%;
    height: 100%;
    border-radius: 20px;
    border: none;
    background-size: cover;
    display: grid;

    #spanUsername{
        width: fit-content;
        height: fit-content;
        font-size: 12px;
        background-color: #202020;
        border-radius: 20px;
        padding: 5px 10px 5px 5px;
        margin: 10px;
        display: flex;
        gap: 10px;
        align-items: center;

        div{
            width: 20px;
            height: 20px;
        }
    }
`

export const CryptoInfo = styled.span`
    display: grid;
    gap: 10px;

    h5{
        font-size: 1rem;
        font-weight: 600;
    }

    div{
        display: flex;
        gap: 10px;
        justify-content: space-between;

        h6{
            font-weight: 500;
            font-size: .8rem;
        }
    }
`