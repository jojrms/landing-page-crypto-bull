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

    const { language, changeLanguage } = useContext(LanguageContext);

    return(
        <>
            <Header>
                <Icon/>
                <Ul>
                    <li>Discover</li>
                    <li>About Us</li>
                    <li>Community</li>
                    <li>Market</li>
                    <li>Suport</li>
                </Ul>
                <LanguageButton>
                    <img src={LanguageIcon}/>
                </LanguageButton>
            </Header>
        </>
    )
}