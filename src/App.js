import React, { useState } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Login from './components/Login/Login'
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <>
      <Router>
        <Switch>
          {!isLoggedIn && <Route exact path="/login" component={Login} />}
        </Switch>
      </Router>
    </>
  )
}

export default App;
