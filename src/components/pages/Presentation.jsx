import { useContext } from 'react';
import {
    Background,
    BullsImageGrid,
    GradientBlur,
    TextBackground,
    StartingText,
    Title,
    Subtitle,
    SeeMoreButton,
    LetsGoButton
} from '../styles/Presentation.style';
import { LanguageContext } from '../../language.context.js';

import Arrow from '../images/Presentation/Arrow.svg';

export default function Presentation(){
    const { translations } = useContext(LanguageContext);

    return(
        <Background>
            <BullsImageGrid>
                {/* <GradientBlur/> */}
            </BullsImageGrid>

            <TextBackground>
                <StartingText>{translations.Presentation.ConnectWithUs}</StartingText>
                <Title>{translations.Presentation.Title}</Title>
                <Subtitle>{translations.Presentation.Subtitle}</Subtitle>

                <div style={{display: 'flex', gap: '15px', marginTop: '30px'}}>
                    <SeeMoreButton>{translations.Presentation.SeeMoreButton}</SeeMoreButton>
                    <LetsGoButton>
                        <img src={Arrow}/>
                        {translations.Presentation.LetsGoButton}
                    </LetsGoButton>
                </div>
            </TextBackground>
        </Background>
    )
}