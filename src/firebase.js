import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlb_3ztdzP3i5jpKDMgrxkUzTqRSW1vA4",
  authDomain: "whatsapp-clone-cd5a1.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-cd5a1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "whatsapp-clone-cd5a1",
  storageBucket: "whatsapp-clone-cd5a1.appspot.com",
  messagingSenderId: "809242251485",
  appId: "1:809242251485:web:66d9a9b7d4695b77ed8b34",
  measurementId: "G-BS8WB991YH"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;