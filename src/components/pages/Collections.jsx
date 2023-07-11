import { useContext } from 'react';
import { LanguageContext } from '../../language.context.js';

import {
    Background,
    TextBackground
} from '../styles/Collections.style.js';

export default function Collections(){

    const { translations, language, changeLanguage } = useContext(LanguageContext);

    return(
        <Background>

        </Background>
    )
}