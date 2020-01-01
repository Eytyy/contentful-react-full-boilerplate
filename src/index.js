import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import DefaultErrorBoundry from './DefaultErrorBoundry'
import GlobalStyles from './Styles/global.styles'

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}

ReactDOM.render(
  <DefaultErrorBoundry>
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </DefaultErrorBoundry>,
  document.getElementById('app')
)
