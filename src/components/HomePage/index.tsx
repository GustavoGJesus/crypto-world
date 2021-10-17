import ImgCoins  from '../../assets/coin.png';
import Check from '../../assets/check.png';


import { Title, Content } from './styles'


export function HomePage(){
    return(
        <>
            <Title>
              <h1>Welcome to the <br/> <span>World of Crypto</span></h1>
            </Title>
            <Content>
                <img src={Check} alt="" /> 
                <p>Check out prices</p>
            </Content>
        </>
    )
}