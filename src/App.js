import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Home from './components/Home/Home'
<<<<<<< HEAD
import Course from './components/Course/Course'
=======
import Layout from './components/layout/Layout'
>>>>>>> 29a5ee14750aed40d7e1c85fdf925abf2c6578db
import setAuthToken from './utils/setAuthToken'
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/course" component={Course} />
          </Switch>
        </Router>
      </Layout>
    </Provider>
  )
}

export default App;
