import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { batch } from 'react-redux';

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


export  const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const {displayName, email } = userAuth;
    const createdAt = new Date();

    try {

      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })

    } catch (error) {
      console.log("Failed to create user", error.message);
    }
  }
  return userRef;
}


export const addCollectionsAndDocuments = async (
  collectionKey,
  objectsToAdd 
  ) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(object  => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, object);
    })

   return await batch.commit();
}


export const convertCollectionsSnapshotToMap = ( collections) => {
  const tranformedCollection = collections.docs.map( doc => {
    const {title, items} = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  return tranformedCollection.reduce((accumulator, collection) =>{
     accumulator[collection.title.toLowerCase()] = collection;
     return accumulator;
  }, {});
}