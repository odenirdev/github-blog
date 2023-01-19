import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Nunito', sans-serif;
        background: ${(props) => props.theme.base.background};
        color: ${(props) => props.theme.base.color};
    }

    .title-l, .title-m, .title-s  {
        font-family: 'Nunito', sans-serif;
        font-weight: 700;
    }
    
    .title-l {
        font-size: 1.5rem;
        line-height: 130%;
    }
    
    .title-m {
        font-size: 1.25rem;
        line-height: 160%;
    }

    .title-s {
        font-size: 1.125rem;
        line-height: 160%;
    }

    .text-m {
        font-size: 1rem;
        line-height: 160%;
    }

    .text-s {
        font-size: 0.875rem;
        line-height: 160%;
    }
`;
