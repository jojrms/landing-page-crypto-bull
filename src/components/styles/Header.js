import styled from 'styled-components';
import icon from '../images/logo.svg';

export const Header = styled.header`
    width: calc(100% - 90px);
    display: grid;
    gap: 30px;
    grid-template-columns: min-content auto auto;
    align-items: center;
    position: fixed;
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