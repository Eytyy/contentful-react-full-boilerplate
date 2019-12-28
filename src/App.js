import React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Post from './Post'

const App = () => {
  return (
    <main>
      <header>
        <h1>Boilerplate</h1>
      </header>
      <Router>
        <Route path="/">
          <Home />
        </Route>
        <Route exact path="/posts/:id">
          <Post />
        </Route>
      </Router>
    </main>
  )
}

export default hot(module)(App)
