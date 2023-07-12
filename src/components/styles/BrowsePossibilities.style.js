import styled from 'styled-components';

export const Background = styled.section`
    width: fit-content;
    min-height: 100px;
    display: grid;
    padding: 100px 30px;
    gap: 30px;
    margin: auto;
    justify-items: center;
`

export const Title = styled.h1`
    font-weight: 500;
    font-size: 2rem;
    text-align: center;
`

export const FilterGrid = styled.div`
    width: fit-content;
    display: grid;
    grid-template-columns: repeat(8, auto);
    gap: 10px;
`
export const Filter = styled.button`
    width: fit-content;
    padding: 5px 15px;
    border-radius: 20px;
    background-color: #252525;
    cursor: pointer;
    font-size: 16px;
    border: 1px solid transparent;

    &:hover{
        border-color: #fff;
    }
`

export const CardGrid = styled.div`
    width: 95%;
    height: 300px;
    display: -webkit-box;
    white-space: nowrap;
    overflow-y: hidden;
    overflow-x: scroll;
    gap: 25px;
    padding-bottom: 10px;

    &::-webkit-scrollbar{
        display: none;
    }
`