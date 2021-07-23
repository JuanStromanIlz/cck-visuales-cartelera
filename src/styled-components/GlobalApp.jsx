import { createGlobalStyle } from "styled-components";

const GlobalApp = createGlobalStyle`
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    height: 100%;
    font-size: 62.5%;
  }
  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;  /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;

    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;

    /* Support for IE. */
    font-feature-settings: 'liga';
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
    h1, h2, h3, h4, h5, h6, p, a {
      margin: 0;
      padding: 0;
      font-weight: inherit;
      font-style: inherit;
    }
  }
  body::-webkit-scrollbar {
    width: .4rem;
  }
  body::-webkit-scrollbar-track {
    background: ${props => props.theme.background};
  }
  body::-webkit-scrollbar-thumb {
    color: ${props => props.theme.main};
    background-color: ${props => props.theme.main};
  }
`;
const white = {
  name: 'white',
  main: '#007cba',
  text: 'black',
  background: 'white'
};

const black = {
  name: 'black',
  main: '#007cba',
  text: 'white',
  background: 'black'
};

export { GlobalApp, white, black };