import {
    Card,
    Image,
    CryptoInfo
} from '../../styles/NFTCard.style';

export default function NFTCard({id, image, price, userPhoto, username, endingData}){

    return(
        <Card>
            <Image style={{backgroundImage: `url(${image})`}}>
                <span id='spanUsername'>
                    <div style={{backgroundImage: `url(${userPhoto})`}}/>
                    {username}
                </span>
            </Image>
            <CryptoInfo>
                <h5>Crypto Bull #{id}</h5>   

                <div>
                    <span>
                        <h6>Price</h6> 
                        <p>{price} ETH</p>   
                    </span>
                    <span>
                        <h6>Ending</h6>  
                        <p>{endingData}</p>  
                    </span>
                </div> 
            </CryptoInfo>
            
        </Card>
    )

}