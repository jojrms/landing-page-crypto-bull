import { useContext } from 'react';
import {
    Header,
    Ul,
    Icon,
    LanguageButton
} from '../styles/LandingPage.style.js';
import { LanguageContext } from '../../language.context.js';

import LanguageIcon from '../images/Header/Language.svg'

export default function LandingPage(){

    const { translations, language, changeLanguage } = useContext(LanguageContext);

    return(
        <>
            <Header>
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
            </Header>
        </>
    )
}