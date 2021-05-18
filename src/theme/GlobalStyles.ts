import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
// import { primaryFont } from '../constants/typography';

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
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font};
    transition: all 0.50s linear;
    }

    main {
        width: 90%;
        margin: 0 auto;
    }

    a {
    color: ${({ theme }) => theme.colors.link.text};
    cursor: pointer;
  }

  button {
    border: 0;
    display: inline-block;
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
    cursor: pointer;
    background-color: #1064EA;
    color: #FFFFFF;
    font-family: ${({ theme }) => theme.font};
  }

  button {
    background-color: ${({ theme }) =>
      theme.colors.button.background} !important;
    color: ${({ theme }) => theme.colors.button.text} !important;
  }
`;
