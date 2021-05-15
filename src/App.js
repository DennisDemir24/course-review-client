import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Course from './components/Course/Course'
import setAuthToken from './utils/setAuthToken'
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  return (
    <Provider store={store}>
      <>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route exact path="/course" component={Course} />
          </Switch>
        </Router>
      </>
    </Provider>
  )
}

export default App;
