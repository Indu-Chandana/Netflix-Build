import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBhhvx0Vuw4i4qpSVYB0xK-fsN33-JNUL0",
    authDomain: "netflix-clone-indu.firebaseapp.com",
    projectId: "netflix-clone-indu",
    storageBucket: "netflix-clone-indu.appspot.com",
    messagingSenderId: "552124229357",
    appId: "1:552124229357:web:730057a16f7ae988c10ee4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;