import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        
        border: none;
        outline: none;

        box-shadow: 0 0 0 0;
        box-sizing: border-box;

        font-family: "Ubuntu";
    }

    :root {
        --black: #2c3e50;
        --white: #ecf0f1;
        --gray: #95a5a6;
        --silver: #bdc3c7;
        --ligth-pink: #fd79a8;
        --pink: #e84393;
        --red: #ff3030;;
    }

    body {
        width: 100vw;
        height: 100vh;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        overflow: hidden auto;

        background-color: var(--black);
        color: var(--silver);
    }
`;
