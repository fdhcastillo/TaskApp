import React from 'react'
import { LoginForm } from '../../components/LoginForm'

import loginImage from './../../assets/login/loginImg.png'

export const LoginScreen = () => {
  return (
    <div className="auth__grid-container">
      <div className="auth__right-information">
        <h1 className="auth__form-title mb-1">Ingrese sus datos</h1>
        <LoginForm></LoginForm>
      </div>
      <div className="auth__left-information">
        <img className="auth__login-img" src={loginImage} alt="img-login" />
      </div>
    </div>
  )
}
