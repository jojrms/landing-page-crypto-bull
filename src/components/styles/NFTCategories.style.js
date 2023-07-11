import styled from 'styled-components';

export const Background = styled.section`
    width: calc(100% - 30px);
    min-height: 100px;
    display: grid;
    align-items: center;
    justify-content: center;
    padding: 50px 30px;
    gap: 30px;
`

export const Title = styled.h1`
    font-weight: 500;
    font-size: 2rem;
    text-align: center;
`

export const Input = styled.input`
    width: 45vw;
    height: 40px;
    border: none;
    border-radius: 15px;
    background-color: #fff;
    padding: 5px 15px;
    
    &:placeholder{
        color: #BABABA;
    }
`

export const NFTCategoriesGrid = styled.div`
    width: 100%;
    min-height: 100px;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat( 4, auto);
    justify-items: center;
`
export const NTFCategory = styled.span`
    width: fit-content;
    background-color: #202020;
    padding: 3px 20px 3px 10px;
    border-radius: 30px;
    align-items: center;
    display: grid;
    grid-template-columns: min-content auto;
    gap: 15px;
    justify-items: center;
    font-size: 16px;

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