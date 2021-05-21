import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

export const GlobalStyles = createGlobalStyle<any>`
    ${normalize()}
    html {
        font-size: 16px;
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: border-box;
    }

    body {
    background: ${({ theme }) => theme.colors.bg.primary};
    color: ${({ theme }) => theme.colors.text.primary};
    font-family: "Inter", sans-serif !important;
    transition: all 0.50s linear;
    }

    main {
        width: 90%;
        margin: 0 auto;
    }

    a {
    color: ${({ theme }) => theme.colors.text.primary};
    cursor: pointer;
  }
`;
