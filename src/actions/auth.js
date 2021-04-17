import { googleAuthProvider,firebase } from "../firebase/firebase-config";
import { login, logout } from "./creatorActions/actionAuth";


export const startLogin = (email,password) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email,password)
      .then(async({user})=> {
        await dispatch(login(user.uid,user.displayName));
      })
      .catch(e => {
        console.log(e);
      })
  }
}

export const startGoogleLogin = () =>{
  return (dispatch) =>{
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then(({user}) => {
          dispatch(login(user.uid,user.displayName))
        }) 
      .catch(e =>{
        console.log('Error al ingresar a la cuenta  ', e);
      })
  }
}


export const registerWithEmailAndPassword = (email,password,name) => {
  return (dispatch) =>{
    firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(async({user}) => {
        await user.updateProfile({displayName:name});
        dispatch(login(user.uid,user.displayName))
      })
      .catch(e =>{
        console.log('Error al crear la cuenta', e);
      })
  }
}


export const startLogout = () => {
  return async(dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout())
  }
}