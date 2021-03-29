import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { LoginScreen } from '../screens/auth/LoginScreen'
import { RegisterScreen } from '../screens/auth/RegisterScreen'


export const AuthRouter = () => {
  return (
    <div className="auth__main">
      <div className="auth__cardLogin">
        <Switch>
          <Route path="/auth/login" component={LoginScreen}></Route>
          <Route path="/auth/register" component={RegisterScreen} ></Route>
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </div>
  )
}
