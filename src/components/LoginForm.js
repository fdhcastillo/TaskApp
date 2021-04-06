import { useDispatch } from 'react-redux';
import { useFormik} from 'formik'
import * as Yup from 'yup';
import { login } from '../actions/auth';

import { Link } from 'react-router-dom'

import EmailIcon from '@material-ui/icons/Email';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockOpenIcon from '@material-ui/icons/LockOpen';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email("El email debe contenener @ y .").required("Debe ingresar su correo por favor"),
      password: Yup.string().required("Debe ingresar su contraseña por favor"),
    }),
    onSubmit: (formData) => {
      console.log(formData);
      dispatch(login(1234,'Franco'));
    },
  })
  return (
    <form className="auth__form" onSubmit={formik.handleSubmit}>
      <label className="auth__label">Correo</label>     
      <Input 
        className="auth__inputs mb-3"
        placeholder="Ingrese su email"
        type="text" 
        name="email" 
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        startAdornment={
          <InputAdornment position="start">
            <EmailIcon />
          </InputAdornment>
        }
      />
      {
        formik.touched.email && <span style={{color : '#e57373'}}> {formik.errors.email} </span>
      }
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
      {formik.touched.email && <span style={{color : '#e57373'}}> {formik.errors.password} </span>}
      <div className="auth__rememberMe mt-1">
        <label>
          <input type="checkbox" id="rememberpass" value="rememberpass" className="ma-1" />
          Recordarme
        </label>
        <a className="auth__forgotPass mt-1" href="/#">Olvidaste tu contraseña?</a>
      </div>
      <button type="submit" className="btn btn-primary mt-5">Ingresar</button>
      <button type="submit" className="btn btn-primary mt-5">Ingresar con Google <i className="fab fa-google"></i></button>
      <Link to="/auth/register"  className="btn btn-primary mt-5" style={{textAlign:'center',textDecoration:'none'}}>Crear cuenta</Link>
    </form>
  )
}
