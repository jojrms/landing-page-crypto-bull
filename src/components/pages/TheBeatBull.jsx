import { useContext } from 'react';
import {
    Title,
} from '../styles/BrowsePossibilities.style';
import {
    Background,
    TextBackground,
    ImageDiv,
    CalendarGrid,
    CalendarBackground,
    CalendarData
} from '../styles/TheBeatBull.style';

import Bull from '../images/TheBeatBull/Bull.png'
import { LanguageContext } from '../../language.context.js';

export default function TheBeatBull(){

    const { translations } = useContext(LanguageContext);

    return(
        <Background>
            <TextBackground>
                <h1>The Beat Bull</h1>
                <p>Vitae placerat urna, pellentesque est at amet sit sed integer commodo amet risus aliquet placerat eu amet, sit tortor dictum in leo lectus mauris sagittis ultrices </p>

                <p style={{color: "rgba(255, 255, 255, 0.26)", marginTop: "30px"}}>REVELATION IN</p>

                <CalendarGrid>
                    <CalendarBackground>
                        <p>24</p>
                        <CalendarData>{translations.TheBeatBull.Days}</CalendarData>
                    </CalendarBackground>
                    :
                    <CalendarBackground>
                        <p>24</p>
                        <CalendarData>{translations.TheBeatBull.Hours}</CalendarData>
                    </CalendarBackground>
                    :
                    <CalendarBackground>
                        <p>24</p>
                        <CalendarData>{translations.TheBeatBull.Min}</CalendarData>
                    </CalendarBackground>
                    :
                    <CalendarBackground>
                        <p>24</p>
                        <CalendarData>{translations.TheBeatBull.Sec}</CalendarData>
                    </CalendarBackground>
                </CalendarGrid>
            </TextBackground>
            <ImageDiv>
                <img width={'550px'} height={'500px'} src={Bull}/>
            </ImageDiv>
        </Background>
    )
}