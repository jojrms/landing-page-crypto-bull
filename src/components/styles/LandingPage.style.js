import styled from 'styled-components';
import icon from '../images/logo.svg';

export const Header = styled.header`
    width: 100%;
    height: 100px;
    display: grid;
    background-color: red;
`

export const Icon = styled.i`
    width: 50px;
    height: 50px;
    background-image: url(${icon});
`