
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAK_sd--u8I8P-GGYGxviHfpccRW4fM5m8",
    authDomain: "whatsapp-clone-f48d1.firebaseapp.com",
    projectId: "whatsapp-clone-f48d1",
    storageBucket: "whatsapp-clone-f48d1.appspot.com",
    messagingSenderId: "1028637617306",
    appId: "1:1028637617306:web:06ab0103a397b901fb4323",
    measurementId: "G-RCY4JQQ65D"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;