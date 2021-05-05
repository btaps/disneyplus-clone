import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBMnDWyw6_dlL1XFGsoIwJ9-cpn-4AVF4Q",
  authDomain: "disneyplus-clone-8ac52.firebaseapp.com",
  projectId: "disneyplus-clone-8ac52",
  storageBucket: "disneyplus-clone-8ac52.appspot.com",
  messagingSenderId: "372028210573",
  appId: "1:372028210573:web:7a6af1f5ffaf851daa11c4",
  measurementId: "G-P9VPHGNP8B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
