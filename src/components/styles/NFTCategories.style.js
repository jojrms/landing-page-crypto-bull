import styled from 'styled-components';

export const Background = styled.section`
    width: 100%;
    margin: auto;
    min-height: 100px;
    display: grid;
    align-items: center;
    justify-items: center;
    padding: 100px 30px;
    gap: 30px;
`

export const Title = styled.h1`
    font-weight: 500;
    font-size: 2rem;
    text-align: center;
`

export const Input = styled.input`
    width: 45vw;
    height: 45px;
    border: none;
    border-radius: 25px;
    background-color: #fff;
    padding: 5px 15px;
    outline: none;
    
    &:placeholder{
        color: #BABABA;
    }
`

export const NFTCategoriesGrid = styled.div`
    width: fit-content;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat( 4, max-content);
    justify-items: center;
`
export const NTFCategory = styled.span`
    width: fit-content;
    background-color: #202020;
    padding: 10px 20px 10px 10px;
    border-radius: 30px;
    align-items: center;
    display: grid;
    grid-template-columns: min-content auto;
    gap: 15px;
    justify-items: center;
    font-size: 15px;
    cursor: pointer;

    span{
        width: 30px;
        height: 30px;
        border-radius: 50px;
        display: grid;
        align-items: center;
        justify-items: center;

        img{
            width: 60%;
        }
    }
`