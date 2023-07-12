import { useContext } from 'react';
import { LanguageContext } from '../../language.context.js';

import {
    Background,
    TextBackground,
    NewsText,
    DigitalText,
    CollectionsText,
    DataText,
    NFTsImages
} from '../styles/Collections.style.js';
import NFTCard from './elements/NFTCard.jsx';

import Bull1 from '../images/Collections/Bull1.jpg';
import Bull2 from '../images/Collections/Bull2.jpg';
import Bull3 from '../images/Collections/Bull3.jpg';

import User1 from '../images/Collections/username1.png';
import User2 from '../images/Collections/username2.png';
import User3 from '../images/Collections/username3.png';

export default function Collections(){

    const { translations, language, changeLanguage } = useContext(LanguageContext);

    const CryptoBullList = [
        {id: 5240, price: "0.0037", userPhoto: User1, username: "IP3356", imageUrl: Bull1},
        {id: 2348, price: "0.002", userPhoto: User2, username: "Droid74", imageUrl: Bull2},
        {id: 7443, price: "0.059", userPhoto: User3, username: "MasterPhi", imageUrl: Bull3},
    ]

    return(
        <Background>
            <TextBackground>
                <NewsText>{translations.Collections.News}</NewsText>
                <DigitalText>{translations.Collections.Digital}</DigitalText>
                <CollectionsText>{translations.Collections.NFTsCollections}</CollectionsText>
                <DataText>{translations.Collections.A2023Sept28}</DataText>
            </TextBackground>

            <NFTsImages>
                {
                    CryptoBullList.map( element => {
                        return <NFTCard id={element.id} image={element.imageUrl} price={element.price} userPhoto={element.userPhoto} username={element.username}/>
                    })
                }
            </NFTsImages>
        </Background>
    )
}