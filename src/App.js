import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Home from './components/Home/Home'
import Layout from './components/layout/Layout'
import CourseHeader from './components/Course/CourseHeader'
import setAuthToken from './utils/setAuthToken'

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
            <Route exact path="/course/:id" component={CourseHeader} />
          </Switch>
        </Router>
      </Layout>
    </Provider>
  )
}

export default App;
