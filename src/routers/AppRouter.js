import { useEffect, useState } from "react";
import { firebase } from "../firebase/firebase-config";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { TaskScreen } from '../screens/TaskScreen'
import { AuthRouter } from './AuthRouter'
import { useDispatch } from "react-redux";
import { login } from "../actions/creatorActions/actionAuth";
import { LoadingIcon } from "../components/LoadingIcon";


export const AppRouter = () => {
  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const dispatch = useDispatch();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user)=> {
      if (user?.uid) {
        dispatch(login(user.uid,user.displayName))
        setIsLoggedIn(true);
      }
      else {
        setIsLoggedIn(false);
      }
      setTimeout(() => {
        setChecking(false);
      }, 1000);
    })
  }, [dispatch,setChecking,setIsLoggedIn])

  

  if (checking) {
    return (
      <LoadingIcon size="100"></LoadingIcon>
    )
  }

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
