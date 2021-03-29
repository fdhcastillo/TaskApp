import React from 'react'
import { RegisterForm } from '../../components/RegisterForm'
import registerImg from './../../assets/login/registerImg.png'

export const RegisterScreen = () => {
  return (
    <div className="auth__grid-container">
      <div className="auth__left-information">
        <img className="auth__login-img" src={registerImg} alt="img-register" />
        <h4>Considere estos requisitos y recomendaciones para poder registrarse</h4>
        <ul className="mt-5">
          <li>Su contraseña debe contener al menos una letra mayúscula</li>
          <li>No se acepta signos como "@ % & #  $ !" en su contraseña</li>
          <li>No colocar días de cumpleaños o su nombre como contraseña</li>
        </ul>
      </div>
      <div className="auth__right-information">
      <h1 className="auth__form-title mb-1">Registre sus datos</h1>
        <RegisterForm></RegisterForm>
      </div>
    </div>
  )
}
