import { createGlobalStyle } from 'styled-components'

import { fonts, breakpoints, colors } from './vars.styles'

import TitleFont from '../fonts/IBMPlexSans-Bold.woff2'
import BodyFont from '../fonts/IBMPlexSans-Regular.woff2'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: ${fonts.title};
    src: url(${TitleFont}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: ${fonts.regular};
    src: url(${BodyFont}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  html {
    box-sizing: border-box;
	}
  
  * {
    font-weight: normal;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  body {
    font-family: ${fonts.regular};
    font-size: 14px;
    margin: 0;
    @media (min-width: ${breakpoints.tablet}px) {
      font-size: 16px;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  p {
    margin: 0 0 1.5em;
    &:last-child {
      margin-bottom: 0;
    }
  }

  img {
    height: auto;
    display: block;
    width: 100%;
  }

  h1, h2, h3, h4 {
    font-family: ${fonts.title};
    margin: 0;
  }

  strong {
    font-family: ${fonts.title};
  }

  header, video, article, section, main, nav, footer {
    display: block;
  }

  
  #modal {
    position: relative;
    z-index: 100;
  }

  code {
    background-color: ${colors.blue};
    color: #FFF;
    display: inline-block;
  }

`

export default GlobalStyles
