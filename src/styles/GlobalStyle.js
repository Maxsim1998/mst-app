import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    height: 100%;
    width: 100%;
    font-family: sans-serif;
    background: #614385; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #614385, #516395); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #614385, #516395);
    color: #fff;
  }
  
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
