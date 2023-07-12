import styled from 'styled-components';
import Blur from '../images/Questions/Blur.svg';

export const Background = styled.section`
    width: 100%;
    min-height: 100px;
    display: grid;
    padding: 0px 30px;
    align-items: center;
    justify-items: center;
    background-image: url(${Blur});
    background-size: cover;
`