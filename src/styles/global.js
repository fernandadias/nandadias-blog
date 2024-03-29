import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
    transition: all .2s cubic-bezier(0, 0.94, 0.61, 0.72);
  }
  body {
    padding: 40px;
    line-height: 1;
    font-size: 100%;
    height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, "Roboto Mono", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  img {
    display: block;
  	width: 100%;
  	height: auto;
  }

  h1, h2, h3, h4, h5, h6{
    font-family: 'Montserrat', sans-serif;
  }

  p, li, blockquote, a{
    font-family: 'Roboto Mono', monospace;
    letter-spacing: 0.02em;
  }

  body.dark {
    --background: #191A1B;
    --backgroundRGBA-solid: rgba(25,26,27,1);
    --backgroundRGBA-transparent: rgba(25,26,27,0);
    --solid: #0F0F0F;
    --titles: #E8EAEE;
    --texts: #878790;
    --theme: #6356FE;
    --musicColor: #B4FE56;
    --designColor: #FE5688;
    --productColor: #FEED56;
    --frontColor: #FE9C56;
    --dataColor: #56EAFE;
    --backColor: #56FEB7;

    background: var(--background);
  }
  body.light {
    --background: #F4F6F9;
    --backgroundRGBA-solid: rgba(244,246,249,1);
    --backgroundRGBA-transparent: rgba(244,246,249,0);
    --solid: #FAFCFF;
    --titles: #42484F;
    --texts: #878790;
    --theme: #2516C7;
    --musicColor: #7BBC28;
    --designColor: #FE5688;
    --productColor: #DFA534;
    --frontColor: #FE9C56;
    --dataColor: #2FC3D8;
    --backColor: #268B61;

    background: var(--background);
  }


`
export default GlobalStyles