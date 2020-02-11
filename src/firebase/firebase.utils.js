import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCgTstc0YJKSH_kx5_gAIYaBbl9uNyB9PQ",
    authDomain: "crwn-db-52fc4.firebaseapp.com",
    databaseURL: "https://crwn-db-52fc4.firebaseio.com",
    projectId: "crwn-db-52fc4",
    storageBucket: "crwn-db-52fc4.appspot.com",
    messagingSenderId: "1059127183240",
    appId: "1:1059127183240:web:c4ccbd0a00246a49f69c3d"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShop = await userRef.get();

    if(!snapShop.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName, 
          email,
          createdAt,
          ...additionalData
        })
      }catch (error) {
          console.log ('error creating user', error.message)
      }

    }

    return userRef;

  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;