import { useContext } from 'react';
import { LanguageContext } from '../../language.context.js';

import {
    Background,
    Title,
    Input,
    NFTCategoriesGrid,
    NTFCategory
} from '../styles/NFTCategories.style.js'

import All from '../images/NFTCategories/All.svg';
import Games from '../images/NFTCategories/Games.svg';
import Art from '../images/NFTCategories/Art.svg';
import Collectibles from '../images/NFTCategories/Collectibles.svg';
import Music from '../images/NFTCategories/Music.svg';
import Photography from '../images/NFTCategories/Photography.svg';
import Domain from '../images/NFTCategories/Domain.svg';
import Rare from '../images/NFTCategories/Rare.svg';

export default function NFTCategories(){

    const { translations, language, changeLanguage } = useContext(LanguageContext);

    const NFTCategory = [
        {name: "All NFT", spanColor: "#B621FE", imageUrl: All},
        {name: "Games", spanColor: "#0BADD1", imageUrl: Games},
        {name: "Art", spanColor: "#F1C712", imageUrl: Art},
        {name: "Collectibles", spanColor: "#55D847", imageUrl: Collectibles},
        {name: "Music", spanColor: "#FE5F75", imageUrl: Music},
        {name: "Photography", spanColor: "#FC9842", imageUrl: Photography},
        {name: "Domain Names", spanColor: "#80DEEE", imageUrl: Domain},
        {name: "Rare NFTs", spanColor: "#F35917", imageUrl: Rare},
    ]

    return(
        <Background>
            <Title>{translations.NFTCategories.Title}</Title>
            <Input type='search' placeholder={translations.NFTCategories.InputPlaceholder}/>
            <NFTCategoriesGrid>
                {NFTCategory.map( category => {
                    return <NTFCategory>
                        <span style={{backgroundColor: category.spanColor}}>
                            <img src={category.imageUrl}/>
                        </span>
                        {category.name}</NTFCategory>
                })}
            </NFTCategoriesGrid>
            
        </Background>
    )
}