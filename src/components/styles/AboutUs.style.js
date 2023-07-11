import styled from 'styled-components';

export const Background = styled.section`
    width: calc(100% - 140px);
    background-image: linear-gradient(to left, #121212, #171717);
    padding: 100px;
    display: grid;
    grid-template-columns: auto 55%;
    align-items: center;
`

export const TextBackground = styled.div`
    width: fit-content;
    height: fit-content;
`
export const Title = styled.h1`
    font-weight: 500;
    font-size: 4rem;
`
export const DatasGrid = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
`
export const Datas = styled.span`
    gap: 10px;
    
    p{
        font-size: 14px;
    }
`

export const Description = styled.p`
    font-size: 16px;
`