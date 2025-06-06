import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --font-roboto: 'Roboto', sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: var(--font-roboto);
        background-color: #F4F6FA;
        color: #CB6330;
    }
`;

export default GlobalStyle;