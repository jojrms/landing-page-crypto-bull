import styled from 'styled-components';
import icon from '../images/logo.svg';

export const Header = styled.header`
    width: 100%;
    display: grid;
    gap: 30px;
    grid-template-columns: min-content auto min-content;
    align-items: center;
    position: fixed;
`

export const Ul = styled.ul`
    padding: 0;
    list-style: none;
    display: flex;
    gap: 45px;

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
    margin-left: auto;

    img{
        width: 15px;
        height: 15px;
    }
`