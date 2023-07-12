import styled from 'styled-components';

export const Background = styled.section`
    width: 100%;
    min-height: 100px;
    display: grid;
    grid-template-columns: 45% auto;
    padding: 100px 30px;
    gap: 30px;
    background-color: #0E0E0E;
    overflow-x: hidden;
`

export const TextBackground = styled.div`
    height: fit-content;
    display: grid;
    grid-template-columns: min-content;
    column-gap: 10px;
    grid-template-areas:
    "news digital"
    "collections collections"
    "data data";
    font-size: 2.3rem;
    line-height: 55px;
    margin: auto;
`

export const NewsText = styled.h1`
    grid-area: news;
    background: linear-gradient(to right, #80FF72, #7EE8FA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    
`
export const DigitalText = styled.h1`
    grid-area: digital;
    background: linear-gradient(to right, #FE5F75, #FC9842);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
`
export const CollectionsText = styled.h1`
    grid-area: collections;
    background: linear-gradient(to right, #B621FE, #8857FC, #1FD1F9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
`
export const DataText = styled.h1`
    grid-area: data;
    background: linear-gradient(to right, #F53803, #F5D020);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
`

export const NFTsImages = styled.div`
    width: initial;
    margin-left: auto;
    margin-right: -30px;
    height: 300px;
    display: grid;
    grid-template-columns: repeat(3,  minmax(200px, 250px));
    gap: 20px;
    overflow-x: scroll;
    padding-right: 20px;

    &::-webkit-scrollbar{
        display: none;
    }
`