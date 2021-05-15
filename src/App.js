import React, { useState } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Home from './components/Home/Home'
import Header from './components/layout/header'
import setAuthToken from './utils/setAuthToken'
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  return (
    <Provider store={store}>
      <>
        <Header/>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </>
    </Provider>
  )
}

export default App;
