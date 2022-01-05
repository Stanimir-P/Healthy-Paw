import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";

import { Redirect } from 'react-router-dom';
import { showErrorMessage } from "../services/common";

const firebaseConfig = {
    apiKey: "AIzaSyDEnMVD3FHaG2QVA8B50xb891tzG3G4WGM",
    authDomain: "healthy-paw-49480.firebaseapp.com",
    databaseURL: "https://healthy-paw-49480-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "healthy-paw-49480",
    storageBucket: "healthy-paw-49480.appspot.com",
    messagingSenderId: "420299937528",
    appId: "1:420299937528:web:9a718f6daa8ac1299d8d0d"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;

export const auth = firebase.auth();

export const storage = firebase.storage();

export const database = firebase.database();

export const register = (email, password, history) => {
    auth.createUserWithEmailAndPassword(email, password)
        .then(() => history.push('/'))
        .catch(err => showErrorMessage('Invalid email address!'));
}

export const login = (email, password, history) => {
    auth.signInWithEmailAndPassword(email, password)
        .then(() => history?.push('/'))
        .catch(err => showErrorMessage('Wrong email or password!'));
}

export const logout = () => {
    auth.signOut();
    return <Redirect to="/" />
}
