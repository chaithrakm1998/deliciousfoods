import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCQBjE4iKmQPNsGJMa0kx5l1Nk5OIpUKn0",
    authDomain: "deliciousfoods-b21ea.firebaseapp.com",
    projectId: "deliciousfoods-b21ea",
    storageBucket: "deliciousfoods-b21ea.appspot.com",
    messagingSenderId: "943341136552",
    appId: "1:943341136552:web:5eda76d5780dfddef3309d",
    measurementId: "G-Y0LENQSGX1"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get(); //retreieved the info

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ //sent information to the db
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
