import { injectGlobal } from 'styled-components';

// Customized normalize
/* eslint no-unused-expressions: 0 */
injectGlobal`
  html, body, div, span, p,
  h1, h2, h3, h4, h5, h6,
  a, img,
  ol, ul, li,
  form, label, input, textarea,
  header, footer, nav, figure {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
  }

  html, input, button, select {
    font-size: 16px;
    font-family: "Helvetica Neue", Helvetica, Arial, "Microsoft JhengHei", sans-serif;
    font-weight: 300;
  }

  html {
    line-height: 1.15; /* Correct the line height in all browsers. */
    -webkit-text-size-adjust: 100%; /* Prevent adjustments of font size after orientation changes in iOS. */
    &[lang=ja] {
      font-family: "Hiragino Kaku Gothic Pro", Osaka, Meiryo, "MS PGothic", Arial, sans-serif;
    }
  }

  body {
    background-color: #fff;
    letter-spacing: 1px;
  }

  h1{
    letter-spacing: 4px;
    font-size: 2em;
    margin: 0.67em 0;
  }

  h2 {
    letter-spacing: 2px;
    font-size: 1.5em;
  }

  ol, ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    border: none;
    background-color: transparent; /* Remove the gray background on active links in IE 10. */
    &:link,
    &:visited,
    &:hover,
    &:active {
      color: inherit;
      text-decoration: none;
    }
  }

  hr {
    box-sizing: content-box; /* Add the correct box sizing in Firefox. */
    height: 0; /* Add the correct box sizing in Firefox. */
    overflow: visible; /*  Show the overflow in Edge and IE. */
  }

  img {
    border-style: none; /* Remove the border on images inside links in IE 10. */
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Add the correct display in Edge, IE 10+, and Firefox. */
  details {
    display: block;
  }

  /* Add the correct display in all browsers. */
  summary {
    display: list-item;
  }

  em {
    font-style: normal;
  }
  
  /* Add the correct font weight in Chrome, Edge, and Safari. */
  b, strong {
    font-weight: bolder;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px white inset;
  }

  button, html [type="button"], [type="reset"], [type="submit"] {
    -webkit-appearance: none;
  }

  /**
  * 1. Add the correct box sizing in IE 10.
  * 2. Remove the padding in IE 10.
  */
  [type="checkbox"], [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }

  /* Remove the inner border and padding in Firefox. */
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  *::-webkit-media-controls-start-playback-button {
    display: none;
    -webkit-appearance: none;
  }

  [hidden] {
    display: none;
  }
`;

