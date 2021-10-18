import styled from 'styled-components'; 

export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 5rem;

    h1{
        font-size: 5rem;
        font-weight: 500;
        color: var(--font-color-white);

        span{
            color: var(--font-color-blue);
            font-weight: 600;
            font-size: 5.5rem;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img{ 
            width: 30px;
            float: left;

            margin-top: 2.2rem;
            margin-right: 10px;
        }
    p{
        float: left;
        
        margin-top: 2rem;
        font-size: 2rem;

        color: var(--font-color-white);
        font-weight: 400;
    }
`;

