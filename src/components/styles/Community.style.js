import styled from 'styled-components';
import BackgroundImage from '../images/Community/Background.svg';

export const Background = styled.section`
    width: 100%;
    min-height: 100px;
    display: grid;
    padding: 100px 30px;
    background-image: url(${BackgroundImage});
    background-size: cover;
    align-items: center;
    justify-items: center;
`

export const Subtitle = styled.p`
    width: fit-content;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.48);
`

export const InputGrid = styled.div`
    width: 50%;
    display: grid;
    grid-template-columns: 80% auto;
    overflow: hidden;
    border-radius: 30px;
    background-color: #282828;
    margin-top: 30px;
`
export const Input = styled.input`
    width: 100%;
    height: 100%;
    background-color: transparent;
    outline: none;
    border: none;
    color: white;
    padding: 0px 20px;

    &:placeholder{
        color: rgba(255, 255, 255, 0.22);
    }
`
export const ButtonSend = styled.button`
    background-color: #37E47C;
    padding: 13px 25px;
`