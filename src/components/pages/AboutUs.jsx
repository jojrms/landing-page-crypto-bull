import { useContext } from 'react';
import {
    Background
} from '../styles/AboutUs.style';
import { LanguageContext } from '../../language.context.js';

export default function AboutUs(){

    const { translations, language, changeLanguage } = useContext(LanguageContext);

    return(
        <Background>
            
        </Background>
    )
}