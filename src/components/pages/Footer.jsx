import {
    Background,
    SocialMediaGrid
} from '../styles/Footer.style';

import Copyright from '../images/Footer/copyright.svg'
import Twitter from '../images/Footer/Twitter.svg'
import Facebook from '../images/Footer/Facebook.svg'
import Discord from '../images/Footer/Discord.svg'

export default function Footer(){
    return(
        <Background>
            <img width={"20px"} height={"20px"} src={Copyright}/>
            <p>2021 LATEST NFT - POWERED BY LATEST</p>

            <SocialMediaGrid>
                <img width={"15px"} height={"15px"} src={Twitter}/>
                <img width={"15px"} height={"15px"} src={Facebook}/>
                <img width={"15px"} height={"15px"} src={Discord}/>
            </SocialMediaGrid>
        </Background>
    )
}