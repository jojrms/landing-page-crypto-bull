import { useContext } from 'react';
import { LanguageContext } from '../../language.context.js';

import {
    Background,
    Title,
    FilterGrid,
    Filter,
    CardGrid
} from '../styles/BrowsePossibilities.style.js';

import Bull1 from '../images/Collections/Bull1.jpg';
import Bull2 from '../images/Collections/Bull2.jpg';
import Bull3 from '../images/Collections/Bull3.jpg';

import User1 from '../images/Collections/username1.png';
import User2 from '../images/Collections/username2.png';
import User3 from '../images/Collections/username3.png';

import NFTCard from './elements/NFTCard.jsx';

export default function BrowsePossibilities(){

    const { translations } = useContext(LanguageContext);

    const FilterList = [
        {name: "All"},
        {name: "Animation"},
        {name: "Rare"},
        {name: "Abstract"},
        {name: "Avatar"},
        {name: "3D"},
        {name: "Music"},
        {name: "Dark and Light"},
    ]

    const CryptoBullList = [
        {id: 5240, price: "0.0037", userPhoto: User1, username: "IP3356", imageUrl: Bull1},
        {id: 2348, price: "0.002", userPhoto: User2, username: "Droid74", imageUrl: Bull2},
        {id: 7443, price: "0.059", userPhoto: User3, username: "MasterPhi", imageUrl: Bull3},
        {id: 2348, price: "0.002", userPhoto: User2, username: "Droid74", imageUrl: Bull2},
        {id: 7443, price: "0.059", userPhoto: User3, username: "MasterPhi", imageUrl: Bull3},
        {id: 5240, price: "0.0037", userPhoto: User1, username: "IP3356", imageUrl: Bull1},
        {id: 5240, price: "0.0037", userPhoto: User1, username: "IP3356", imageUrl: Bull1},
        {id: 5240, price: "0.0037", userPhoto: User1, username: "IP3356", imageUrl: Bull1},
        {id: 5240, price: "0.0037", userPhoto: User1, username: "IP3356", imageUrl: Bull1},
    ]

    return(
        <Background>
            <Title>{translations.Browse.Title}</Title>
            <FilterGrid>
                {FilterList.map( filter => {
                    return <Filter>{filter.name}</Filter>
                })}
            </FilterGrid>

            <CardGrid>
                {CryptoBullList.map( element => {
                    return <NFTCard id={element.id} image={element.imageUrl} price={element.price} userPhoto={element.userPhoto} username={element.username}/>
                })}
            </CardGrid>
        </Background>
    )
}