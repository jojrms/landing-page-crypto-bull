import { useContext } from 'react';
import {
    Title,
} from '../styles/BrowsePossibilities.style';
import {
    Background,
    QuestionGrid,
    QuestionBackground,
    QuestionAnswer
} from '../styles/Questions.style';
import { LanguageContext } from '../../language.context.js';

import Arrow from '../images/Questions/Arrow.svg';

export default function Questions(){

    const { translations } = useContext(LanguageContext);

    return(
        <Background>
            <Title>{translations.Questions.Title}</Title>

            <>
                <QuestionGrid>
                    <QuestionBackground>
                        Lectus non id ullamcorper etiam at orci pharetra, lacus, tortor, velit eu?
                        <img src={Arrow}/>
                    </QuestionBackground>
                    <QuestionAnswer>At pretium, velit interdum vivamus cursus in urna, mattis tristique vitae nibh felis ligula velit, vestibulum, aenean enim imperdiet nibh semper laoreet odio pellentesque massa aliquam interdum pharetra neque, vestibulum elit et</QuestionAnswer>
                </QuestionGrid>
            </>
            
        </Background>
    )
}