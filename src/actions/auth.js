import { googleAuthProvider,firebase } from "../firebase/firebase-config";
import { login } from "./creatorActions/actionAuth";


export const startLogin = (email,password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(123,'franco'))
    }, 3500);
  }
}

export const startGoogleLogin = () =>{
  return (dispatch) =>{
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then( ({user}) => {
          dispatch(login(user.uid,user.displayName))
        }
    )
  }
}


export const registerWithEmailAndPassword = (email,password,name) => {
  return async(dispatch) =>{
    firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(async({user}) => {
        await user.updateProfile({displayName:name});
        dispatch(login(user.uid,user.displayName))
      })
  }
}
