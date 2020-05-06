import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const  config = {
    apiKey: "AIzaSyAHREWn_Q6D5lYxUsuCdcVkt1hnhlA2KgU",
    authDomain: "rohit-ecommerce.firebaseapp.com",
    databaseURL: "https://rohit-ecommerce.firebaseio.com",
    projectId: "rohit-ecommerce",
    storageBucket: "rohit-ecommerce.appspot.com",
    messagingSenderId: "397818556545",
    appId: "1:397818556545:web:5f94c684e5ded2e2665d80",
    measurementId: "G-FVH44RRZC1"    
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;