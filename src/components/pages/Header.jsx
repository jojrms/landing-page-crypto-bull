import { useContext } from 'react';
import {
    HeaderComponent,
    Ul,
    Icon,
    LanguageButton
} from '../styles/Header.style.js';
import { LanguageContext } from '../../language.context.js';

import LanguageIcon from '../images/Header/Language.svg'

export default function Header(){

    const { translations, language, changeLanguage } = useContext(LanguageContext);

    return(
        <HeaderComponent>
            <Icon/>
            <Ul>
                <li>{translations.Header.Discover}</li>
                <li>{translations.Header.AboutUs}</li>
                <li>{translations.Header.Community}</li>
                <li>{translations.Header.Market}</li>
                <li>{translations.Header.Support}</li>
            </Ul>
            <LanguageButton onClick={() => changeLanguage(language === 'en' ? 'pt' : 'en')}>
                <img src={LanguageIcon}/>
                <p>{language === 'en' ? 'eng' : 'pt'}</p>
            </LanguageButton>
        </HeaderComponent>
    )
}