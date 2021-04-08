import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
  apiKey: "AIzaSyA3ZYIhWQMIjDYp08SO9lzGr4W7gKN5O-M",
  authDomain: "task-web-4be58.firebaseapp.com",
  projectId: "task-web-4be58",
  storageBucket: "task-web-4be58.appspot.com",
  messagingSenderId: "814811037403",
  appId: "1:814811037403:web:8ce07ec661cc390b7356fe"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}