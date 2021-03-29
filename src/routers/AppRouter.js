import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { TaskScreen } from '../screens/TaskScreen'
import { AuthRouter } from './AuthRouter'

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={AuthRouter}></Route>
          <Route path="/" exact component={TaskScreen}></Route>
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  )
}
