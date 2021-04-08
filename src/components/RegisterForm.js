import React from 'react'
import { useFormik} from 'formik'
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { registerWithEmailAndPassword } from '../actions/auth';

import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FaceIcon from '@material-ui/icons/Face';
import EmailIcon from '@material-ui/icons/Email';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { useDispatch } from 'react-redux';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',
      password: '',
      repassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es obligatorio"),
      lastname: Yup.string().required("Los apellidos son obligatorios"),
      email: Yup.string().email("El email debe contenener @ y .").required("El email es obligatorio"),
      password: Yup.string()
        .required("La contraseña es obligatorio"),
      repassword: Yup.string()
        .required("Reescribir la contraseña es obligatorio")
        .oneOf([Yup.ref("password")],"La contraseñas no coinciden"),
    }),
    onSubmit: (formData) => {
      const { email, password, name} = formData;
      dispatch(registerWithEmailAndPassword(email,password,name));
      
    },
  })
  return (
    <form className="auth__form" onSubmit={formik.handleSubmit}>
      <label className="auth__label">Nombre</label>     
      <Input 
        className="auth__inputs mb-3"
        placeholder="Ingrese su nombre"
        type="text" 
        name="name" 
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        startAdornment={
          <InputAdornment position="start">
            <FaceIcon />
          </InputAdornment>
        }
      />
      {formik.touched.name && <span style={{color : '#e57373'}}> {formik.errors.name} </span>}
      <label className="auth__label">Apellidos</label>     
      <Input 
        type="text"
        name="lastname"
        placeholder="Ingrese sus apellidos"
        className="auth__inputs mb-3"
        onChange={formik.handleChange}
        value={formik.values.lastname}
        error={formik.touched.lastname && Boolean(formik.errors.lastname)}
        startAdornment={
          <InputAdornment position="start">
            <FaceIcon />
          </InputAdornment>
        }
      />
      {formik.touched.lastname && <span style={{color : '#e57373'}}> {formik.errors.lastname} </span>}
      <label className="auth__label">Email</label>  
      <Input
        type="text"
        name="email"
        placeholder="Ingrese su email"
        className="auth__inputs mb-3"
        onChange={formik.handleChange}
        value={formik.values.email}
        error={formik.touched.email && Boolean(formik.errors.email)}
        startAdornment={
          <InputAdornment position="start">
            <EmailIcon />
          </InputAdornment>
        }
      />
      {formik.touched.email && <span style={{color : '#e57373'}}> {formik.errors.email} </span>}
      <label className="auth__label">Contraseña</label>
      <Input
        type="password"
        name="password"
        placeholder="Ingrese su contraseña"
        className="auth__inputs mb-3"
        onChange={formik.handleChange}
        value={formik.values.password}
        error={formik.touched.password && Boolean(formik.errors.password)}
        startAdornment={
          <InputAdornment position="start">
            <LockOpenIcon />
          </InputAdornment>
        }
      />
      {formik.touched.password && <span style={{color : '#e57373'}}> {formik.errors.password} </span>}
      <label className="auth__label">Re-Contraseña</label>
      <Input
        type="password"
        name="repassword"
        placeholder="Ingrese su nuevamente su contraseña"
        className="auth__inputs mb-3"
        onChange={formik.handleChange}
        value={formik.values.repassword}
        error={formik.touched.repassword && Boolean(formik.errors.repassword)}
        startAdornment={
          <InputAdornment position="start">
            <LockOpenIcon />
          </InputAdornment>
        }
      />
      {formik.touched.repassword && <span style={{color : '#e57373'}}> {formik.errors.repassword} </span>}
      <button type="submit" className="btn btn-primary mt-5">Crear cuenta</button>
      <Link to="/auth/login" className="btn btn-primary mt-5" style={{textAlign:'center',textDecoration:'none'}}>Volver</Link>
    </form>
  )
}
