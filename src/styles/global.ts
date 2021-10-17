import { createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background-blue: #061121;
        --font-color-white: #fff;
        --font-color-blue: #1195F2;
    }
    *{
        margin: 0;
        padding: 0;
        
        font-family: 'Roboto';
    }
    body{
        background: var(--background-blue);
        -webkit-font-smoothing: antialiased;
    }

`;