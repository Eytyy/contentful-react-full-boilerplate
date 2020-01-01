import React from 'react'
import { hot } from 'react-hot-loader'
import { Route } from 'react-router-dom'

console.log()

import {
  Provider as ProjectsProvider,
  Details as Project,
  Landing as Work
} from './Work'

import {
  Provider as JournalProvider,
  Details as JournalEntry,
  Landing as Journal
} from './Journal'

import { Container } from './App.styles'

const App = () => {
  return (
    <Container>
      <ProjectsProvider>
        <Route exact path="/">
          <header>
            <h1>Logo Goes Here</h1>
          </header>
          <Work />
        </Route>
        <Route exact path="/work/:id">
          <Project />
        </Route>
      </ProjectsProvider>
      <JournalProvider>
        <Route exact path="/">
          <Journal />
        </Route>
        <Route exact path="/journal/:id">
          <JournalEntry />
        </Route>
      </JournalProvider>
    </Container>
  )
}

export default hot(module)(App)
