import styled from 'styled-components'; 

export const Container = styled.div`
    color: var(--font-color-white);
    .coin-text{
        margin-top: 10rem;
        text-align: center;
        color: var(--font-color-white);
        font-size: 4rem;
        font-weight: 400;
    }
    form{
        margin-left: 30rem;
        margin-top: 2rem;
       
        input{
            width: 20rem;
            padding: 15px 35px;
            border-radius: 5px;
            line-height: 18px;
            border: none;
            outline: none;
       }
    }
    .coin-container{
        display: flex;
        justify-content: center;
        margin-top: 5rem;
    }
    .coin-row{
        display: flex;
        flex-direction: row;
        justify-items: start;    
        align-items: center;
        height: 80px;
        border-bottom: 1px solid #d7d7d7;
        width: 900px;
    }
    .coin{
        display: flex;
        align-items: center;
        padding-right: 24px;
        min-width: 300px;
    }

    .coin h1{
        font-size: 16px;
        width: 150px;
        font-weight: 400;
    }

    .coin img{
        height: 30px;
        width: 30px;
        margin-right: 10px;
    }
    .coin-symbol{
        text-transform: uppercase;
    }

    .coin-data{
        display: flex;
        text-align: center;
        justify-content: space-between;
        width: 100%;
    }

    .coin-price{
        width: 110px;
    }

    .coin-volume{
        width: 155px;
    }
    .coin-marketcap {
        width: 230px;
    }

    .coin-percent {
        width: 100px;
    }

    .red {
        color: #f00606;
    }

    .green {
        color: #11d811;
    }
`;