import styled from 'styled-components';
import icon from '../images/logo.svg';

export const HeaderComponent = styled.header`
    width: calc(100% - 90px);
    margin-left: -30px;
    display: grid;
    gap: 30px;
    padding: 30px 60px 0px 30px;
    grid-template-columns: min-content auto auto;
    align-items: center;
    position: fixed;
    background-image: linear-gradient(to bottom, #121212, #121212d1, transparent);
`

export const Ul = styled.ul`
    padding: 0;
    list-style: none;
    display: flex;
    gap: 45px;
    margin-left: 10%;

    li{
        font-size: 14px;
        cursor: pointer;
    }
`

export const Icon = styled.i`
    width: 40px;
    height: 40px;
    background-image: url(${icon});
`

export const LanguageButton = styled.button`    
    display: flex;
    gap: 10px;
    text-transform: uppercase;
    align-items: center;
    margin-left: auto;
    font-size: 16px;

    img{
        width: 15px;
        height: 15px;
    }
`