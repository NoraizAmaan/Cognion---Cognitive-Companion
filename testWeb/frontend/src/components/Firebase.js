import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDz1CksYF-ig7PJ_zTAUUusdRWAqjyZeb0",
    authDomain: "cognitive-companion.firebaseapp.com",
    projectId: "cognitive-companion",
    storageBucket: "cognitive-companion.appspot.com",
    messagingSenderId: "803585897562",
    appId: "1:803585897562:web:a3075bd0d9167805d61463",
    measurementId: "G-4RR59EJ7EM"
  };

const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result.user.displayName);
      console.log(result.user.email);
      console.log(result.user.photoURL);
      localStorage.setItem("email", result.user.email);
    })
    .catch((err) => {
      console.log(err);
    });
};

const db = app.firestore();

export { auth, signInWithGoogle, db };