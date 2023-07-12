import { useContext } from 'react';
import {
    Title
} from '../styles/BrowsePossibilities.style';
import {
    Background,
    Subtitle,
    InputGrid,
    Input,
    ButtonSend
} from '../styles/Community.style';

import Bull from '../images/TheBeatBull/Bull.png'
import { LanguageContext } from '../../language.context.js';

export default function Community(){

    const { translations } = useContext(LanguageContext);

    return(
        <Background>
            <Title>{translations.Community.Title}</Title>
            <Subtitle>{translations.Community.Subtitle}</Subtitle>

            <InputGrid>
                <Input placeholder={translations.Community.EnterYourEmailHere}/>
                <ButtonSend>Let's Go</ButtonSend>
            </InputGrid>
        </Background>
    )
}