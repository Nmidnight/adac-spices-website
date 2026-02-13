import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
     box-sizing: border-box; 
     margin: 0;
     padding: 0;
    }

  html, body { height: 100%; }

  body {
    margin: 0;
    font-family: 'Raleway', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
    line-height: 1.4;
    background: #fff;
    color: #111;
  }

  a { color: inherit; text-decoration: none; }
  button, input, textarea { font: inherit; }
`;
