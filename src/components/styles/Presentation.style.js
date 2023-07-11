import styled from 'styled-components';

import CryptoBullsImage from '../images/Presentation/CryptoBulls.png';
import BallsBlur from '../images/Presentation/Balls.svg';

export const Background = styled.section`
    width: calc(100% + 30px);
    min-height: 650px;
    display: grid;
    grid-template-columns: 45% auto;
    background-image: url(${BallsBlur});
    background-size: cover;
    padding: 0px 30px 0px 0px;
    overflow-y: hidden;
`

export const BullsImageGrid = styled.span`
    background-image: url(${CryptoBullsImage});
    margin-left: -35px;
    background-size: cover;
`
export const GradientBlur = styled.span`
    width: 100%;
    height: 150px;
    background-image: linear-gradient(to bottom, #121212, #121212d1, transparent);
`

export const TextBackground = styled.span`
    width: fit-content;
    heigth: fit-content;
    margin: auto 0 auto auto;

    & *{
        width: fit-content;
        margin-left: auto;
    }
`

export const StartingText = styled.h2`
    background: linear-gradient(to right, #B621FE, #F53803);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    font-size: 16px;
`
export const Title = styled.h1`
    width: 75%;
    font-size: 40px;
    letter-spacing: .5px;
    text-align: end;
    font-weight: 600;
`
export const Subtitle = styled.p`
    font-size: 14px;
    margin-top: 10px;
`

export const SeeMoreButton = styled.button`
    color: #fff;
    border: 1px solid white;
    padding: 10px 15px;
`
export const LetsGoButton = styled(SeeMoreButton)`
    background-color: white;
    color: #121212;
    display: flex;
    gap: 10px;
    align-items: center;

    img{
        width: 20px;
        height: 20px;
    }
`