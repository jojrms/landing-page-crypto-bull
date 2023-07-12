import styled from 'styled-components';
import Blur from '../images/Questions/Blur.svg';

export const Background = styled.section`
    width: 100%;
    min-height: 100px;
    display: grid;
    padding: 100px 30px;
    align-items: center;
    justify-items: center;
    background-image: url(${Blur});
    background-size: cover;
`

export const QuestionGrid = styled.div`
    width: 70%;
    display: grid;
    gap: 10px;
    margin-top: 15px;
`
export const QuestionBackground = styled.span`
    background-color: #181818;
    color: #4B4B4B;
    padding: 25px 50px;
    border-radius: 10px;
    display: flex;
    align-items: center;

    img{
        width: 15px;
        height: 15px;
        padding: 10px;
        cursor: pointer;
        margin-left: auto;
    }
`
export const QuestionAnswer = styled.span`
    border: 1px solid #232323;
    padding: 25px 50px;
    border-radius: 10px;
`