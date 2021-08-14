import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcZJMUUPNbxrjZwAdeZHBQXUqOpiwz-aE",
  authDomain: "whatsapp-clone-10e7d.firebaseapp.com",
  projectId: "whatsapp-clone-10e7d",
  storageBucket: "whatsapp-clone-10e7d.appspot.com",
  messagingSenderId: "226356992972",
  appId: "1:226356992972:web:34b7b7fababff14524db69",
  measurementId: "G-N4G1HZTTQJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;