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


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;