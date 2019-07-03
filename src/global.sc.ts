import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body, header, main, footer, div, h1, h2, h3, h4, p, span, ul, li, table, tbody, thead, tr, td {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: "Roboto", sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    background-color: transparent;
    border: none;
    color: inherit;
    cursor: pointer;
    font-size: inherit;
    outline: none;
  }
`;
