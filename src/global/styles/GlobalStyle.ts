import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: #202020;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #FFF;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    color: #FFF;
  }

  ul {
    list-style: none;
  }

  img {
    width: 100%;
    height: auto;
  }
`;