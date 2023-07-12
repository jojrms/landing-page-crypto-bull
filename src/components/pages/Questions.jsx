import { useContext } from 'react';
import {
    Background
} from '../styles/Questions.style';

import {
    Title
} from '../styles/Presentation.style';
import { LanguageContext } from '../../language.context.js';

export default function Questions(){

    const { translations } = useContext(LanguageContext);

    return(
        <Background>
            <Title>{translations.Questions.Title}</Title>
        </Background>
    )
}