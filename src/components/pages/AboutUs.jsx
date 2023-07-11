import { useContext } from 'react';
import {
    Background,
    TextBackground,
    Title,
    DatasGrid,
    Datas,
    Description
} from '../styles/AboutUs.style';
import { LanguageContext } from '../../language.context.js';

export default function AboutUs(){

    const { translations, language, changeLanguage } = useContext(LanguageContext);

    return(
        <Background>
            <TextBackground>
                <Title>{translations.AboutUs.Title}</Title>

                <DatasGrid>
                    <Datas>
                        <h3>93840K+</h3>
                        <p>Sales</p>
                    </Datas>
                    <Datas>
                        <h3>19231ETH+</h3>
                        <p>Profit</p>
                    </Datas>
                    <Datas>
                        <h3>346K+</h3>
                        <p>Artist</p>
                    </Datas>   
                </DatasGrid>
                
            </TextBackground>
            <Description>
                Porttitor sagittis faucibus vel netus ultrices libero facilisi sit ipsum urna, tempor sem gravida enim, orci molestie amet dignissim justo, massa eu neque dictum at ut placerat nulla dignissim ut ornare enim ut interdum tincidunt at tincidunt.
                <br/>
                <br/>
                Diam faucibus ac in hac justo fringilla molestie amet, lacus scelerisque condimentum adipiscing eros habitasse neque pulvinar integer massa ut dui diam amet eget varius lorem scelerisque orci blandit maecenas cursus fermentum neque quisque at est, semper eleifend eget eros blandit consectetur justo, lacus, iaculis mattis feugiat hendrerit quis felis pulvinar quis ornare.
            </Description>
        </Background>
    )
}