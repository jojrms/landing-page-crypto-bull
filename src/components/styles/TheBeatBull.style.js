import styled from 'styled-components';

export const Background = styled.section`
    width: 100%;
    min-height: 100px;
    display: grid;
    grid-template-columns: auto 40%;
    padding: 0px 30px;
    margin-top: 50px;
    background-color: #171717;
    align-items: center;
    overflow-x: clip;
    gap: 50px;
`

export const TextBackground = styled.div`
    display: grid;

    h1{
        width: fit-content;
        font-size: 3rem;
        background: linear-gradient(to right, #F35917, #F1C712);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    p{
        font-size: 15px;
    }
`

export const ImageDiv = styled.div`
    width: 100%;
    height: 100%;
    align-items: center;
    display: grid;
    justify-items: center;

    img{
        margin-top: -80px;
    }
`

export const CalendarGrid = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    font-size: 2rem;
    font-weight: 700;
`
export const CalendarBackground = styled.span`
    background-color: #262626;
    display: grid;
    align-items: center;
    justify-items: center;
    border-radius: 15px;
    overflow: hidden;
    margin-top: 15px;

    p{
        padding: 8px 26px;
        font-size: 4rem;
        font-weight: 700;
    }
`
export const CalendarData = styled.span`
    width: 100%;
    font-size: 1rem;
    background-color: #131313;
    color: #363636;
    padding: 10px 20px;
    font-weight: 600;
    align-items: center;
    text-align: center;
`